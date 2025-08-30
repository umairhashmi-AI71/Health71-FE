"use client";

import { ChevronDown, Cross, MessagesSquare, Send, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const AGENT = {
  name: "Leila Shamsi",
  avatar: "/chat-user.png", // Replace with your agent avatar path
  status: "Online",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) textareaRef.current?.focus();
  }, [open]);

  const sampleQuestions: string[] = [
    "Do you require more info regarding Sara’s insurance coverage or benefits?",
    "Do you require more info regarding her previous records or prior authorizations?",
    "Do you require more info regarding the diagnosis, treatment, or prescribed medication?",
  ];

  const autoscroll = () => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  useEffect(() => {
    autoscroll();
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const trimmed = input.trim();
    const content = (text ?? trimmed).trim();
    if (!content || loading) return;
    const userMsg: ChatMessage = {
      id: String(Date.now()),
      role: "user",
      content,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages
            .concat(userMsg)
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok || !res.body) throw new Error("Network error");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      const assistantMsg: ChatMessage = {
        id: `${userMsg.id}-assistant`,
        role: "assistant",
        content: "",
      };
      setMessages((prev) => [...prev, assistantMsg]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsg.id ? { ...m, content: assistantText } : m
          )
        );
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-err`,
          role: "assistant",
          content: "Sorry, something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const Button = useMemo(
    () => (
      <button
        aria-label="Open chat"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4  rounded-xl bg-green text-primary-foreground shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100"
      >
        {open ? "" : <MessagesSquare className="w-8 h-8 m-4" />}
      </button>
    ),
    [open]
  );

  return (
    <>
      {Button}
      {open && (
        <div
          ref={containerRef}
          className="fixed bottom-4 right-4 w-[420px] max-w-[calc(100vw-2rem)] bg-white border border-neutral-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="bg-green px-6 py-4 flex items-center justify-between">
            <img src="/chat-logo.png" alt="Agent" className="w-6 h-6 " />
            <span className="text-sm font-semibold text-white">
              Welcome to RCM71!
            </span>
            <ChevronDown
              className="w-4 h-4 text-white cursor-pointer"
              onClick={() => setOpen((v) => !v)}
            />
          </div>

          {/* Agent Info */}
          <div className="bg-[#E7F2F0] px-6 py-4 flex items-center gap-3">
            <img
              src={AGENT.avatar}
              alt={AGENT.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-base text-[#25324B]">
                {AGENT.name}
              </div>
              <div className="text-green text-sm flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green inline-block"></span>
                {AGENT.status}
              </div>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="max-h-[60vh] min-h-[60vh] overflow-y-auto text-sm"
          >
            {/* Chat Messages */}
            <div
              ref={scrollRef}
              className="flex-1 px-4 py-3 space-y-4 overflow-y-auto bg-white"
            >
              {messages.map((m, idx) => (
                <div
                  key={m.id}
                  className={`flex items-start w-full ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {m.role === "assistant" && (
                      <img
                        src={AGENT.avatar}
                        alt={AGENT.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div
                      className={` grow rounded-xl px-4 py-3 text-base whitespace-pre-line ${
                        m.role === "assistant" ? "bg-alpha-10" : "bg-basecard"
                      }`}
                    >
                      {m.role === "assistant" ? (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {m.content}
                        </ReactMarkdown>
                      ) : (
                        m.content
                      )}
                    </div>
                    {m.role === "user" && (
                      <img
                        src={AGENT.avatar}
                        alt={AGENT.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                  </div>
                </div>
              ))}

              {messages.length === 0 && !loading && (
                <>
                  <div className={`flex items-start w-full justify-start`}>
                    <div className="flex items-start gap-2">
                      <img
                        src={AGENT.avatar}
                        alt={AGENT.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />

                      <div
                        className={` grow rounded-xl px-4 py-3 text-base whitespace-pre-line bg-basecard`}
                      >
                        Hi, my name is Leila!
                        <br />
                        <br />
                        I’m your assistant and I’m here to help you with
                        anything related to medical billing.
                        <br />
                        <br />
                         Just ask me your question, and I’ll guide you step by
                        step.
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-3 flex flex-wrap gap-2 border-b border-neutral-100 bg-neutral-50/60">
                    {sampleQuestions.map((q) => (
                      <button
                        key={q}
                        className=" text-left px-2.5 py-2.5 rounded-sm border border-neutral-200 bg-basecard hover:bg-neutral-100 text-neutral-700"
                        onClick={() => sendMessage(q)}
                        disabled={loading}
                      >
                        ✦ {q}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {loading && (
                <div className="text-left">
                  <div className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-neutral-100 text-neutral-900">
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce [animation-delay:0ms]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce [animation-delay:150ms]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce [animation-delay:300ms]"></span>
                    </span>
                    <span className="text-xs text-neutral-600">Thinking…</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Input */}
          <div className="px-4 py-4 bg-white border-t border-gray-200 flex items-center gap-2">
            <input
              type="text"
              className="flex-1 rounded-xl border border-gray-300 px-4 py-2 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={loading ? "Thinking…" : "Ask anything…"}
              disabled={loading}
              onKeyDown={handleKeyDown}
            />
            <button
              className="rounded-xl bg-green text-white p-3 flex items-center justify-center hover:bg-green-700"
              // onClick={sendMessage}
            >
              <Send className="w-5 h-5" onClick={() => sendMessage()} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

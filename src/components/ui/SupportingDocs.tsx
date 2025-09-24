import { useRef, useState } from "react";
import { Upload } from "lucide-react";

 
export default function SupportingDocs() {
  const [files, setFiles] = useState<Record<string , File| null>>({});


const fileInputRefs: Record<string, React.MutableRefObject<HTMLInputElement | null>> = {
  Abbreviation: useRef<HTMLInputElement | null>(null),
  Exclusion: useRef<HTMLInputElement | null>(null),
  SoB: useRef<HTMLInputElement | null>(null),
};
  const handleFileChange = (doc: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFiles((prev) => ({ ...prev, [doc]: file }));
  };

  const handleClick = (doc: string) => {
    fileInputRefs[doc].current?.click();
  };
  return (
    <div className="space-y-4">
      {(["Abbreviation", "Exclusion", "SoB"] as string[]).map((doc) => (
        <div
          key={doc}
          onClick={() => handleClick(doc)}
          className="flex flex-col items-center justify-center border border-base bg-basecard rounded-lg p-6 text-gray-500 cursor-pointer hover:bg-gray-50"
        >
          <Upload className="w-6 h-6 mb-2 text-muted" />
          {files[doc] ? (
              <div>
            <span className="text-sm text-muted  font-medium">{files[doc]?.name}</span>
                </div>
          ) : (
            <span className="text-muted">Please upload {doc} document</span>
          )}
          <input
            type="file"
            ref={fileInputRefs[doc]}
             accept=".pdf,.png,.jpg,.jpeg"
            onChange={(e) => handleFileChange(doc, e)}
            className="hidden"
          />
        </div>
      ))}
    </div>
  );
}

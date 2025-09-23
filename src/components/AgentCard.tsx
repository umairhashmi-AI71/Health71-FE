import { ClipboardCheck, Clock, Flag, Zap } from "lucide-react";
import { Agent } from "../types/agent";
import { useContext } from "react";
import { AgentContext } from "@/app/layout";
import { useRouter } from "next/navigation";



export default function AgentCard({
  image,
  title,
  role,
  savedHours,
  feature,
  background = "",
  desc
}: Agent) {
  const defaultIcons = [ClipboardCheck, Flag, Zap];
  const { agent, changeAgent } = useContext(AgentContext);
  const route = useRouter();
  return (
    <div className={`rounded-xl px-5 py-3 w-full flex  mb-4 items-center justify-between  ${title.toLocaleLowerCase()}-bg ${background} shadow-md cursor-pointer`} onClick={() => {
      changeAgent(title)
      route.push('/patient')
    }}>
      <div className="flex gap-4 items-center">
        <img src={image} alt={title} className="w-[66px] h-[66px] rounded-full object-cover mt-0" />
        <div>
          <h2 className="text-lg font-semibold line-height-7 ">{title}</h2>
          <p className="text-sm line-height-5 py-1">{role}</p>
          <p className="text-xs line-height-5 mt-1"><i>{desc}</i></p>
        </div>
      </div>


      <div className="mt-5 mb-1.5  gap-4 grid grid-cols-2 w-110">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <span className="py-1">{savedHours} Hours Saved</span>
        </div>
        {feature.map((item, index) => {
          const Icon = item.icon || defaultIcons[index % defaultIcons.length];
          return (
            <div key={index} className="flex items-center space-x-2">
              <Icon className="w-4 h-4" />
              <span className="py-1">{item.count || ''} {item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
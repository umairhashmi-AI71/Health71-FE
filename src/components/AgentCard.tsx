import { ClipboardCheck, Flag, Zap } from "lucide-react";
import { Agent } from "../types/agent";

 

export default function AgentCard({
  image,
  title,
  role,
  savedHours,
  feature,
  background = "",
}: Agent) {
  const defaultIcons = [ClipboardCheck, Flag, Zap];

  return (
    <div className={`rounded-xl p-3 w-full sm:w-[208px] h-[286px] ${title.toLocaleLowerCase()}-bg ${background} shadow-md`}>
      <div className="flex justify-center align-top mb-4 h-[66px ]">
        <img src={image} alt={title} className="w-16 h-16 rounded-full object-cover mt-0" />
      </div>
      <h2 className="text-lg font-semibold line-height-7 ">{title}</h2>
      <p className="text-sm font-medium py-1 line-height-5">{role}</p>
      <p className="text-sm font-medium  line-height-5">I saved <span className={`${title.toLocaleLowerCase()}-highlight`}>{savedHours} hours</span> today.</p>

      <div className="mt-4 space-y-2">
        {feature.map((item, index) => {
          const Icon = item.icon || defaultIcons[index % defaultIcons.length];
          return (
            <div key={index} className="flex items-center space-x-2 text-xs">
              <Icon className="w-4 h-4" />
              <span className="py-1">{item.count || ''} {item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
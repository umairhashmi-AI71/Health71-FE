import AttachmentCard from "@/components/ui/AttachmentCard";
import { Attachment } from "@/types/patient";

 
interface AttachmentGridProps {
  attachments:Attachment[]
  columns?: number;
}

const AttachmentGrid: React.FC<AttachmentGridProps> = ({
  attachments,
  columns = '3',
}) => {
  return (
    <div className={`grid gap-2.5 grid-cols-3`}>
      {attachments?.map((att, idx) => (
        <AttachmentCard
          key={idx}
          fileName={att.fileName}
          fileSize={att.fileSize}
          ecgImageUrl={att.ecgImageUrl}
        />
      ))}
    </div>
  );
};

export default AttachmentGrid;
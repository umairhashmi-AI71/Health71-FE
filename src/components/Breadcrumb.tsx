import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const breadcrumbMap: Record<string, string> = {
  home: "Home",
  patient: "Patient Registery",
  // Add more mappings as needed
};

export default function Breadcrumb() {
  const pathname = usePathname();
 const segments = pathname.replace(/^\/home/, "").split("/").filter(Boolean);

  // Always start with Home
  const items = [
    <span key="home" className="flex items-center">
      <Link href="/home" className="text-muted hover:underline">
        Home
      </Link>
    </span>,
  ];

  segments.forEach((seg, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    const label = breadcrumbMap[seg] || seg;
    const isLast = idx === segments.length - 1;
 
    items.push(
      <span key={href} className="flex items-center">
        <ChevronRight className="w-5 h-5 text-muted mx-2" />
        {isLast ? (
          <span className="font-semibold text-base-primary">{label}</span>
        ) : (
          <Link href={href} className="text-muted hover:underline">
            {label}
          </Link>
        )}
      </span>
    );
  });

  return (
    <nav className="flex items-center py-4">
      {items}
    </nav>
  );
}
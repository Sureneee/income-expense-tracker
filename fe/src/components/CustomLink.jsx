import Link from "next/link";

export const CustomLink = ({ title, href, linkName }) => (
  <div className="flex justify-center">
    <span className="text-[#0F172A] leading-6">{title}</span>
    <Link className="px-3 text-[#0166FF] leading-6" href={href}>
      {linkName}
    </Link>
  </div>
);
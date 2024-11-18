import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

export interface Props {
  className?: "string";
}
const cats = ["ТРЕНАЖЕРЫ", "ОДЕЖДА", "ПИТАНИЕ", "НОВИНКИ", "БРЕНДЫ", "АКЦИИ"];
const activeIndex = 0;
export const Categories: React.FC<Props> = ({ className }) => {
  return (
    /*<div className={cn("inline-flex gap-1  p-1 ml-[125px]", className)}>
      {cats.map((cat, index) => (
        <a
          className={cn("flex items-center font-cruinn h-4 px-10")}
          key={index}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>*/
    <div className={cn("inline-flex gap-1  p-1 pl-auto pr-auto")}>
      {cats.map((name, i) => (
        <Link
          key={name}
          href=""
          className="flex items-center font-cruinn h-4  pl-5 pr-5 m-auto"
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

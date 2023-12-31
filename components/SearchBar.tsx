"use client";
import { iconSearch } from "@/public/icons";
import Image from "next/image";

export default function SearchBarEvent({ classValue }: { classValue?: string }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-[10px] border sm:rounded-[10px] rounded-[10px] border-fontSecondary items-center sm:px-[24px] py-0 px-[18px]"
    >
      <Image src={iconSearch} alt="search" className="sm:w-[20px] w-[12px]" />
      <input
        type="text"
        className="sm:text-h5 text-h7 font-medium rounded-none outline-none placeholder:text-fontPrimary sm:w-[200px] sm:h-[35px] w-[100px] h-[25px]"
        placeholder="Cari..."
      />
    </form>
  );
}

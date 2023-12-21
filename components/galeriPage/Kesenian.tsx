import { gallery } from "@/constant";
import Image from "next/image";

export default function Kesenian() {
  return (
    <div className="relative columns-2 sm:columns-2 md:columns-3 gap-5 sm:gap-8">
      {gallery.map((gallery, i) => (
        <div key={i} className="flex flex-wrap content-start">
          {gallery.kesenian?.img.map((img, i) => (
            <Image key={i} src={img} alt={gallery.kesenian?.altImg[i]} className="rounded-lg mb-5 sm:mb-8"></Image>
          ))}
        </div>
      ))}
    </div>
  );
}

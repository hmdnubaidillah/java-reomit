import { gallery } from "@/constant";
import Image from "next/image";

export default function DaftarKuliner() {
  return (
    <div>
      {gallery.map((gallery, i) => (
        <div
          key={i}
          className="grid grid-cols-1 sm:grid-cols-2 sm:place-items-center md:grid-cols-4 mx-auto md:place-items-center"
        >
          {gallery.kuliner?.img.map((img, j) => (
            <div key={j} className="w-[280px] mt-5">
              <Image
                key={j}
                src={img}
                alt={gallery.kuliner?.altImg[j]}
                className="rounded-lg h-[280px] object-cover"
              ></Image>
              <h1 className="mt-3 font-semibold">{gallery.kuliner?.title[j]}</h1>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

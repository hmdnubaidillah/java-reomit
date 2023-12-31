import { quote } from "@/public/images/beranda";
import Image from "next/image";

export default function QuoteHomepage() {
  return (
    <section className="w-full md:h-screen">
      <div className="relative">
        <div className="absolute h-[30vh] md:h-[85vh] w-full bg-carousel1 bg-cover bg-no-repeat invert rotate-180 -scale-x-100"></div>
        <div className="absolute h-[30vh] md:h-[85vh] w-full flex justify-start items-center">
          <div className="w-[80%] m-auto">
            <div className="relative w-fit px-12 py-7">
              <Image src={quote} width={40} height={40} alt="quote" className="absolute top-0 left-0" />
              <span>
                <h1 className="text-h6 sm:text-h3 md:text-h1 font-bold text-white w-[120px] sm:w-[300px] md:w-[500px] my-3">
                  Esensi dari kebudayaan adalah Menghormati
                </h1>
              </span>
              <Image src={quote} width={40} height={40} alt="quote" className="rotate-180 absolute bottom-0 right-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

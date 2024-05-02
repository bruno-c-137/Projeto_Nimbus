import Image from "next/image";
import ImgNimbusMain from "@/assets/imgs/img-nimbus-main.webp";

export default function Home() {
  return (
    <div className="bg-black pb-10">
      <div className="container">
        <div className="lg:h-screen lg:flex lg:flex-col mb-20 md:mb-32">
          <div className="mb-20 md:mb-28 lg:mb-20 lg:flex-1">
            <Image className="w-full" src={ImgNimbusMain} alt="" />
          </div>

          <div>
            <p className="text-white text-xs sm:text-lg uppercase tracking-[0.5em] text-center">
              site em manutenção
            </p>
          </div>
        </div>
        <div className="mb-10 sm:mb-20">
          <form className=" space-y-5 sm:space-y-10">
            <div className="flex flex-col sm:flex-row gap-y-7 sm:gap-y-0 gap-x-12">
              <div className="sm:w-1/2">
                <input
                  placeholder="Nome"
                  required
                  className="w-full bg-black pr-2 py-2 placeholder:text-[#C5C5C5] text-[#C5C5C5] text-sm sm:text-lg   border-b-2 border-[#C5C5C5] focus:outline-none "
                  type="text"
                />
              </div>
              <div className="sm:w-1/2">
                <input
                  placeholder="E-mail"
                  required
                  className="w-full bg-black pr-2 py-2 placeholder:text-[#C5C5C5] text-[#C5C5C5] text-sm sm:text-lg   border-b-2 border-[#C5C5C5] focus:outline-none "
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-y-7 sm:gap-y-0 gap-x-12">
              <div className="sm:w-1/2">
                <input
                  placeholder="Telefone"
                  required
                  className="w-full bg-black pr-2 py-2 placeholder:text-[#C5C5C5] text-[#C5C5C5] text-sm sm:text-lg   border-b-2 border-[#C5C5C5] focus:outline-none "
                  type="text"
                />
              </div>
              <div className="sm:w-1/2">
                <input
                  placeholder="Assunto"
                  required
                  className="w-full bg-black pr-2 py-2 placeholder:text-[#C5C5C5] text-[#C5C5C5] text-sm sm:text-lg   border-b-2 border-[#C5C5C5] focus:outline-none "
                  type="text"
                />
              </div>
            </div>
            <div>
              <textarea
                placeholder="Mensagen"
                required
                className="w-full bg-black pr-2 py-2 placeholder:text-[#C5C5C5] text-[#C5C5C5] text-sm sm:text-lg   border-b-2 border-[#C5C5C5] focus:outline-none "
                cols={20}
                rows={4}
                minLength={40}
              />
            </div>
            <div className="pt-5">
              <button className="text-[#C5C5C5] text-sm sm:text-lg border-2 border-[#C5C5C5] w-full py-3 btn-custom">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div>
          <p className="text-white text-xs sm:text-lg uppercase tracking-[0.5em] text-center">
            Criamos o extraordinário.{" "}
            <span className="text-[#0038FF]">Redefinimos o impossível.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

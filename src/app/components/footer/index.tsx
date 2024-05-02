import Image from "next/image";
import IconInstagram from "@/assets/imgs/icon-instagram.svg";
import IconFacebook from "@/assets/imgs/icon-facebook.svg";
import IconYT from "@/assets/imgs/icon-yt.svg";
export default function Footer() {
  return (
    <div className="bg-black pb-10">
      <div className="container">
        <div className="flex justify-center gap-x-10 ">
          <div>
            <IconInstagram alt="instagram" />
          </div>
          <div>
            <IconFacebook alt="facebook" />
          </div>
          <div>
            <IconYT alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
}

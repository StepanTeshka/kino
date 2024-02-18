import Image, { StaticImageData } from "next/image";

import youtube from "../../public/YouTube.png";

type Props = {
    image: StaticImageData
    link: string
}

export const Kino = ({image, link}: Props) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden w-full h-full relative flex justify-center items-center">
      <Image src={image} alt="film" className="aspect-square max-h-[450px]" />
      <a className="w-full h-full absolute top-0 left-0 justify-center items-center flex opacity-0 hover:opacity-100 cursor-pointer duration-200" href={link}>
        <div className="z-50">
          <Image src={youtube} alt="youtube" className="rotate-180" />
        </div>
        <div className="w-full h-full bg-black opacity-50 absolute"></div>
      </a>
    </div>
  );
};

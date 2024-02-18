import Image from "next/image";
import image from "../../public/2024-02-16 20.41.26.jpg";
import Link from "next/link";

export const MainKino = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative overflow-hidden rounded-xl">
        <Image src={image} alt="test" />
        <Link className="bg-orange-400 rounded-xl p-3 absolute bottom-5 left-5 cursor-pointer hover:scale-110 duration-200 z-50" href={"https://www.kinopoisk.ru/film/570117/"}>
          Смотреть
        </Link>
        <div className="w-full h-full bg-black opacity-0 hover:opacity-50 absolute top-0 left-0 duration-200"></div>
      </div>
    </div>
  );
};

import { Links } from "./Links";

export const Header = () => {
  return (
    <header className="flex p-5 h-20 relative justify-between">
      <h1 className="text-white text-3xl z-50">
        Kitecy<span className="text-orange-400">Hub</span>
      </h1>
      <p className="text-xs">Вот к чему привело меня самообучение.</p>
      <nav className="z-50 flex justify-center items-center gap-5">
        <Links link="/" name="Главная" />
        <input type="text"  className="border-white p-1 rounded-lg border-2 bg-black" placeholder="Поиск"/>
      </nav>
      <div className="bg-gray-500 opacity-15 w-full h-full absolute top-0 left-0 rounded-b-lg"></div>
    </header>
  );
};

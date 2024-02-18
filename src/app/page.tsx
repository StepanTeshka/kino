import { FullKino } from "@/components/FullKino";
import { Header } from "@/components/Header";
import { MainKino } from "@/components/MainKino";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Header />
      <div className="px-5 flex flex-col gap-40 pb-10">
            <MainKino />
            <FullKino />  
      </div>
    </main>
  );
}

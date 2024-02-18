import tony from "../../public/2024-02-16 21.22.50.jpg";
import tony2 from "../../public/2024-02-16 21.23.14.jpg";
import tony3 from "../../public/2024-02-16 21.23.29.jpg";
import tony4 from "../../public/2024-02-16 21.25.34.jpg";
import piter from "../../public/2024-02-17 13.58.43.jpg";
import tony5 from "../../public/2024-02-17 13.58.49.jpg";
import { Kino } from "./Kino";

export const FullKino = () => {
  return (
      <div className="flex flex-col gap-5">
          <h2 className="text-3xl">Кино:</h2>
      <div className="grid grid-cols-3 w-full gap-3">
        <Kino link="" image={tony} />
        <Kino link="" image={tony2} />
        <Kino link="" image={tony3} />
        <Kino link="" image={tony4} />
        <Kino link="" image={tony5} />
        <Kino link="" image={piter} />
      </div>
    </div>
  );
};

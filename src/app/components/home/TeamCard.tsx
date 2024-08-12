import { Team } from "@/app/types";
import Image from "next/image";

type Props = {
  team: Team;
};

export default function TeamCard({ team }: Props) {
  return (
    <div className="h-full w-full flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front flex items-center overflow-hidden">
          <Image
            src={team.image}
            alt="Avatar"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
        <div className="flip-card-back flex flex-col justify-center items-center">
          <div className="text-5xl font-semibold text-black italic">
            {team.name}
          </div>
          <span className=" dark:text-gray-400 mt-4 text-black">
            {team.role}
          </span>
          <p className="w-2/3 text-black text-sm mt-6">
            We have over 12 different trips for you to trek all over the hills
            and himalayas of Nepal. Contact us to learn more.
          </p>
        </div>
      </div>
    </div>
  );
}

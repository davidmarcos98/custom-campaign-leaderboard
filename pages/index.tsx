import DefaultLayout from "@/layouts/default";
import users from "../public/players_76165.json";
import Link from 'next/link';

import React from "react";
import TableView from "@/components/table";

interface Campaign {
  id: number,
  enabled: boolean
}
const campaigns: Campaign[] = [{id: 76165, enabled: true}, {id: 76165, enabled: false}, {id: 76165, enabled: false}, {id: 76165, enabled: false}, {id: 76165, enabled: false}, ]

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 h-full">
        
        <div id="campaignSelector" className="flex justify-center items-center gap-4">
          {campaigns.map((campaign: Campaign, index: number) => {
            if (campaign.enabled) {
              return (
                <Link key={campaign.id} href={`/campaign/${campaign.id}`}><p className="text-2xl font-bold underline">Week {index + 1}</p></Link>
              )
            } else {
              return (
                <Link key={campaign.id} href={"/"} className="pointer-events-none"><p className="text-2xl font-bold line-through" style={{ color: "grey" }}>Week {index + 1}</p></Link>
              )
            }
          })}
        </div>
        { users.leaderboard.length > 0 &&
          <div id="leaderboardTable" className="xl:w-[30vw] lg:w-[40vw] md:w-[50vw] w-[90vw]">
            <TableView users={users.leaderboard} updated={users.updateTime}></TableView>
          </div>
        }
      </section>
    </DefaultLayout>
  );
}

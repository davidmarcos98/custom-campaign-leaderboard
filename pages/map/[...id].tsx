import { useRouter } from 'next/router'
import {Tabs, Tab} from '@nextui-org/react'
import TableView, {User} from '@/components/table'
import Link from 'next/link'

interface Position {
    position: number,
    time: number,
    player: string
}
interface Map {
    mapId: string,
    mapName: string,
    author: string,
    thumbnail: string,
    id: string,
    leaderboard: Position[],
    medals: {
        at: number,
        gold: number,
        silver: number,
        bronze: number
    }
}
interface CampaignData {
    name: string,
    id: number,
    image: string,
    mapCount: number,
    maps: Map[]
}

function cleanMapName(name: string) {
    console.log(name)
    name = name.replace(/\$[oiwnmtsgz$]/g, '')
    const hexColorRegex = /\$[0-9A-Fa-f]{3}/g; 

    // Replace all matches with an empty string
    const cleanedString = name.replace(hexColorRegex, '');
  
    return cleanedString;
  
} 

export default function Map() {
    const router = useRouter()
    let mapData;
    console.log(router.query)
    if (router.query.mapData) {
        mapData = JSON.parse(router.query.mapData as string)
    } else if(router.query.id){
        let campaignData: CampaignData = require(`../../public/results_${router.query.id[0]}.json`)
        campaignData.maps.map(map => {
            if (router.query.id && map.id == router.query.id[1]){
                mapData = map;
            }
        })
    }
    console.log(mapData)
    
    return (
        <>
            {mapData && (
                <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full h-full">
                    <Link href={`https://trackmania.io/#/leaderboard/${mapData.uid}`} target='_blank'><p className='text-2xl font-bold'>{cleanMapName(mapData.mapName)}</p></Link>
                    <div id="leaderboardTable" className="xl:w-[30vw] lg:w-[40vw] md:w-[50vw] w-[90vw]">
                        <TableView users={mapData.leaderboard} columns={["position", "player", "time"]}/>
                    </div>
                </section>
            )}
        </>
    )
}

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

export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: ["57861", "97554425-0df3-4592-b2d3-ebd0bef76cd2"] } },
        { params: { id: ["57861", "a5a1bac2-bd09-40e9-8059-f184472f6e08"] } },
        { params: { id: ["57861", "af69a616-6f63-4a4b-bb77-8d82dfe684ae"] } },
        { params: { id: ["57861", "c13c7e03-630f-46d1-af61-f5a22c26d62d"] } },
        { params: { id: ["57861", "72341be1-ed75-4124-a80d-d951fa5a808a"] } },
        { params: { id: ["57861", "3fb88d65-b77a-4bc5-a88b-e3b951ef343f"] } },
        { params: { id: ["57861", "c995c4ff-31a6-49fa-99d6-e5bb01774b66"] } },
        { params: { id: ["57861", "4527991e-eb6b-4042-a8d9-48514ae9db61"] } },
        { params: { id: ["57861", "d21a2ac6-ba45-4593-b9f3-a864f71a35a2"] } },
        { params: { id: ["57861", "0e69ba92-95fe-41bd-8a3a-40e9a64d49fe"] } },
        { params: { id: ["57861", "fac140c5-f756-484b-a9ca-1c80b89eee37"] } },
        { params: { id: ["57861", "afe11aca-73f3-48dc-ac3d-5f29a9617334"] } },
        { params: { id: ["57861", "3932e041-c527-40d4-b0ba-ccfeeb53c80c"] } },
        { params: { id: ["57861", "6020429f-451f-4404-8b4d-70b5992fc73b"] } },
        { params: { id: ["57861", "ed855997-282a-47d4-89d0-9b81134b25b3"] } },
        { params: { id: ["57861", "4d322e85-febd-4b63-88c5-6eff255fb14d"] } },
        { params: { id: ["57861", "a3438dc8-6bee-4243-a828-6ee5df0950e5"] } },
        { params: { id: ["57861", "71c627f8-e1d1-4161-8861-635eefa40b31"] } },
        { params: { id: ["57861", "17e19f33-2a2c-4751-85d9-cfde68b5e747"] } },
        { params: { id: ["57861", "601cafac-d816-44da-aeb3-c52eec64f927"] } },
        { params: { id: ["57861", "938938df-2143-49d7-896f-07a669d1c4f7"] } },
        { params: { id: ["57861", "f15ab0bb-31fc-4204-aa30-0b8767de1756"] } },
        { params: { id: ["57861", "8724d4c7-0fd0-4ea9-b6e5-2a981bbed4f0"] } },
        { params: { id: ["57861", "e398d56a-9e7f-4d39-9c44-5cec69ebb958"] } },
        { params: { id: ["57861", "3e46895f-2d80-4139-b4cc-33535f5cd12a"] } },
    ],
      fallback: false
    }
}
export async function getStaticProps() {
    return { props: {} }
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

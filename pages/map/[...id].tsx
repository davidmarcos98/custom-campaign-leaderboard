import { useRouter } from 'next/router'
import { Chip, Image, Tooltip } from '@nextui-org/react'
import TableView from '@/components/table'
import Link from 'next/link'
import DefaultLayout from '@/layouts/default'

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
    maps: Map[],
    updateTime: number
}

const medalPoints = {
    at: 5,
    gold: 3,
    silver: 2,
    bronze: 1
}

function cleanMapName(name: string) {
    name = name.replace(/\$[oiwnmtsgz$]/g, '')
    const hexColorRegex = /\$[0-9A-Fa-f]{3}/g; 

    // Replace all matches with an empty string
    const cleanedString = name.replace(hexColorRegex, '');
  
    return cleanedString;
} 

export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: ["76165", "ad5dcebc-4ad8-4726-9521-f7af015dcfb0"] } },
        { params: { id: ["76165", "414a124f-c621-47da-a0e3-fcf37fec6ab8"] } },
        { params: { id: ["76165", "d93943a0-cb90-416d-bc71-b5a1bd4a6334"] } },
        { params: { id: ["76165", "26f4811e-462c-487f-8cf8-a44c0ecbf1ee"] } },
        { params: { id: ["76165", "7d5a11bf-bc6b-4511-9930-cd32ab50389e"] } },
    ],
      fallback: false
    }
}
export async function getStaticProps() {
    return { props: {} }
}

function formatMilliseconds(milliseconds: number) {
    // Ensure the input is a valid number
    if (isNaN(milliseconds) || milliseconds < 0) {
      return "Invalid input";
    }
  
    // Calculate minutes, seconds, and remaining milliseconds
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const remainingMilliseconds = milliseconds % 1000;
  
    // Format the output with leading zeros
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(remainingMilliseconds).padStart(3, '0');
  
    return `${minutes ? formattedMinutes + ':' : ''}${formattedSeconds}.${formattedMilliseconds}`;
  }
  

export default function Map() {
    const router = useRouter()
    let mapData;
    let updateTime = 0;
    if (router.query.mapData) {
        mapData = JSON.parse(router.query.mapData as string)
    } else if(router.query.id){
        let campaignData: CampaignData = require(`../../public/results_${router.query.id[0]}.json`)
        campaignData.maps.map(map => {
            if (router.query.id && map.id == router.query.id[1]){
                mapData = map;
            }
        })
        updateTime = campaignData.updateTime;
    }

    return (
        <>
            {mapData && (
                <DefaultLayout>
                    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full h-full">
                        <Link href={`https://trackmania.io/#/leaderboard/${mapData.uid}`} target='_blank'><p className='text-2xl font-bold'>{cleanMapName(mapData.mapName)}</p></Link>
                        <div className='inline flex gap-3'>
                            {Object.entries(mapData.medals).map(([medal, value]: Array<any>) => (
                                <Tooltip key={medal} content={`+${medalPoints[medal as keyof typeof medalPoints]} points`}>
                                    <Chip
                                        key={medal} 
                                        size='md'
                                        classNames={{
                                            base: "h-auto",
                                            content: "py-1"
                                        }}
                                    >
                                        <div className='inline flex items-center'>
                                            <Image src={`/${medal}.png`} width={30}/>
                                            &nbsp;
                                            <p className='text-md font-semibold'>{ formatMilliseconds(value) }</p>
                                        </div>
                                    </Chip>
                                </Tooltip>
                            ))}
                        </div>
                        <div id="leaderboardTable" className="xl:w-[30vw] lg:w-[40vw] md:w-[50vw] w-[90vw]">
                            <TableView users={mapData.leaderboard} updated={updateTime} columns={["position", "player", "time"]}/>
                        </div>
                    </section>
                </DefaultLayout>
            )}
        </>
    )
}

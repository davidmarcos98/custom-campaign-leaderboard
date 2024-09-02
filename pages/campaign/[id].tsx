import { useRouter } from 'next/router'
import TableView, { User } from '@/components/table'
import Link from 'next/link';
import {Card, CardFooter, CardHeader, Tabs, Tab, Image} from "@nextui-org/react";
import { useEffect, useState } from 'react';

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
    name = name.replace(/\$[oiwnmtsgz$]/g, '')
    const hexColorRegex = /\$[0-9A-Fa-f]{3}/g; 

    // Replace all matches with an empty string
    const cleanedString = name.replace(hexColorRegex, '');

    return cleanedString;  
} 

export default function Campaign() {
    const router = useRouter()
    const [selectedTab, setSelectedTab] = useState("notyet")

    useEffect(() => {
        let key = localStorage.getItem('campaignViewTabKey') || "leaderboard";
        setSelectedTab(key)
    }, [])

    useEffect(() => {
        if (selectedTab != "notyet") {
            localStorage.setItem('campaignViewTabKey', selectedTab)
        }
    }, [selectedTab])

    let campaignData: CampaignData = router.query.id ? require(`../../public/results_${router.query.id}.json`) : {};
    let leaderboardData: User[] = router.query.id ? require(`../../public/players_${router.query.id}.json`) : [];
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full h-full">
            <p className='text-4xl font-bold'>{campaignData.name || ""}</p>
            { (selectedTab != "notyet" && campaignData && leaderboardData.length > 0) && (
                <Tabs onSelectionChange={(key) => setSelectedTab(key as string)} selectedKey={selectedTab}>
                    <Tab key='leaderboard' title='Leaderboard'>
                        <div id="leaderboardTable" className="xl:w-[30vw] lg:w-[40vw] md:w-[50vw] w-[90vw]">
                            <TableView users={leaderboardData}/>
                        </div>
                    </Tab>
                    <Tab key='maps' title='Maps'>
                        <div id="mapsContainer" className='grid grid-cols-3 gap-4 justify-center'>
                            {campaignData.maps.map(map => (
                                <Link key={map.id} href={`/map/${campaignData.id}/${map.id}`}>
                                    <Card
                                    isFooterBlurred
                                    radius="lg"
                                    className="border-none"
                                >
                                    <CardHeader style={{ zIndex: 11 }} className='justify-between before:bg-white/10 bg-black/40 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large top-2 left-1/2 transform -translate-x-1/2 w-max shadow-small ml-1 z-10'>
                                        <p className="text-medium text-white font-bold" color="default">
                                            {cleanMapName(map.mapName)}<br></br>
                                        </p>
                                    </CardHeader>
                                    <Image
                                    className="object-cover"
                                    src={map.thumbnail}
                                    width="100%"
                                    />
                                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 right-1 w-[fit-content] shadow-small ml-1 z-10">
                                        <p className="text-tiny text-white/80 italic">by {map.author}</p>
                                    </CardFooter>
                                </Card>
                                </Link>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            )}
        </section>
    )
}

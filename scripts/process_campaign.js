const TMIO = require("trackmania.io");
const pc = require("picocolors");
const fs = require("fs").promises;

const POINTS_AT = 5;
const POINTS_GOLD = 3;
const POINTS_SILVER = 2;
const POINTS_BRONZE = 1;
const POINTS_TOP_10 = "15,12,10,8,6,5,4,3,2,1"
  .split(",")
  .map((i) => parseInt(i));

const CLUB_ID = "2270";
const data = {};
const playerResults = {};
const playerIds = {};
const CAMPAIGN = 76165;

const getCampaign = async (CAMPAIGN_ID) => {
  console.log(`Getting campaign ${CAMPAIGN_ID} from club ${CLUB_ID}`);
  let client = new TMIO.Client();
  client.setUserAgent("Scrapie's Sushi event website: sushi.socr.am, discord:@socramdavid mailto:davidmarcosg98@gmail.com")
  let campaign = await client.campaigns.get(
    (clubId = CLUB_ID),
    (id = CAMPAIGN_ID)
  );
  data.maps = []
  data.id = CAMPAIGN_ID;
  data.name = campaign.name;
  data.image = campaign.image;
  data.mapCount = campaign.mapCount;

  let maps = await campaign.maps();
  for (let map of maps) {
    await processMap(map, CAMPAIGN_ID);
  }
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const addPlayerPoints = (player, medals) => {
  if (!Object.keys(playerResults).includes(player.playerName)) {
    playerResults[player.playerName] = 0;
  }
  let points = 0;
  if (player.time <= medals.author) {
    points += POINTS_AT;
  } else if (player.time <= medals.gold) {
    points += POINTS_GOLD;
  } else if (player.time <= medals.silver) {
    points += POINTS_SILVER;
  } else if (player.time <= medals.bronze) {
    points += POINTS_BRONZE;
  }
  if (player.position <= 10) {
    points += POINTS_TOP_10[player.position - 1];
  }

  playerResults[player.playerName] += points;
};

const processMap = async (map, CAMPAIGN_ID) => {
  console.log(
    "Getting leaderboard for " +
      pc.bold(
        pc.green(
          map.name.replace(/\$[0-9A-Fa-f]{3}/g, "").replace(/\$[a-zA-Z]/g, "")
        )
      )
  );
  let medals = map.medalTimes;
  let mapData = {
    mapId: map.id,
    mapName: map.name,
    author: map.authorName,
    thumbnail: map.thumbnail,
    id: map.id,
    uid: map.uid,
    url: map.url,
    leaderboard: [],
    medals: {
      at: medals.author,
      gold: medals.gold,
      silver: medals.silver,
      bronze: medals.bronze,
    },
  };
  let lb = await map.leaderboardLoadMore();
  await sleep(3000);
  while (lb.length > 0 && lb.at(-1).time <= medals.bronze) {
    lb = await map.leaderboardLoadMore();
    console.log(
      "Getting leaderboard for " +
        pc.bold(
          pc.green(
            map.name.replace(/\$[0-9A-Fa-f]{3}/g, "").replace(/\$[a-zA-Z]/g, "")
          )
        ) +
        " | " +
        pc.bold(lb.at(-1).position + " positions retrieved")
    );
    await sleep(3000);
  }
  for (let player of lb) {
    addPlayerPoints(player, medals);
    mapData.leaderboard.push({
      position: player.position,
      time: `${player.time/1000}s`,
      player: player.playerName,
      id: player._data.player.id
    });
    playerIds[player.playerName] = player._data.player.id;
  }
  data.maps.push(mapData)
};

getCampaign(CAMPAIGN).then(() => {
  console.log("Saving file...");
  fs.writeFile(`./public/results_${CAMPAIGN}.json`, JSON.stringify(data), (err) => {
    console.log(err);
  }).then(() => {
    let lb = []
    Object.keys(playerResults).forEach(player => {
      lb.push({
        position: 0,
        player: player,
        points: playerResults[player],
        id: playerIds[player]
      })
    });
    lb.sort((a, b) => b.points - a.points);
    lb.forEach((user, index) => {
      user.position = index + 1;
    })

    fs.writeFile(`./public/players_${CAMPAIGN}.json`, JSON.stringify(lb), (err) => {
      console.log(err);
    }).then(() => {
      process.exit();
    });
  });
});

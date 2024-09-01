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

const getCampaign = async (CAMPAIGN_ID) => {
  console.log(`Getting campaign ${CAMPAIGN_ID} from club ${CLUB_ID}`);
  let client = new TMIO.Client();
  let campaign = await client.campaigns.get(
    (clubId = CLUB_ID),
    (id = CAMPAIGN_ID)
  );
  let maps = await campaign.maps();
  for (let map of maps) {
    await processMap(map);
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

const processMap = async (map) => {
  let medals = map.medalTimes;
  data[map.id] = {
    mapId: map.id,
    mapName: map.name,
    author: map.authorName,
    leaderboard: [],
    medals: {
      at: medals.author,
      gold: medals.gold,
      silver: medals.silver,
      bronze: medals.bronze,
    },
  };
  let lb = await map.leaderboardLoadMore();
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
    await sleep(1600);
  }
  for (let player of lb) {
    addPlayerPoints(player, medals);

    data[map.id].leaderboard.push({
      position: player.position,
      time: player.time,
      player: player.playerName,
    });
  }
};

getCampaign(57861).then(() => {
  console.log("Saving file...");
  fs.writeFile(`./public/results_${57861}.json`, JSON.stringify(data), (err) => {
    console.log(err);
  }).then(() => {
    fs.writeFile(`./public/players_${57861}.json`, JSON.stringify(playerResults), (err) => {
      console.log(err);
    }).then(() => {
      process.exit();
    });
  });
});

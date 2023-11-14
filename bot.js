const { AoiClient } = require("aoi.js");
const {
  AoiVoice,
} = require("@akarui/aoi.music");

const client = new AoiClient({
  token: "TOKEN",
  prefix: "l:", // You can change this however you'd like
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
  events: ["onMessage", "onInteractionCreate"],
});

client.status({
  name: "Latte Bot ┃ Prefix - [ l: ]",
  type: "CUSTOM",
  status: "online",
  time: 60,
});

client.readyCommand({
  code: `$log[Client logged in as: $userTag[$clientID] - ID: $clientID]`
});

client.loadCommands("./commands/", true);

const voice = new AoiVoice(client, {
  searchOptions: {
    soundcloudClientId: "ID", // Setting the ID is sometimes required or the bot may crash trying to fetch the song
    youtubegl: "US",
  },
  requestOptions: {
    offsetTimeout: 0,
    soundcloudLikeTrackLimit: 10000000,
  },
});

voice.bindExecutor(client.functionManager.interpreter);
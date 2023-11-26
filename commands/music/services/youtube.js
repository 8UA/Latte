module.exports = [{
    name: "youtube",
    aliases: ["yt"],
    code: `
    $color[#F22727]
    $title[Latte - Youtube]
    $description[Now playing : $songInfo[title]]
    $footer[Requested by $userTag]
    $playTrack[$cropText[$message;12];youtube]
    $joinVC[$voiceID]
    $clientTyping
    `,
  },
];
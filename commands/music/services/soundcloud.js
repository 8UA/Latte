module.exports = [{
    name: "soundcloud",
    aliases: ["sc"],
    code: `
    $color[#F2AB27]
    $title[Latte - Soundcloud]
    $description[Now playing : $songInfo[title]]
    $footer[Requested by $userTag]
    $playTrack[$cropText[$message;12];soundcloud]
    $joinVC[$voiceID]
    $clientTyping
    `,
  },
];
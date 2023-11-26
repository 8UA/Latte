module.exports = [{
    name: "whatsong",
    aliases: ["ws"],
    code: `
    $color[$random[000000;999999]]
    $title[$songInfo[title]]
    $description[Track Duration | $digitalFormat[$getCurrentTrackDuration]]
    `,
  },
];
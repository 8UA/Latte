module.exports = [{
    name: "youtube",
    code: `
    Now playing - ($songInfo[title])
    $playTrack[$cropText[$message;12];youtube]
    $stopTrack
    $joinVC`,
  },
];
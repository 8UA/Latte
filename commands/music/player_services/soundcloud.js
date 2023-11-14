module.exports = [{
    name: "soundcloud",
    code: `
    Now playing - ($songInfo[title])
    $playTrack[$cropText[$message;12];soundcloud]
    $stopTrack
    $joinVC`,
  },
];
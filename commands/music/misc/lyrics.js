module.exports = [{
    name: "lyrics",
    code: `
    $color[$random[000000;999999]]
    $title[$jsonRequest[https://api.popcat.xyz/lyrics?song=$cropText[$message;12];title;]]
    $description[$jsonRequest[https://api.popcat.xyz/lyrics?song=$cropText[$message;12];lyrics;]]
    $footer[$jsonRequest[https://api.popcat.xyz/lyrics?song=$cropText[$message;12];artist;]]
    $clientTyping
    `,
  },
];
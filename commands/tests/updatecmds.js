// No one can use this command unless you're the bot owner.
module.exports = [{
    name: "updatecmds",
    aliases: ["ucmds"],
    code: `
    $color[$random[000000;999999]]
    $title[Update commands]
    $description[Bot commands updated!]
    $updateCommands
    $onlyForIDs[$clientOwnerIDs;]
    `,
  },
];
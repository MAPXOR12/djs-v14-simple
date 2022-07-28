const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { Colors } = require('discord.js');

module.exports = {
    name: "embed",
    description: "embeds",
    aliases: ["em"],
    run: async (client, message, args) => {
    ////
    const help = new EmbedBuilder()
      .setTitle(`${client.user.username} Help`)
      .setColor("Blue")
      .setDescription(`types of the embeds`) 
      .addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)

      .setTimestamp()
      .setFooter({ text: "Hope you like me!" })
 
      const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setLabel("Invite Me")
        .setStyle(ButtonStyle.Link)
        .setEmoji("<:emoji_37:1002148377896685668>") //emoji
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=914082317344059402&permissions=8&scope=bot`) // link invite Bot
     )
    .addComponents(
      new ButtonBuilder()
        .setLabel("Support") //buttons 
        .setStyle(ButtonStyle.Link)
        .setEmoji("<:emoji_37:1002148377896685668>") //emoji
        .setURL("https://discord.gg/CtPQJsZnvV") // server link 
    )

  
    await message.channel.send({ embeds: [help], components: [row] });
            
    }
};

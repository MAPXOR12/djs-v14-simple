module.exports = {
    name: 'avatar',
    description: 'Shows (someone)\'s Avatar',
    /**
     * 
     * @param {import('./index.js')} client 
     * @param {import('discord.js').CommandInteraction} interaction
     */
    run: (client, interaction) => {
        interaction.reply(interaction.member.displayAvatarURL());
    },
};

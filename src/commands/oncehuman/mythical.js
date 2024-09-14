const {
    ActionRowBuilder,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    ButtonBuilder,
    ButtonStyle,
    SlashCommandBuilder,
    EmbedBuilder
} = require('discord.js');
const locationData = require('../../location'); // Import location.js

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mystical-crate")
        .setDescription("Location Mystical Crate"),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('View Maps')
            .setDescription('Here are the available maps:')
            .setImage('https://i.ibb.co.com/Y0J4xKH/Screenshot-2024-08-28-054052.png');

        const select = new StringSelectMenuBuilder()
            .setCustomId('allmaps')
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('Blackheart Region')
                    .setValue('BlackheartRegion'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Red Sands')
                    .setValue('RedSands'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Iron River')
                    .setValue('IronRiver'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Dayton Wetlands')
                    .setValue('DaytonWetlands'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Chalk Peak')
                    .setValue('ChalkPeak'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Broken Delta')
                    .setValue('BrokenDelta'),
            );

        const row = new ActionRowBuilder()
            .addComponents(select);

        await interaction.reply({ embeds: [embed], components: [row] });

        // Collect the menu interaction
        const filter = i => i.user.id === interaction.user.id;
        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000 });

        collector.on('collect', async i => {
            let newEmbed;
            let newComponents;

            if (i.isStringSelectMenu()) {
                switch (i.values[0]) {
                    case 'BlackheartRegion':
                        newEmbed = new EmbedBuilder()
                            .setTitle('Blackheart Region')
                            .setDescription('Detailed information about Blackheart Region')
                            .setImage('https://i.ibb.co.com/Y3V8QJP/1.png');

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new StringSelectMenuBuilder()
                                    .setCustomId('allmaps')
                                    .addOptions(
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('br1')
                                            .setEmoji('<:1_:1278198554057248809>')
                                            .setValue('br1'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('br2')
                                            .setEmoji('<:2_:1278198542673903698>')
                                            .setValue('br2'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('Go Back')
                                            .setEmoji('<:back:1278200671845220413>')
                                            .setValue('GoBack')
                                    )
                            );
                        break;

                    case 'RedSands':
                        newEmbed = new EmbedBuilder()
                            .setTitle('Red Sands')
                            .setDescription('Detailed information about Red Sands')
                            .setImage('https://i.ibb.co.com/BTwmQKd/2.png');

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new StringSelectMenuBuilder()
                                    .setCustomId('allmaps')
                                    .addOptions(
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('rs1')
                                            .setEmoji('<:1_:1278198554057248809>')
                                            .setValue('rs1'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('rs2')
                                            .setEmoji('<:2_:1278198542673903698>')
                                            .setValue('rs2'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('rs3')
                                            .setEmoji('<:3_:1278198531743547444>')
                                            .setValue('rs3'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('rs4')
                                            .setEmoji('<:4_:1278198522834976910>')
                                            .setValue('rs4'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('rs5')
                                            .setEmoji('<:5_:1278198503465685046>')
                                            .setValue('rs5'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('rs6')
                                            .setEmoji('<:6_:1278198493739094190>')
                                            .setValue('rs6'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('rs7')
                                            .setEmoji('<:7_:1278198480690610176>')
                                            .setValue('rs7'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('Back')
                                            .setEmoji('<:back:1278200671845220413>')
                                            .setValue('GoBack')
                                    )
                            );
                        break;

                    case 'IronRiver':
                        newEmbed = new EmbedBuilder()
                            .setTitle('Iron River')
                            .setDescription('Detailed information about Iron River')
                            .setImage('https://i.ibb.co.com/LxPZp3y/3.png');

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new StringSelectMenuBuilder()
                                    .setCustomId('allmaps')
                                    .addOptions(
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('ir1')
                                            .setEmoji('<:1_:1278198554057248809>')
                                            .setValue('ir1'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('ir2')
                                            .setEmoji('<:2_:1278198542673903698>')
                                            .setValue('ir2'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('ir3')
                                            .setEmoji('<:3_:1278198531743547444>')
                                            .setValue('ir3'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('ir4')
                                            .setEmoji('<:4_:1278198522834976910>')
                                            .setValue('ir4'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('ir5')
                                            .setEmoji('<:5_:1278198503465685046>')
                                            .setValue('ir5'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('ir6')
                                            .setEmoji('<:6_:1278198493739094190>')
                                            .setValue('ir6'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('ir7')
                                            .setEmoji('<:7_:1278198480690610176>')
                                            .setValue('ir7'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('ir8')
                                            .setEmoji('<:8_:1278198449082339355>')
                                            .setValue('ir8'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('Back')
                                            .setEmoji('<:back:1278200671845220413>')
                                            .setValue('GoBack')
                                    )
                            );
                        break;

                    case 'DaytonWetlands':
                        newEmbed = new EmbedBuilder()
                            .setTitle('Dayton Wetlands')
                            .setDescription('Detailed information about Dayton Wetlands')
                            .setImage('https://i.ibb.co.com/QHvPpXv/4.png');

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new StringSelectMenuBuilder()
                                    .setCustomId('allmaps')
                                    .addOptions(
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('dw1')
                                            .setEmoji('<:1_:1278198554057248809>')
                                            .setValue('dw1'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('dw2')
                                            .setEmoji('<:2_:1278198542673903698>')
                                            .setValue('dw2'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('dw3')
                                            .setEmoji('<:3_:1278198531743547444>')
                                            .setValue('dw3'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('dw4')
                                            .setEmoji('<:4_:1278198522834976910>')
                                            .setValue('dw4'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('dw5')
                                            .setEmoji('<:5_:1278198503465685046>')
                                            .setValue('dw5'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('dw6')
                                            .setEmoji('<:6_:1278198493739094190>')
                                            .setValue('dw6'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('dw7')
                                            .setEmoji('<:7_:1278198480690610176>')
                                            .setValue('dw7'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('dw8')
                                            .setEmoji('<:8_:1278198449082339355>')
                                            .setValue('dw8'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('dw9')
                                            .setEmoji('<:9_:1278198437774626837>')
                                            .setValue('dw9'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('Back')
                                            .setEmoji('<:back:1278200671845220413>')
                                            .setValue('GoBack')
                                    )
                            );
                        break;

                    case 'ChalkPeak':
                        newEmbed = new EmbedBuilder()
                            .setTitle('Chalk Peak')
                            .setDescription('Detailed information about Chalk Peak')
                            .setImage('https://i.ibb.co.com/zbJdxv1/6.png');

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new StringSelectMenuBuilder()
                                    .setCustomId('allmaps')
                                    .addOptions(
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('cp1')
                                            .setEmoji('<:1_:1278198554057248809>')
                                            .setValue('cp1'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('cp2')
                                            .setEmoji('<:2_:1278198542673903698>')
                                            .setValue('cp2'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('cp3')
                                            .setEmoji('<:3_:1278198531743547444>')
                                            .setValue('cp3'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('cp4')
                                            .setEmoji('<:4_:1278198522834976910>')
                                            .setValue('cp4'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('cp5')
                                            .setEmoji('<:5_:1278198503465685046>')
                                            .setValue('cp5'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('cp6')
                                            .setEmoji('<:6_:1278198493739094190>')
                                            .setValue('cp6'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('cp7')
                                            .setEmoji('<:7_:1278198480690610176>')
                                            .setValue('cp7'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('cp8')
                                            .setEmoji('<:8_:1278198449082339355>')
                                            .setValue('cp8'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('cp9')
                                            .setEmoji('<:9_:1278198437774626837>')
                                            .setValue('cp9'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('Back')
                                            .setEmoji('<:back:1278200671845220413>')
                                            .setValue('GoBack')
                                    )
                            );
                        break;

                    case 'BrokenDelta':
                        newEmbed = new EmbedBuilder()
                            .setTitle('Broken Delta')
                            .setDescription('Detailed information about Broken Delta')
                            .setImage('https://i.ibb.co.com/HYdRDWw/1-2.png');

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new StringSelectMenuBuilder()
                                    .setCustomId('allmaps')
                                    .addOptions(
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('bd1')
                                            .setEmoji('<:1_:1278198554057248809>')
                                            .setValue('bd1'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('bd2')
                                            .setEmoji('<:2_:1278198542673903698>')
                                            .setValue('bd2'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('bd3')
                                            .setEmoji('<:3_:1278198531743547444>')
                                            .setValue('bd3'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('bd4')
                                            .setEmoji('<:4_:1278198522834976910>')
                                            .setValue('bd4'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('bd5')
                                            .setEmoji('<:5_:1278198503465685046>')
                                            .setValue('bd5'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('bd6')
                                            .setEmoji('<:6_:1278198493739094190>')
                                            .setValue('bd6'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('bd7')
                                            .setEmoji('<:7_:1278198480690610176>')
                                            .setValue('bd7'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('bd8')
                                            .setEmoji('<:8_:1278198449082339355>')
                                            .setValue('bd8'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('bd9')
                                            .setEmoji('<:9_:1278198437774626837>')
                                            .setValue('bd9'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('bd10')
                                            .setEmoji('<:10:1278198420045168691>')
                                            .setValue('bd10'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('bd11')
                                            .setEmoji('<:11:1278231990239363113>')
                                            .setValue('bd11'),
                                        new StringSelectMenuOptionBuilder()
                                            .setLabel('Back')
                                            .setEmoji('<:back:1278200671845220413>')
                                            .setValue('GoBack')
                                    )
                            );
                        break;


                    //! ---------------------
                    //! BlackHeart Region
                    //! ---------------------

                    case 'br1':
                        const loc1 = locationData.locations['br1'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc1.title)
                            .setDescription(loc1.description)
                            .setImage(loc1.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;

                    case 'br2':
                        const loc2 = locationData.locations['br2'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc2.title)
                            .setDescription(loc2.description)
                            .setImage(loc2.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;


                    //! ---------------------
                    //! Red Sands
                    //! ---------------------

                    case 'rs1':
                        const loc3 = locationData.locations['rs1'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc3.title)
                            .setDescription(loc3.description)
                            .setImage(loc3.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'rs2':
                        const loc4 = locationData.locations['rs2'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc4.title)
                            .setDescription(loc4.description)
                            .setImage(loc4.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'rs3':
                        const loc5 = locationData.locations['rs3'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc5.title)
                            .setDescription(loc5.description)
                            .setImage(loc5.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'rs4':
                        const loc6 = locationData.locations['rs4'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc6.title)
                            .setDescription(loc6.description)
                            .setImage(loc6.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'rs5':
                        const loc7 = locationData.locations['rs5'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc7.title)
                            .setDescription(loc7.description)
                            .setImage(loc7.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'rs6':
                        const loc8 = locationData.locations['rs6'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc8.title)
                            .setDescription(loc8.description)
                            .setImage(loc8.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'rs7':
                        const loc9 = locationData.locations['rs7'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc9.title)
                            .setDescription(loc9.description)
                            .setImage(loc9.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    //! ---------------------
                    //! Iron River
                    //! ---------------------
                    case 'ir1':
                        const loc10 = locationData.locations['ir1'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc10.title)
                            .setDescription(loc10.description)
                            .setImage(loc10.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'ir2':
                        const loc11 = locationData.locations['ir2'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc11.title)
                            .setDescription(loc11.description)
                            .setImage(loc11.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'ir3':
                        const loc12 = locationData.locations['ir3'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc12.title)
                            .setDescription(loc12.description)
                            .setImage(loc12.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'ir4':
                        const loc13 = locationData.locations['ir4'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc13.title)
                            .setDescription(loc13.description)
                            .setImage(loc13.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'ir5':
                        const loc14 = locationData.locations['ir5'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc14.title)
                            .setDescription(loc14.description)
                            .setImage(loc14.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'ir6':
                        const loc15 = locationData.locations['ir6'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc15.title)
                            .setDescription(loc15.description)
                            .setImage(loc15.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'ir7':
                        const loc16 = locationData.locations['ir7'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc16.title)
                            .setDescription(loc16.description)
                            .setImage(loc16.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'ir8':
                        const loc17 = locationData.locations['ir8'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc17.title)
                            .setDescription(loc17.description)
                            .setImage(loc17.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    //! ---------------------
                    //! Broken Delta
                    //! ---------------------
                    case 'bd1':
                        const loc18 = locationData.locations['bd1'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc18.title)
                            .setDescription(loc18.description)
                            .setImage(loc18.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'bd2':
                        const loc19 = locationData.locations['bd2'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc19.title)
                            .setDescription(loc19.description)
                            .setImage(loc19.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'bd3':
                        const loc20 = locationData.locations['bd3'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc20.title)
                            .setDescription(loc20.description)
                            .setImage(loc20.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'bd4':
                        const loc21 = locationData.locations['bd4'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc21.title)
                            .setDescription(loc21.description)
                            .setImage(loc21.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'bd5':
                        const loc22 = locationData.locations['bd5'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc22.title)
                            .setDescription(loc22.description)
                            .setImage(loc22.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'bd6':
                        const loc23 = locationData.locations['bd6'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc23.title)
                            .setDescription(loc23.description)
                            .setImage(loc23.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'bd7':
                        const loc24 = locationData.locations['bd7'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc24.title)
                            .setDescription(loc24.description)
                            .setImage(loc24.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'bd8':
                        const loc25 = locationData.locations['bd8'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc25.title)
                            .setDescription(loc25.description)
                            .setImage(loc25.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'bd9':
                        const loc26 = locationData.locations['bd9'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc26.title)
                            .setDescription(loc26.description)
                            .setImage(loc26.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'bd10':
                        const loc27 = locationData.locations['bd10'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc27.title)
                            .setDescription(loc27.description)
                            .setImage(loc27.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'bd11':
                        const loc28 = locationData.locations['bd11'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc28.title)
                            .setDescription(loc28.description)
                            .setImage(loc28.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    //! ---------------------
                    //! Chalk Peak
                    //! ---------------------
                    case 'cp1':
                        const loc29 = locationData.locations['cp1'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc29.title)
                            .setDescription(loc29.description)
                            .setImage(loc29.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'cp2':
                        const loc30 = locationData.locations['cp2'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc30.title)
                            .setDescription(loc30.description)
                            .setImage(loc30.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'cp3':
                        const loc31 = locationData.locations['cp3'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc31.title)
                            .setDescription(loc31.description)
                            .setImage(loc31.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'cp4':
                        const loc32 = locationData.locations['cp4'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc32.title)
                            .setDescription(loc32.description)
                            .setImage(loc32.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'cp5':
                        const loc33 = locationData.locations['cp5'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc33.title)
                            .setDescription(loc33.description)
                            .setImage(loc33.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'cp6':
                        const loc34 = locationData.locations['cp6'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc34.title)
                            .setDescription(loc34.description)
                            .setImage(loc34.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'cp7':
                        const loc35 = locationData.locations['cp7'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc35.title)
                            .setDescription(loc35.description)
                            .setImage(loc35.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'cp8':
                        const loc36 = locationData.locations['cp8'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc36.title)
                            .setDescription(loc36.description)
                            .setImage(loc36.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'cp9':
                        const loc37 = locationData.locations['cp9'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc37.title)
                            .setDescription(loc37.description)
                            .setImage(loc37.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    //! ---------------------
                    //! Dayton Wetlands
                    //! ---------------------
                    case 'dw1':
                        const loc38 = locationData.locations['dw1'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc38.title)
                            .setDescription(loc38.description)
                            .setImage(loc38.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'dw2':
                        const loc39 = locationData.locations['dw2'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc39.title)
                            .setDescription(loc39.description)
                            .setImage(loc39.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'dw3':
                        const loc40 = locationData.locations['dw3'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc40.title)
                            .setDescription(loc40.description)
                            .setImage(loc40.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'dw4':
                        const loc41 = locationData.locations['dw4'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc41.title)
                            .setDescription(loc41.description)
                            .setImage(loc41.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'dw5':
                        const loc42 = locationData.locations['dw5'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc42.title)
                            .setDescription(loc42.description)
                            .setImage(loc42.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'dw6':
                        const loc43 = locationData.locations['dw6'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc43.title)
                            .setDescription(loc43.description)
                            .setImage(loc43.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'dw7':
                        const loc44 = locationData.locations['dw7'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc44.title)
                            .setDescription(loc44.description)
                            .setImage(loc44.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'dw8':
                        const loc45 = locationData.locations['dw8'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc45.title)
                            .setDescription(loc45.description)
                            .setImage(loc45.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;
                    case 'dw9':
                        const loc46 = locationData.locations['dw9'];
                        newEmbed = new EmbedBuilder()
                            .setTitle(loc46.title)
                            .setDescription(loc46.description)
                            .setImage(loc46.image);

                        newComponents = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setCustomId('goBack')
                                    .setLabel('Go Back')
                                    .setStyle(ButtonStyle.Primary)
                            );
                        break;

                    case 'GoBack':
                        newEmbed = embed;
                        newComponents = row;
                        break;

                    default:
                        break;
                }

                await i.update({ embeds: [newEmbed], components: [newComponents] });
            } else if (i.isButton()) {
                if (i.customId === 'goBack') {
                    newEmbed = embed;
                    newComponents = row;
                    await i.update({ embeds: [newEmbed], components: [newComponents] });
                }
            }
        });

        collector.on('end', collected => {
            if (collected.size === 0) {
                interaction.followUp('Time out. Please try selecting a region again.');
            }
        });
    },
};

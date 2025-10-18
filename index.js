const { Client, GatewayIntentBits, Partials } = require('discord.js');
require('dotenv').config();

const TOKEN = process.env.DISCORD_TOKEN;
const TARGET_ROLE_ID = process.env.TARGET_ROLE_ID;
const LOG_CHANNEL_ID = process.env.LOG_CHANNEL_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.GuildMember, Partials.User]
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('guildMemberUpdate', async (oldMember, newMember) => {
  try {
    const oldRoles = oldMember.roles.cache;
    const newRoles = newMember.roles.cache;

    if (!oldRoles.has(TARGET_ROLE_ID) && newRoles.has(TARGET_ROLE_ID)) {
      if (newMember.user.bot) return;

      const perms = newMember.permissions;
      if (perms.has('BanMembers') || perms.has('Administrator') || perms.has('ManageGuild')) {
        console.log(`Skipped banning ${newMember.user.tag} (admin or mod)`);
        return;
      }

      await newMember.ban({ reason: `Auto-ban: gained role ${TARGET_ROLE_ID}` });
      console.log(`🚫 Banned ${newMember.user.tag}`);

      if (LOG_CHANNEL_ID) {
        const log = newMember.guild.channels.cache.get(LOG_CHANNEL_ID);
        if (log) log.send(`🚫 Auto-banned **${newMember.user.tag}** for gaining role <@&${TARGET_ROLE_ID}>`);
      }
    }
  } catch (err) {
    console.error('Error in guildMemberUpdate:', err);
  }
});

client.login(TOKEN);

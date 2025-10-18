const { Client, GatewayIntentBits, Partials } = require('discord.js');
require('dotenv').config();

const TOKEN = process.env.DISCORD_TOKEN;
const TARGET_ROLE_ID = process.env.TARGET_ROLE_ID;
const LOG_CHANNEL_ID = process.env.LOG_CHANNEL_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('guildMemberUpdate', async (oldMember, newMember) => {
  try {
    const oldRoles = oldMember.roles.cache;
    const newRoles = newMember.roles.cache;

    // Check if target role was added
    if (!oldRoles.has(TARGET_ROLE_ID) && newRoles.has(TARGET_ROLE_ID)) {
      if (newMember.user.bot) return;

      // Skip admins/mods
      if (newMember.permissions.has('BanMembers') || newMember.permissions.has('Administrator') || newMember.permissions.has('ManageGuild')) {
        console.log(`Skipped banning ${newMember.user.tag} (admin or mod)`);
        return;
      }

      // Ban the user
      await newMember.ban({ reason: `Auto-ban: gained role ${TARGET_ROLE_ID}` });
      console.log(`🚫 Banned ${newMember.user.tag}`);

      // Remove all reactions by this user in recent messages of all text channels
      await removeUserReactions(newMember);

      // Optional: log in a channel
      if (LOG_CHANNEL_ID) {
        const logChannel = newMember.guild.channels.cache.get(LOG_CHANNEL_ID);
        if (logChannel) {
          logChannel.send(`🚫 Auto-banned **${newMember.user.tag}** for gaining role <@&${TARGET_ROLE_ID}> and removed their reactions.`);
        }
      }
    }
  } catch (error) {
    console.error('Error in guildMemberUpdate:', error);
  }
});

/**
 * Remove all reactions by a user from recent messages in all text channels
 * @param {GuildMember} member 
 */
async function removeUserReactions(member) {
  const guild = member.guild;
  const userId = member.id;

  try {
    // Fetch all text channels
    const textChannels = guild.channels.cache.filter(c => c.isTextBased() && c.permissionsFor(guild.members.me).has(['ReadMessageHistory', 'ManageMessages']));

    for (const [, channel] of textChannels) {
      // Fetch last 100 messages from each channel
      const messages = await channel.messages.fetch({ limit: 100 });
      for (const [, msg] of messages) {
        // For each reaction in the message
        for (const [, reaction] of msg.reactions.cache) {
          // If this user reacted to the message, remove their reaction
          try {
            // Fetch users who reacted with this emoji
            const users = await reaction.users.fetch();
            if (users.has(userId)) {
              await reaction.users.remove(userId);
              console.log(`Removed reaction ${reaction.emoji.name} by user ${member.user.tag} in channel ${channel.name}`);
            }
          } catch (err) {
            // Ignore errors like missing permissions or message deleted
          }
        }
      }
    }
  } catch (err) {
    console.error('Error removing reactions:', err);
  }
}

client.login(TOKEN);

<h1 align="center">🚫 Discord Auto Ban Bot 🤖</h1>

<p align="center">
   Automatically ban users who receive a specific role on your Discord server, and optionally remove all their previous reactions across the server. Built using <b>Node.js</b> and <b>Discord.js v14</b>.
</p>

<p align="right"> 
   <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
   <img src="https://img.shields.io/badge/-discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white"/>
   <a href="https://github.com/sponsors/Prem-ium" target="_blank">
      <img src="https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA" alt="Github Sponsor"/>
   </a>
</p>

---

This project provides a **Discord moderation automation bot** that bans any member who gains a particular role (such as a flagged, restricted, or suspicious role).
Optionally, it can also **remove all reactions** that user has made across recent messages — ensuring no trace remains.

---

## ⚙️ Features

✅ Automatically bans users who gain a specific role
✅ Skips administrators and moderators
✅ Removes all past reactions from the banned user
✅ Optional logging to a designated channel
✅ Lightweight and runs 24/7 via Render, Railway, or Replit

---

## 🔧 Installation

1. **Clone this repository and install dependencies**:

   ```bash
   git clone https://github.com/Prem-ium/ban-discord-by-role.git
   cd ban-discord-by-role
   npm install
   ```

2. **Create a `.env` file** in the project root with:

   ```env
   DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN
   TARGET_ROLE_ID=ROLE_ID_THAT_TRIGGERS_BAN
   LOG_CHANNEL_ID=OPTIONAL_LOG_CHANNEL_ID
   ```

3. **Start your bot locally**:

   ```bash
   npm start
   ```

---

## ☁️ Render Config

* Connect this GitHub repo
* Set **Build Command** = `npm install`
* Set **Start Command** = `npm start`
* Add the `.env` values under “Environment Variables”

---

## ⚙️ Environment Variables

| Variable         | Description                               | Required | Example              |
| ---------------- | ----------------------------------------- | -------- | -------------------- |
| `DISCORD_TOKEN`  | Your Discord bot token                    | ✅        | `MTEyMzQ1...`        |
| `TARGET_ROLE_ID` | Role that triggers an auto-ban when added | ✅        | `123456789012345678` |
| `LOG_CHANNEL_ID` | Channel ID for logging ban actions        | ❌        | `987654321098765432` |

---

## ⚠️ Required Bot Permissions

Your bot **must** have the following permissions in your Discord server:

* 🛡️ `Ban Members`
* 🗨️ `Read Message History`
* 🧹 `Manage Messages` (to remove reactions)
* ⚙️ `View Channels`

Also, ensure these intents are enabled in your **Discord Developer Portal → Bot tab**:

* ✅ Server Members Intent
* ✅ Message Content Intent *(optional, only if you kept it in code)*

---

## 💻 Example Log Output

```bash
✅ Logged in as AutoBanBot#1337
🚫 Banned user123 for gaining role 123456789012345678
Removed reaction 😎 by user user123 in channel general
Removed reaction 👍 by user user123 in channel memes
```

---

## 🙋‍♂️ FAQ

### Why would I want to auto-ban users based on a role?

This bot is useful for servers where specific roles are automatically assigned to flagged or suspicious users (e.g., verified scammers or restricted accounts). It ensures these users are immediately removed before causing harm.

### Can this bot remove all user reactions across all time?

Discord’s API doesn’t provide a global list of user reactions. This bot scans the **last 100 messages per text channel** and removes that user’s reactions from them — a practical and rate-limit-safe approach.

### What if I just want to log instead of banning?

You can easily modify the code to skip the ban and only log the event (comment out the `newMember.ban()` line).

---

## ❤️ Support My Work

If this bot saved you moderation time or kept your server clean, consider supporting my work:

1. **GitHub Sponsors**
   [![GitHub Sponsor](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge\&logo=GitHub-Sponsors\&logoColor=#EA4AAA)](https://github.com/sponsors/Prem-ium)

2. **Buy Me A Coffee**
   [![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge\&logo=buy-me-a-coffee\&logoColor=black)](https://www.buymeacoffee.com/prem.ium)

3. **Referral Links**
   Check out my curated [Referral Links](https://github.com/Prem-ium/Referral-Link-Me/blob/main/README.md) for rewards and mutual support.

---

## ⚠️ Disclaimer

Use responsibly — banning users automatically can be sensitive and should be done transparently within your moderation policy.
Always verify role triggers and ensure administrators are excluded to prevent accidental bans.

---

## 📜 License

This project is licensed under the [MIT License](https://github.com/Prem-ium/ban-discord-by-role/blob/main/LICENSE).

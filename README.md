<h1 align="center">🚫 Discord Auto Ban Bot</h1>

<p align="center">
   A fast, lightweight Discord bot that <strong>automatically bans users</strong> when they are given a specific role. Ideal for keeping flagged, restricted, or suspicious users out of your server.
</p>

<p align="center">
   <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
   <img src="https://img.shields.io/badge/discord.js-v14-5865F2?style=for-the-badge&logo=discord&logoColor=white"/>
   <a href="https://github.com/sponsors/Prem-ium" target="_blank">
      <img src="https://img.shields.io/badge/sponsor_me-GitHub-ff69b4?style=for-the-badge&logo=githubsponsors"/>
   </a>
</p>

---

## 🔓 Free Edition

This is the **free and open-source version** of the bot. It includes basic automatic banning functionality with optional reaction cleanup.

> 💎 Want audit-log scanning, multithreaded execution, and CI/CD automation?  
> **[Sponsor me on GitHub (Gold Tier)](https://github.com/sponsors/Prem-ium/sponsorships?sponsor=Prem-ium&tier_id=308205)** to receive access to the **Sponsor Edition** with powerful advanced features!

---

## ✨ Features

- ✅ Auto-ban users when a specific role is added
- 🧹 Optionally remove all their reactions from recent messages
- 🛡️ Skips bots, admins, and moderators
- 🪵 Optional logging to a moderation channel
- ☁️ Deployable to Render, Railway, or Replit

---

## 📦 Installation

### 1. Clone and Install

```bash
git clone https://github.com/Prem-ium/ban-discord-by-role.git
cd ban-discord-by-role
npm install
````

### 2. Configure `.env`

Create a `.env` file in the root directory:

```env
DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN
TARGET_ROLE_ID=ROLE_ID_THAT_TRIGGERS_BAN
LOG_CHANNEL_ID=OPTIONAL_CHANNEL_ID_FOR_LOGS
```

### 3. Run the bot

```bash
npm start
```

---

## ☁️ Hosting on Render

1. Fork this repo and connect it to [Render](https://render.com/)
2. Set your environment variables in the "Environment" section
3. Use the following build and start commands:

```txt
Build Command: npm install
Start Command: npm start
```

---

## 🔐 Required Bot Permissions

Ensure your bot has these permissions in your server:

* `Ban Members`
* `Read Message History`
* `Manage Messages`
* `View Channels`

And that these **Gateway Intents** are enabled in the Discord Developer Portal:

* ✅ Server Members Intent
* ✅ Message Content Intent *(optional for reaction removal)*

---

## 📋 Example Output

```bash
✅ Logged in as AutoModBot#1234
🚫 Banned TroubleUser#0001 (1234567890): gained restricted role
🧹 Removed reaction 😎 by user TroubleUser#0001 in #general
```

---

## 💎 Want More Power?

The **free version** only includes real-time detection of role assignment.

Become a **sponsor** to access the private **Sponsor Edition**, which includes:

* 🕵️‍♂️ Audit Log Scanning: Ban users who ever had the role (even if removed)
* 🚀 CI/CD Mode: Run moderation automation during deployment pipelines
* 🧵 Concurrent Cleanup: Multithreaded-style reaction removal and banning
* 🛑 Rate-limit friendly batching
* 🧾 Aligned logs with timestamps for better visibility

👉 [Sponsor Me on GitHub to Unlock It](https://github.com/sponsors/Prem-ium)

---

## ❤️ Support My Work

If you found this bot useful, consider supporting me:

* 🙌 **[Sponsor on GitHub](https://github.com/sponsors/Prem-ium)** for access to premium tools
* ☕ **[Buy Me a Coffee](https://buymeacoffee.com/prem.ium)**
* 🧾 [Check out my favorite tools & referrals](https://github.com/Prem-ium/Referral-Link-Me)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

> ⚠️ Always test moderation bots in a safe environment before deploying live. Misconfigured bots can cause unintended bans.

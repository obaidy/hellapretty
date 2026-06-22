# HellaPretty Reservations

Reservations are sent to Telegram via a Netlify serverless function. Supabase and email are no longer used.

## Telegram setup

1. Open Telegram and message [@BotFather](https://t.me/BotFather).
2. Create a bot with `/newbot` and copy the **bot token**.
3. Start a chat with your new bot (send any message).
4. Open `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates` and find your **chat id** in the response.
5. In Netlify, go to **Site configuration → Environment variables** and add:
   - `TELEGRAM_BOT_TOKEN` – your bot token
   - `TELEGRAM_CHAT_ID` – your chat id (number, or group id like `-100...`)

Redeploy the site after adding the variables.

## Local development

Copy `.env.example` to `.env` and set the Telegram variables. Run the site with the Netlify CLI so functions work locally:

```bash
npm install
npm run build
npx netlify dev
```

The reservation form posts to `/.netlify/functions/send-reservation`.

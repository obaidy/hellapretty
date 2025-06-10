# HellaPretty Reservations

This project now uses [Supabase](https://supabase.com) for storing reservations and sending emails via a Supabase Edge Function.

## Environment variables

Create a `.env` file (or set these variables in your hosting provider) with the following keys:

- `REACT_APP_SUPABASE_URL` – URL of your Supabase project
- `REACT_APP_SUPABASE_ANON_KEY` – Supabase anonymous key
- `SENDGRID_API_KEY` – API key used by the `send-reservation-email` function
- `MAIL_FROM` – Email address used as the sender
- `MAIL_TO` – Destination email address for reservation notifications

These variables are required to insert reservations into the `reservations` table and to send a notification email after a reservation is created.
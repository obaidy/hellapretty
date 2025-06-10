// Supabase Edge Function to send an email when a reservation is created
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createTransport } from 'npm:nodemailer'

serve(async (req) => {
  const { name, contact, date } = await req.json()

  const transport = createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: { user: 'apikey', pass: Deno.env.get('SENDGRID_API_KEY') },
  })

  await transport.sendMail({
    to: Deno.env.get('MAIL_TO'),
    from: Deno.env.get('MAIL_FROM'),
    subject: 'New Reservation',
    text: `Name: ${name}\nContact: ${contact}\nDate: ${date}`,
  })

  return new Response('ok', { status: 200 })
})
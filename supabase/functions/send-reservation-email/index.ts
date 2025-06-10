import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createTransport } from 'npm:nodemailer';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // replace with 'http://localhost:3000' if you want to restrict
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: corsHeaders,
    });
  }

  try {
    const { name, phone, email, service, date, timeOfDay } = await req.json();

    const transport = createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: Deno.env.get('SENDGRID_API_KEY'),
      },
    });

    const text = `Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Service: ${service}
      Date: ${date}
      Preferred time: ${timeOfDay}`;

    await transport.sendMail({
      to: Deno.env.get('MAIL_TO'),
      from: Deno.env.get('MAIL_FROM'),
      subject: 'New Reservation',
      text,
    });

    return new Response('ok', {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});


// Supabase Edge Function to send an email when a reservation is created
// import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
// import { createTransport } from 'npm:nodemailer'

// serve(async (req) => {
//   const { name, phone, email, service, date } = await req.json()
//   const transport = createTransport({
//     host: 'smtp.sendgrid.net',
//     port: 587,
//     auth: { user: 'apikey', pass: Deno.env.get('SENDGRID_API_KEY') },
//   })
//   const text = `Name: ${name}
//     Phone: ${phone}
//     Email: ${email}
//     Service: ${service}
//     Date: ${date}`

//   await transport.sendMail({
//     to: Deno.env.get('MAIL_TO'),
//     from: Deno.env.get('MAIL_FROM'),
//     subject: 'New Reservation',
//     text,
//   })

//   return new Response('ok', { status: 200 })
// })
  
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

function formatReservationMessage({ name, phone, email, service, date, timeOfDay }) {
  return [
    "🔔 <b>Nová rezervace – Hella Pretty</b>",
    "",
    `<b>Jméno:</b> ${name}`,
    `<b>Telefon:</b> ${phone}`,
    `<b>Email:</b> ${email}`,
    `<b>Služba:</b> ${service}`,
    `<b>Datum:</b> ${date}`,
    `<b>Preferovaný čas:</b> ${timeOfDay}`,
  ].join("\n");
}

function escapeHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return jsonResponse(500, { error: "Telegram is not configured" });
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { name, phone, email, service, date, timeOfDay } = body;

    if (!name || !phone || !email || !service || !date || !timeOfDay) {
      return jsonResponse(400, { error: "Missing required fields" });
    }

    const safePayload = {
      name: escapeHtml(name),
      phone: escapeHtml(phone),
      email: escapeHtml(email),
      service: escapeHtml(service),
      date: escapeHtml(date),
      timeOfDay: escapeHtml(timeOfDay),
    };

    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatReservationMessage(safePayload),
        parse_mode: "HTML",
      }),
    });

    const telegramResult = await telegramResponse.json();

    if (!telegramResponse.ok || !telegramResult.ok) {
      console.error("Telegram API error:", telegramResult);
      return jsonResponse(502, { error: "Failed to send Telegram notification" });
    }

    return jsonResponse(200, { ok: true });
  } catch (error) {
    console.error("Reservation notification error:", error);
    return jsonResponse(500, { error: "Internal server error" });
  }
};

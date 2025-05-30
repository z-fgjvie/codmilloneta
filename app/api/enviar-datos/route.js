export async function POST(req) {
  try {
    const { nombre, correo, numero, horario, asunto } = await req.json();

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_BOT_CHAT_ID = process.env.TELEGRAM_BOT_CHAT_ID;

    const mensaje = `-----ALUMNOS CODIFICA-----\nNOMBRE: ${nombre}\nCORREO: ${correo}\nCELULAR: ${numero}\nHORARIO: ${horario}${
      asunto ? `\nMENSAJE: ${asunto}` : ""
    }`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_BOT_CHAT_ID,
        text: mensaje,
        parse_mode: "Markdown",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.description || "Error al enviar el mensaje");
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}

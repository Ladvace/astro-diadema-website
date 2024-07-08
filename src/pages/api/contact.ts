import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  const payload = {
    to: [
      {
        name: process.env.BREVO_SENDER_NAME,
        email: process.env.BREVO_SENDER_MAIL || "",
      },
    ],
    templateId: process.env.BREVO_TEMPLATE_ID || "",
    data,
  };

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "api-key": process.env.BREVO_API_KEY || "",
  };
  try {
    const result = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const res = await result.json();
    res.success = !!res.messageId;
    delete res.messageId;

    return new Response(JSON.stringify(res), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

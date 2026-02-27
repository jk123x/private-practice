interface SubscribeParams {
  email: string;
  source: string;
  utm?: Record<string, string>;
}

export async function subscribeToKit({ email, source, utm }: SubscribeParams) {
  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    throw new Error("Kit.com API key or form ID not configured");
  }

  const fields: Record<string, string> = { source };

  if (utm) {
    for (const [key, value] of Object.entries(utm)) {
      if (value) fields[key] = value;
    }
  }

  // Kit v4 API with Bearer auth
  const response = await fetch(
    `https://api.kit.com/v4/forms/${formId}/subscribers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": apiKey,
      },
      body: JSON.stringify({
        email_address: email,
        custom_fields: fields,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Kit API error:", response.status, data);
    throw new Error(`Kit API error: ${response.status}`);
  }

  return data;
}

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

  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: apiKey, email, fields }),
    }
  );

  const data = await response.json();

  if (!data.subscription) {
    throw new Error("Subscription failed");
  }

  return data;
}

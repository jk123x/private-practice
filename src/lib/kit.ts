interface SubscribeParams {
  email: string;
  source: string;
  utm?: Record<string, string>;
}

const KIT_BASE = "https://api.kit.com/v4";

function kitHeaders(apiKey: string) {
  return {
    "Content-Type": "application/json",
    "X-Kit-Api-Key": apiKey,
  };
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

  // Step 1: Create subscriber (or update if they already exist)
  const createRes = await fetch(`${KIT_BASE}/subscribers`, {
    method: "POST",
    headers: kitHeaders(apiKey),
    body: JSON.stringify({
      email_address: email,
      fields,
    }),
  });

  const createData = await createRes.json();

  if (!createRes.ok) {
    console.error("Kit create subscriber error:", createRes.status, createData);
    throw new Error(`Kit API error: ${createRes.status}`);
  }

  // Step 2: Add subscriber to form
  const formRes = await fetch(
    `${KIT_BASE}/forms/${formId}/subscribers`,
    {
      method: "POST",
      headers: kitHeaders(apiKey),
      body: JSON.stringify({
        email_address: email,
      }),
    }
  );

  const formData = await formRes.json();

  if (!formRes.ok) {
    console.error("Kit add to form error:", formRes.status, formData);
    throw new Error(`Kit API error: ${formRes.status}`);
  }

  return formData;
}

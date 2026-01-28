// Minimal email helper: attempts to send using EmailJS REST API if the
// environment variables are set (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_USER_ID).
// If not configured, it falls back to opening a mailto: link so the user's mail client is used.

async function sendEmail({ name, email, message }) {
  // Read Vite env variables from window.__env__ or import.meta.env at runtime
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  // If EmailJS is configured, call its REST API
  if (serviceId && templateId && userId) {
    const url = 'https://api.emailjs.com/api/v1.0/email/send';
    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        from_name: name || 'Anonymous',
        from_email: email,
        message: message,
      },
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    console.log("response:",res);

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Email service error: ${res.status} ${txt}`);
    }

    return true;
  }

  // Fallback: open mail client
  const subject = encodeURIComponent('Contact from website');
  const body = encodeURIComponent(`Name: ${name || ''}\nEmail: ${email}\n\n${message}`);
  const fallback = import.meta.env.VITE_FALLBACK_RECIPIENT || 'nithin30302@gmail.com';
  const mailto = `mailto:${fallback}?subject=${subject}&body=${body}`;
  // open in new tab/window
  if (typeof window !== 'undefined') {
    window.location.href = mailto;
    return true;
  }

  throw new Error('No email method available');
}

export default sendEmail;

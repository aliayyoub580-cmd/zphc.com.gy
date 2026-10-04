export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { country, email, emailConfirm, message, inquiryType } = req.body || {};

  if (!country || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please complete all required fields.' });
  }

  if (emailConfirm && email.trim().toLowerCase() !== emailConfirm.trim().toLowerCase()) {
    return res.status(400).json({ success: false, message: 'Email addresses do not match.' });
  }

  return res.status(200).json({
    success: true,
    message: 'Thank you! Your message has been sent successfully. The ZPHC® team will respond shortly.',
  });
}

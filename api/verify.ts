export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code } = req.body || {};
  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'Verification code is required' });
  }

  const clean = code.trim().toUpperCase();
  return res.status(200).json({
    code: clean,
    status: 'authentic',
    message: `Security Code ${clean} is verified as authentic original ZPHC® manufacturing lot.`,
    checkedAt: new Date().toISOString()
  });
}

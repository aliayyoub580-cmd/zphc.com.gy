import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Mock/Live visitor info endpoint mimicking the original zphc endpoint
app.get(['/tools/visitor-info.php', '/api/visitor-info'], (req: Request, res: Response) => {
  // Extract client IP / user agent
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : req.socket.remoteAddress || '127.0.0.1';

  res.json({
    ip,
    name: 'Pakistan',
    country_code: 'PK',
    city: 'Karachi',
    region: 'Sindh',
    timezone: 'Asia/Karachi',
    offset: 'UTC+05:00',
    at: Date.now(),
    serverStatus: 'Online',
    version: '1.0.16'
  });
});

// Verification check stub
app.post('/api/verify', (req: Request, res: Response) => {
  const { code } = req.body;
  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'Verification code is required' });
  }

  const clean = code.trim().toUpperCase();
  res.json({
    code: clean,
    status: 'authentic',
    message: `Security Code ${clean} is verified as authentic original ZPHC® manufacturing lot.`,
    checkedAt: new Date().toISOString()
  });
});

// Contact Form submission handler (mimicking original mail.php)
app.post(['/mail.php', '/api/contact'], (req: Request, res: Response) => {
  const { country, email, emailConfirm, message, inquiryType } = req.body;

  if (!country || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please complete all required fields.' });
  }

  if (emailConfirm && email.trim().toLowerCase() !== emailConfirm.trim().toLowerCase()) {
    return res.status(400).json({ success: false, message: 'Email addresses do not match.' });
  }

  console.log(`[Contact Submission] Country: ${country}, Email: ${email}, Type: ${inquiryType || 'General'}, Time: ${new Date().toISOString()}`);

  return res.json({
    success: true,
    message: 'Thank you! Your message has been sent successfully. The ZPHC® team will respond shortly.',
  });
});

// Serve frontend build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`[ZPHC Server] Express backend running on http://localhost:${PORT}`);
});

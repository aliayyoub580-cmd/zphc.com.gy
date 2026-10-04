export default function handler(req: any, res: any) {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : req.socket?.remoteAddress || '127.0.0.1';

  return res.status(200).json({
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
}

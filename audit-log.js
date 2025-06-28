export default function handler(req, res) {
  const auth = req.headers.authorization;
  const expected = `Bearer ${process.env.AUDIT_API_KEY}`;
  if (auth === expected) {
    res.status(200).json([
      { id: 1, event: 'Trust Created' },
      { id: 2, event: 'Log Entry' }
    ]);
  } else {
    res.status(403).send('Unauthorized');
  }
}
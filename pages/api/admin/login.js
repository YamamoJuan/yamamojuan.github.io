// pages/api/admin/login.js

import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Unauthorized' });
}

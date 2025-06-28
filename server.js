const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.use(express.json());
app.use(express.static('.'));

app.get('/api/audit-log', (req, res) => {
  if (req.headers.authorization === `Bearer ${process.env.AUDIT_API_KEY}`) {
    res.json([{ id: 1, event: 'Trust Created' }, { id: 2, event: 'Log Entry' }]);
  } else {
    res.status(403).send('Unauthorized');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
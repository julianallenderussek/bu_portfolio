const { sendContactEmail } = require('../../services/emailjs');
const db = require('../db');

// exports.getData = async (req, res) => {
//   try {
//     const query = 'SELECT * FROM contacts';
//     db.query(query, (err, result) => {
//       if (err) {
//         console.error('Error retrieving data:', err);
//         return res.status(500).json({ error: 'Failed to retrieve data' });
//       }
//       res.json(result);
//     });
//   } catch (err) {
//     console.error('Error retrieving data:', err);
//     return res.status(500).json({ error: 'Failed to retrieve data' });
//   }
// };

exports.createContact = async (req, res) => {
  const { email, message } = req.body;
  try {
    const query = 'INSERT INTO contacts (email, message) VALUES (?, ?)';
    db.query(query, [email, message], async (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Failed to insert data' });
      }
      await sendContactEmail(email);
      res.json(result.insertId); // Assuming you want to return the ID of the inserted row
    });
  } catch (err) {
    console.error('Error inserting data:', err);
    return res.status(500).json({ error: 'Failed to insert data' });
  }
};

const { sendContactEmail, sendNewsletterEmail } = require('../../services/emailjs');
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

exports.signUpNewsletter = async (req, res) => {
  const { email } = req.body;
  try {
    const query = 'INSERT INTO signups (email) VALUES (?)';
    db.query(query, [email], async (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Failed to insert data' });
      }
      await sendNewsletterEmail(email);
      res.json(result.insertId); // Assuming you want to return the ID of the inserted row
    });
  } catch (err) {
    console.error('Error inserting data:', err);
    return res.status(500).json({ error: 'Failed to insert data' });
  }
};

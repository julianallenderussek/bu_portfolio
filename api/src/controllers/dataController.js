const db = require('../db');

// Example controller functions
exports.getData = async (req, res) => {
  try {
    const query = 'SELECT * FROM contacts';
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error retrieving data:', err);
        return res.status(500).json({ error: 'Failed to retrieve data' });
      }
      res.json(result);
    });
  } catch (err) {
    console.error('Error retrieving data:', err);
    return res.status(500).json({ error: 'Failed to retrieve data' });
  }
};

exports.createData = async (req, res) => {
  const { email, message } = req.body;
  try {
    const query = 'INSERT INTO contacts (email, message) VALUES (?, ?)';
    db.query(query, [email, message], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Failed to insert data' });
      }
      res.json(result.insertId); // Assuming you want to return the ID of the inserted row
    });
  } catch (err) {
    console.error('Error inserting data:', err);
    return res.status(500).json({ error: 'Failed to insert data' });
  }
};

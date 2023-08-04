import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const Table = () => {
  const [inputValue, setInputValue] = useState('');
  const [table, setTable] = useState([]);
  const [showError, setShowError] = useState(false);

  const generateTable = (num) => {
    const tableData = [];
    for (let i = 1; i <= 10; i++) {
      tableData.push(`${num} x ${i} = ${num * i}`);
    }
    return tableData;
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleGenerateTable = () => {
    const number = parseInt(inputValue);
    if (isNaN(number)) {
      setTable([]);
      setShowError(true);
    } else {
      setTable(generateTable(number));
      setShowError(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', mt: 10, padding: 2, border: '1px solid #ddd', borderRadius: 5 }}>
      <Typography sx={{ textAlign: 'center', mb: 3 }} variant="h6">Multiplication Table</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <TextField
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a number"
          variant="outlined"
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        {showError && (
          <Typography variant="body2" color="error">
            Please enter a valid number.
          </Typography>
        )}
        {table.length > 0 && (
          <ul>
            {table.map((item, index) => (
              <li key={index}>
                <Typography variant="body2">{item}</Typography>
              </li>
            ))}
          </ul>
        )}
      </Box>
      <Box sx={{ marginTop: 5 }}>
        <Button variant="contained" onClick={handleGenerateTable}>
          Generate Table
        </Button>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained" sx={{ ml: 2 }} color="secondary">
            Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Table;
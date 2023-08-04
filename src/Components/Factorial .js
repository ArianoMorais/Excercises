import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const calculateFactorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
};

const Factorial = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleCalculate = () => {
    const number = Number(inputValue);
    if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
      setResult(null);
      setError('Please enter a valid positive integer.');
    } else {
      setError(null);
      setResult(`The factorial of ${number} is: ${calculateFactorial(number)}.`);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 10 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Factorial Calculator
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <TextField
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a positive integer"
          variant="outlined"
        />
      </Box>
      {result && (
        <Typography variant="body1" color="primary" sx={{ marginTop: 5, fontWeight: 'bold' }}>
          {result}
        </Typography>
      )}
      {error && (
        <Typography variant="body1" color="error" sx={{ marginTop: 5, fontWeight: 'bold' }}>
          {error}
        </Typography>
      )}
      <Box sx={{ marginTop: 5 }}>
        <Button variant="contained" onClick={handleCalculate}>
          Calculate
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

export default Factorial;
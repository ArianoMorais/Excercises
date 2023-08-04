import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
};

const PrimeNumbers = () => {
  const [inputValue, setInputValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [primeNumbers, setPrimeNumbers] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const isValid = /^\d+$/.test(value) && Number(value) >= 0;
    setIsInputValid(isValid);
  };

  const handleCheckPrime = () => {
    const number = Number(inputValue);
    if (isPrime(number)) {
      setError(null);
      setResult(`${number} it's a prime number!`);
      generatePrimeNumbers(number);
    } else {
      setResult(null);
      generatePrimeNumbers(null);
      setError(`${number} it is not a prime number.`);
    }
  };

  const generatePrimeNumbers = (startNumber) => {
    if (startNumber === null) {
      
      setPrimeNumbers([]);
    } else {
      
      const primes = [];
      let currentNumber = startNumber + 1;

      while (primes.length < 10) {
        if (isPrime(currentNumber)) {
          primes.push(currentNumber);
        }
        currentNumber++;
      }

      setPrimeNumbers(primes);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto' , mt:10, padding: 2, border: '1px solid #ddd', borderRadius: 5 }}>
      <Typography sx={{ textAlign: 'center' , mb:3 }} variant="h6">Primary Number Checker</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
      <TextField
        label="Number"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        sx={{ textAlign: 'center' }}
      />
    </Box>
      {!isInputValid && (
        <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
          Please enter a valid positive integer.
        </Typography>
      )}
      {result && (
        <Typography variant="body2" color="primary" sx={{ marginTop: 1, fontWeight: 'bold' }}>
          {result}
        </Typography>
      )}
       {error && (
        <Typography variant="body2" color="error" sx={{ marginTop: 1, fontWeight: 'bold' }}>
          {error}
        </Typography>
      )}

      <Typography variant="h6" sx={{ marginTop: 2 }}>
      Next 10 Prime Numbers:
      </Typography>
      <ul>
        {primeNumbers.map((prime, index) => (
          <li key={index}>
            <Typography variant="body2">{prime}</Typography>
          </li>
        ))}
      </ul>
      <Button variant="contained" onClick={handleCheckPrime} sx={{ marginLeft: 1 }}>
          Verificar
        </Button>
        <Link to="/" style={{  }}>
        <Button variant="contained" sx={{ ml: 2 }} color="secondary">
          Back to Home
        </Button>
        </Link>
    </Box>
    
  );
};

export default PrimeNumbers;
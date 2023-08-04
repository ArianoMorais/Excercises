import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const Palindrome = () => {
  const [inputValue, setInputValue] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const isWordPalindrome = (word) => {
    const sanitizedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = sanitizedWord.split('').reverse().join('');

    return sanitizedWord === reversedWord;
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleCheckPalindrome = () => {
    if (inputValue.trim() === '') {
      setIsPalindrome(null);
    } else {
      setIsPalindrome(isWordPalindrome(inputValue));
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 10 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Palindrome Checker
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <TextField
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a word"
        />
      </Box>
      {isPalindrome === true && (
        <Typography variant="body2" color="primary" sx={{ marginTop: 1, fontWeight: 'bold' }}>
          It's a palindrome!
        </Typography>
      )}
      {isPalindrome === false && (
        <Typography variant="body2" color="error" sx={{ marginTop: 1, fontWeight: 'bold' }}>
          It's not a palindrome.
        </Typography>
      )}
      <Box sx={{ marginTop: 5 }}>
        <Button variant="contained" onClick={handleCheckPalindrome}>
          Check
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

export default Palindrome;
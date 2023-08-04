import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const VowelCounter = () => {
  const [inputValue, setInputValue] = useState('');
  const [vowelCount, setVowelCount] = useState(0);

  const countVowels = (text) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of text) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleCountVowels = () => {
    const count = countVowels(inputValue);
    setVowelCount(count);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', mt: 10, padding: 2, border: '1px solid #ddd', borderRadius: 5 }}>
      <Typography sx={{ textAlign: 'center', mb: 3 }} variant="h6">Vowel Counter</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <TextField
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a sentence"
          variant="outlined"
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2">
          The sentence contains {vowelCount} vowels.
        </Typography>
      </Box>
      <Box sx={{ marginTop: 5 }}>
        <Button variant="contained" onClick={handleCountVowels}>
          Count Vowels
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

export default VowelCounter;
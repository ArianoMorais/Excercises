import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const InterestCalculation = () => {
  const [initialCapital, setInitialCapital] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [investmentTime, setInvestmentTime] = useState('');
  const [finalValue, setFinalValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInitialCapitalChange = (event) => {
    const value = event.target.value;
    setInitialCapital(value);
  };

  const handleInterestRateChange = (event) => {
    const value = event.target.value;
    setInterestRate(value);
  };

  const handleInvestmentTimeChange = (event) => {
    const value = event.target.value;
    setInvestmentTime(value);
  };

  const calculateFinalValue = () => {
    const capital = parseFloat(initialCapital);
    const rate = parseFloat(interestRate) / 100;
    const time = parseInt(investmentTime);

    if (isNaN(capital) || isNaN(rate) || isNaN(time)) {
      setFinalValue(null);
      setErrorMessage('Please fill in all fields correctly.');
    } else if (capital < 0 || rate < 0 || time < 0) {
      setFinalValue(null);
      setErrorMessage('Please enter non-negative values.');
    } else {
      const finalValue = capital * (1 + rate * time);
      setFinalValue(finalValue.toFixed(2));
      setErrorMessage('');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', mt: 10, padding: 2, border: '1px solid #ddd', borderRadius: 5 }}>
      <Typography sx={{ textAlign: 'center', mb: 3 }} variant="h6">Investment Calculator</Typography>
      <div>
        <TextField
          label="Initial Capital"
          type="number"
          value={initialCapital}
          onChange={handleInitialCapitalChange}
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
      </div>
      <div>
        <TextField
          label="Interest Rate (% per month)"
          type="number"
          value={interestRate}
          onChange={handleInterestRateChange}
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
      </div>
      <div>
        <TextField
          label="Investment Time (months)"
          type="number"
          value={investmentTime}
          onChange={handleInvestmentTimeChange}
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
      </div>
      {finalValue !== null && (
        <Typography variant="body2" sx={{ marginTop: 1, fontWeight: 'bold' }}>
          The final investment value is: $ {finalValue}
        </Typography>
      )}
      {errorMessage && (
        <Typography color="error" sx={{ marginTop: 1, fontWeight: 'bold' }}>
          {errorMessage}
        </Typography>
      )}
      <Box sx={{mt:4}}>
        <Button variant="contained" onClick={calculateFinalValue}>
          Calculate
        </Button>
        <Link to="/" style={{}}>
          <Button variant="contained" sx={{ ml: 2 }} color="secondary">
            Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default InterestCalculation;
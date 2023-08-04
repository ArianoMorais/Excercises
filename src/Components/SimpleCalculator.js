import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const SimpleCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operator) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case '*':
        setResult(number1 * number2);
        break;
      case '/':
        setResult(number1 / number2);
        break;
      default:
        setResult('Invalid Operator');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 10 }}>
        Simple Calculator
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <TextField
            type="number"
            label="Number 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel htmlFor="operator-select">Operator</InputLabel>
            <Select
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              label="Operator"
              id="operator-select"
              fullWidth
            >
              <MenuItem value="+">+</MenuItem>
              <MenuItem value="-">-</MenuItem>
              <MenuItem value="*">*</MenuItem>
              <MenuItem value="/">/</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="number"
            label="Number 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Result: {result}
      </Typography>
      <Button variant="contained" color="primary" onClick={calculate} sx={{ mt: 3, mb: 2 }}>
        Calculate
      </Button>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{ mt: 3, mb: 2, ml: 2 }} color="secondary">
          Back to Home
        </Button>
      </Link>
    </Container>
  );
};

export default SimpleCalculator;
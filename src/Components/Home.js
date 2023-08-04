import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const cardData = [
  { path: "/SimpleCalculator", title: 'Exercise 1', description: 'Simple Calculator ' },
  { path: "/PrimeNumbers", title: 'Exercise 2', description: 'Prime Numbers' },
  { path: "/Factorial", title: 'Exercise 3', description: 'Factorial' },
  { path: "/Palindrome", title: 'Exercise 4', description: 'Palindrome' },
  { path: "/Table", title: 'Exercise 5', description: 'Table' },
  { path: "/VowelCounter", title: 'Exercise 6', description: 'Vowel Counter' },
  { path: "/GradeAverage", title: 'Exercise 7', description: 'Grade Average ' },
  { path: "/InterestCalculation", title: 'Exercise 8', description: 'Interest Calculation' },
];

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 5 }}>
      Home page
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Link to={`${card.path}`} style={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography color="textSecondary">{card.description}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
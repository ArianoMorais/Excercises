import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Theme from './Theme';

import Home from './Components/Home';
import Table  from './Components/Table ';
import PrimeNumbers from './Components/PrimeNumbers';
import SimpleCalculator from './Components/SimpleCalculator';
import Factorial  from './Components/Factorial ';
import Palindrome  from './Components/Palindrome ';
import VowelCounter from './Components/VowelCounter';
import GradeAverage from './Components/GradeAverage';
import InterestCalculation from './Components/InterestCalculation';


const App = () => {
  return (
    <ThemeProvider theme={Theme}>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/SimpleCalculator" element={<SimpleCalculator/>} />
          <Route path="/PrimeNumbers" element={<PrimeNumbers/>} />
          <Route path="/Factorial" element={<Factorial/>} />
          <Route path="/Palindrome" element={<Palindrome/>} />
          <Route path="/Table" element={<Table/>} />
          <Route path="/VowelCounter" element={<VowelCounter />} />
          <Route path="/GradeAverage" element={<GradeAverage />} />
          <Route path="/InterestCalculation" element={<InterestCalculation/>} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
};

export default App;
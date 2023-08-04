import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const GradeAverage = () => {
    const [grade1, setGrade1] = useState('');
    const [grade2, setGrade2] = useState('');
    const [grade3, setGrade3] = useState('');
    const [average, setAverage] = useState(null);
    const [error, setError] = useState(null);

    const handleGrade1Change = (event) => {
        const value = event.target.value;
        setGrade1(value);
    };

    const handleGrade2Change = (event) => {
        const value = event.target.value;
        setGrade2(value);
    };

    const handleGrade3Change = (event) => {
        const value = event.target.value;
        setGrade3(value);
    };

    const calculateAverage = () => {
        const grade1Value = parseFloat(grade1);
        const grade2Value = parseFloat(grade2);
        const grade3Value = parseFloat(grade3);

        if (isNaN(grade1Value) || isNaN(grade2Value) || isNaN(grade3Value)) {
            setError('Please fill in all fields correctly.');
            setAverage(null);
        } else if (grade1Value < 0 || grade2Value < 0 || grade3Value < 0) {
            setError('Grades cannot be negative.');
            setAverage(null);
        } else {
            const averageValue = (grade1Value + grade2Value + grade3Value) / 3;
            setError(null);
            setAverage(averageValue.toFixed(2));
        }
    };

    return (
        <Box sx={{ maxWidth: 400, margin: '0 auto', mt: 10, padding: 2, border: '1px solid #ddd', borderRadius: 5 }}>
            <Typography sx={{ textAlign: 'center', mb: 3 }} variant="h6">Grade Average Calculator</Typography>
            <div>
                <TextField
                    label="Grade for Subject 1"
                    type="number"
                    value={grade1}
                    onChange={handleGrade1Change}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                />
            </div>
            <div>
                <TextField
                    label="Grade for Subject 2"
                    type="number"
                    value={grade2}
                    onChange={handleGrade2Change}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                />
            </div>
            <div>
                <TextField
                    label="Grade for Subject 3"
                    type="number"
                    value={grade3}
                    onChange={handleGrade3Change}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                />
            </div>
            {error && (
                <Typography variant="body4" color="secondary" sx={{ marginTop: 1, fontWeight: 'bold' }}>
                    {error}
                </Typography>
            )}
            {average !== null && (
                <Typography variant="body2" sx={{ marginTop: 1, fontWeight: 'bold' }}>
                    The average grade is: {average}
                </Typography>

            )}
            <Box sx={{mt:4}}>
                <Button variant="contained" onClick={calculateAverage} >
                    Calculate Average
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

export default GradeAverage;
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value}`;
}

export function RangeSlider() {
    const [value, setValue] = React.useState<number[]>([10, 50]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const marks = [
        {
            value: 0,
            label: value[0],
        },
        {
            value: 100,
            label: value[1],
        }]



    return (
        <Box sx={{ width: 900, marginLeft:'20px', fontWeight:'bold'}}>
            <Slider
                min={0}
                max={100}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color="secondary"
                marks={marks}
            />

            <Slider
                min={0}
                max={100}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color="secondary"
                marks={marks}
            />
        </Box>
    );
}
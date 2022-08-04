/* eslint-disable */
import { Box, MenuItem, Select, Typography } from '@mui/material';
import * as React from 'react';

export interface ISelectsProps {
  name: string;
  value: string[];
  register?: any;
}

function Selects(props: Partial<ISelectsProps>) {
  const { name, value, register } = props;
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Typography variant="h6" gutterBottom component="div">
          {name}
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Gender"
          // onChange={handleChange}
          {...register}
        >
          {value?.map((value, index) => (
            <MenuItem value={value} key={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </div>
  );
}
export default Selects;

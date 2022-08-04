/* eslint-disable */
import { Box, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { FieldValues, UseFormRegister, UseFormReturn } from 'react-hook-form';
export interface IFieldsProps {
  name?: string;
  register?: any;
}

const Fields: FC<IFieldsProps> = (props: Partial<IFieldsProps>) => {
  const { name, register } = props;
  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Typography variant="h6" gutterBottom component="div">
          {name}
        </Typography>
        <TextField variant="standard" {...register} />
      </Box>
    </Box>
  );
};
export default Fields;

import React from 'react'
import { Button } from '@mui/material'

const Square = ({value, onSquareClick}) => {
  return (
    
      <Button variant='outlined' sx={{width: 100, height: 100}} onClick={onSquareClick}>{value}</Button>
    
  );
}

export default Square

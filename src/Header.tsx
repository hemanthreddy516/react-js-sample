import React from 'react';
import { Typography } from '@mui/material';
interface HeaderTitle {
  title: string;
}

const Header = ({ title }: HeaderTitle) => (
  <Typography
    variant="h5"
    style={{
      height: '100px',
      lineHeight: '100px',
      margin: '0 0 20px',
      backgroundColor: '#f0f0f0',
    }}
  >
    <span style={{ marginLeft: '20px' }}> {title}</span>
  </Typography>
);

export default Header;

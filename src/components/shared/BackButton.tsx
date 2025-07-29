'use client';

import React from 'react';
// import { useRouter } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import {ReactComponent as ArrowLeftIcon}  from '../../assets/images/back-button.svg';

// Define prop types
interface BackButtonProps {
  text: string;
  onClick?: () => void;
  isOtpPage?: boolean;
  onBack?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ text, onClick, isOtpPage = false, onBack }) => {
//   const router = useRouter();

  const handleGoBack = () => {
    if (onBack) {
      onBack();
    } else {
    //   router.back();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
      }}
      onClick={isOtpPage ? onClick : handleGoBack}
    >
      <ArrowLeftIcon className="f-24"/>
      <Typography className='f-13 fontw-400' sx={{  color: "var(--text-secondary)", lineHeight: '20px'}}>
        {text}
      </Typography>
    </Box>
  );
};

export default BackButton;

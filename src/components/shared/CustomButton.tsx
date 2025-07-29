import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends Partial<ButtonProps> {
  isLoading?: boolean;
  width?: string | number;
  marginRight?: string | number;
  px?: string | number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  isLoading = false,
  onClick,
  children,
  startIcon,
  endIcon,
  width,
  type = 'submit',
  marginRight,
  px,
  sx = {},
  ...rest
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      size={size}
      disabled={disabled || isLoading}
      onClick={onClick}
      disableElevation
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        width: width ?? '100%',
        fontSize: '12px',
        fontWeight: '700',
        borderRadius: '8px',
        textTransform: 'none',
        marginRight,
        px,
        backgroundColor: color === 'secondary' ? 'background.secondary' : undefined,
        color:
          variant === 'outlined'
            ? 'text.gray200'
            : color === 'secondary'
            ? 'text.primary'
            : undefined,
        '&:hover': {
          backgroundColor: color === 'secondary' ? 'background.secondary' : undefined,
        },
        '&.Mui-disabled': {
    background: 'var(--disabled)', // Light gray background
    color: 'var(--text-primary)',           // Gray text
    borderColor: 'var(--disabled)',     // Optional: subtle border
    cursor: 'not-allowed',
  },
        ...sx,
      }}
      {...rest}
    >
      {isLoading ? 'Loading...' : children}
    </Button>
  );
};

export default CustomButton;

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  IconButton,
  Fade,
  Divider,
} from '@mui/material';
import {
  CheckCircle,
  Close,
  ArrowForward,
} from '@mui/icons-material';
import CustomButton from '../shared/CustomButton';
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

interface PasswordUpdateDialogProps {
  open: boolean;
  onClose: () => void;
  onSignIn: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
}

const PasswordUpdateDialog: React.FC<PasswordUpdateDialogProps> = ({
  open,
  onClose,
  onSignIn,
  title = "Your Password Has Been Updated!",
  message = "You're all set! Your new password is now active and your account is secure.",
  buttonText = "Sign In Now"
}) => {
  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick') {
          onClose();
        }
      }}
      TransitionComponent={Fade}
      transitionDuration={300}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          // padding: 2,
          position: 'relative',
          maxWidth: '37.5rem',
          margin: 2,
        }
      }}
    >

      <DialogContent sx={{textAlign: 'left','&.MuiDialogContent-root': {
      padding: '16px 0px', // <-- Your custom padding
    } }}>
        {/* Success Icon and Title */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 2,
            // Add box shadow after title
             boxShadow: '0px 4px 4px -2px rgba(0, 0, 0, 0.1)',
             padding: 3,
            marginBottom: 3,
          }}
        >
          <CheckCircle
            sx={{
              color: '#4caf50',
              fontSize: 24,
              mr: 2,
            }}
          />
          <Typography
            className='f-18 fontw-700'
            sx={{
              fontWeight: 600,
              color: 'var(--text-primary)'
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Main Message */}
        <Typography
          className='f-18 fontw-700'
          sx={{
            color: '#00000099',
            mb: 2,
           pl: 3, // padding-left
    pr: 3, // padding-right
    pb: 0, // padding-bottom
    pt: 0 
          }}
        >
          {message}
        </Typography>

        {/* Sub Message */}
        <Typography
          className='f-16 fontw-700'
          sx={{
            color: '#00000099',
            lineHeight: 1.5,
             pl: 3, // padding-left
    pr: 3, // padding-right
    pb: 0, // padding-bottom
    pt: 0 
          }}
        >
          Sign in now to access your dashboard.
        </Typography>
      </DialogContent>

      {/* Divider before sign in button */}
      <Divider 
        sx={{ 
          borderColor: 'rgba(0, 0, 0, 0.08)',
        }} 
      />

      <DialogActions sx={{ padding: '24px 24px 24px 24px' }}>
        <CustomButton
          color="primary"
          size="large"
          type="submit"
          className="f-13 fontw-700"
          onClick={onSignIn}
          sx={{
            background: "linear-gradient(180deg, #114376 0%, #093467 100%)",
            border: "1px solid",
            borderColor: "border.black100",
            boxShadow: "0px 1px 2px 0px #00000014",
            width: '100%',
          }}
        >
          <Box display="flex" alignItems="center">
            <Typography component="span" className="f-13 fontw-700">
              {buttonText}
            </Typography>
            <ArrowForwardIosOutlinedIcon 
              sx={{ 
                ml: "8px", 
                height: 'var(--font-size-body1)',
                width: 'var(--font-size-body1)',
              }} 
            />
          </Box>
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default PasswordUpdateDialog;
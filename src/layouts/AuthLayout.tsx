import React, { useState } from "react";
import { SplitLayout } from "./SplitLayout";
import { Outlet, useLocation } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { DynamicLogo } from "../components/Logo";

interface AuthLayoutProps {
  imageSrc?: string;
}
export function AuthLayout({ imageSrc = "/assets/auth-illustration.svg" }: AuthLayoutProps): React.JSX.Element {


   const [showOtp, setShowOtp] = useState<boolean>(false);
  const [showEmail, setShowEmail] = useState<boolean>(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPhone, setLoginPhone] = useState<any>(null);
  const location = useLocation();

  const currentPath = location.pathname;

  const isLoginPage = currentPath.includes("login");
  const isForgotPassword = currentPath.includes("forgot-password");
  // loginPhone={loginPhone} loginEmail={loginEmail} onClick={handleBack}

  const handleShowOtp = () => {
    setShowOtp(true);
  };

  const handleShowEmail = () => {
    setShowEmail(true);
  };

  const handleShowMobile = () => {
    setShowEmail(false);
  };
  const handleBack = () => {
    setShowOtp(false);
  };
  const contextData = {
    onClick: handleShowOtp,
    handleShowMobile:handleShowMobile,
    showOtp:showOtp,
    setShowOtp:setShowOtp,
    setLoginEmail:setLoginEmail,
    loginPhone:loginPhone,
    loginEmail:loginEmail
  };
  return (
    <SplitLayout >
       <Stack spacing={4}>
       {/* <Stack spacing={3}>
              {!showOtp && (
                <><Box sx={{ display: 'inline-block', fontSize: 0 }}>
                <DynamicLogo colorDark="light" colorLight="dark" height={30} width={115} />
              </Box>
           
                </>
                )} */}
              {/* </Box> */}
      <Outlet context={contextData}/>
      {/* </Stack> */}
      </Stack>
    </SplitLayout>
  );
}
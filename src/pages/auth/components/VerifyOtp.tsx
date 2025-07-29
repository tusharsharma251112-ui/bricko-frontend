import React, { useEffect, useState } from 'react';
// import storage from '@/utils/storage';
import { zodResolver } from '@hookform/resolvers/zod';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { FormControl, FormHelperText, Box, Stack, Typography } from '@mui/material';
import axios from 'axios';
// import platform from 'platform';
import { Controller, useForm } from 'react-hook-form';
import OTPInput from 'react-otp-input';
import { z as zod } from 'zod';

// import { authClient } from '@/lib/auth/custom/client';
// import BackButton from '@/components/core/BackButton';
import CustomButton from '../../../components/shared/CustomButton';
import { DynamicLogo } from '../../../components/Logo';
import BackButton from '../../../components/shared/BackButton';
// import { toast } from '@/components/core/toaster';

const apiurl = process.env.NEXT_PUBLIC_SITE_URL || '';

const schema = zod.object({
  otp: zod.string().min(1, { message: 'Please enter your OTP' }),
});

type FormValues = zod.infer<typeof schema>;

const defaultValues: FormValues = { otp: '' };

interface VerifyOtpFormProps {
  path?: string;
  loginPhone?: {
    mobileNumber: string;
    countryCode: string;
  };
  loginEmail?: string;
  onClick: () => void;
  callBackfunction?:  () => void;
}

export const VerifyOtpForm: React.FC<VerifyOtpFormProps> = ({ path, loginPhone, loginEmail, onClick, callBackfunction }) => {
//   const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(15);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  console.log(path);

  const onSubmitOtp = async (values: FormValues) => {
    setLoading(true);
    const email = sessionStorage.getItem('email');
    const reqBody = loginPhone
      ? {
          type: 'mobileNumber',
          mobileNumber: loginPhone.mobileNumber,
          countryCode: loginPhone.countryCode,
          tempOtp: values.otp,
        }
      : {
          type: 'email',
          email: loginEmail ?? email,
          tempOtp: values.otp,
        };

    try {
        if (path && path === "forgot-password") {
            callBackfunction?.();
        } else {

        }
    //   const ip = await getIP();
    //   const systemInfo = platform.description;

    //   const res = await axios.patch(`${apiurl}/auth/verify-otp`, reqBody, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'x-user-ip': ip,
    //       'x-system-info': systemInfo,
    //     },
    //   });

    //   const token = res?.data?.result?.data?.token;
    //   storage.clearToken();
    //   storage.setToken(token);
    //   storage.setUser(res?.data?.result?.data);

    //   router.push(path);
    //   toast.success(res?.data?.result?.message);
    } catch (error: any) {
    //   toast.error(error?.response?.data?.error?.errors?.[0] || 'Something went wrong.');
    } finally {
    //   setLoading(false);
    }
  };

  useEffect(() => {
    setValue('otp', otp);
  }, [otp, setValue]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const reSendOTP = async () => {
    const email = sessionStorage.getItem('email');
    // const res = await authClient.sendOtp({ email });
    // if (res.error) {
    //   toast.error(res.error.message || 'Something went wrong!');
    // } else {
      setTimer(15);
    // }
  };

  return (
    <Stack>
      <BackButton text="Back" onClick={onClick} isOtpPage />
      <Box sx={{ display: 'inline-block', fontSize: 0, mt: '23px' }}>
        <DynamicLogo colorDark="light" colorLight="dark" height={40} width={116} />
      </Box>
      <Stack mt={2}>
        <Typography mb="8px" className='f-18 fontw-700' sx={{  color: "var(--text-secondary)"}}>
          Verify your Sign In
        </Typography>
      </Stack>
      <Typography lineHeight="19.5px" className='f-13 fontw-400' sx={{  color: "var(--text-primary)"}} mt="18px" mb="12px">
        Check your {loginEmail && 'email'} {loginPhone && 'phone'} {!loginEmail && !loginPhone && 'email'} for an OTP*
      </Typography>
      <form onSubmit={handleSubmit(onSubmitOtp)}>
        <Stack gap={1}>
          <Controller
            control={control}
            name="otp"
            render={({ field }) => (
              <FormControl error={Boolean(errors.otp)} fullWidth>
                <OTPInput
                  {...field}
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  shouldAutoFocus
                  inputStyle={{
                    width: '65px',
                    height: '42px',
                    margin: 0,
                    boxShadow: '0px 1px 2px 0px #00000014',
                  }}
                  skipDefaultStyles={false}
                  containerStyle={{
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                  renderInput={(props) => <input {...props} className="email-otp" />}
                />
                {errors.otp && <FormHelperText>{errors.otp.message}</FormHelperText>}
              </FormControl>
            )}
          />

          <Box
          className='f-13 fontw-400'
            sx={{
              color: timer === 0 ? 'var(--primary-main)' : 'var(--text-disabled)',
              letterSpacing: '0.16px',
              lineHeight: '18px',
              cursor: timer === 0 ? 'pointer' : 'default',
              mt: '10px',
            }}
            onClick={timer === 0 ? reSendOTP : undefined}
          >
            {timer === 0 ? 'Resend' : `Resend OTP in ${timer}s`}
          </Box>

          <CustomButton
            size="large"
            isLoading={loading}
            sx={{
              mt: '12px',
              background: 'linear-gradient(180deg, #114376 0%, #093467 100%)',
              border: '1px solid',
              borderColor: 'border.black100',
              boxShadow: '0px 1px 2px 0px #00000014',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography className='f-13 fontw-700'>
                Verify
              </Typography>
              <ArrowForwardIosOutlinedIcon sx={{ ml: '8px', fontSize: '14px' }} />
            </Box>
          </CustomButton>
        </Stack>
      </form>
    </Stack>
  );
};

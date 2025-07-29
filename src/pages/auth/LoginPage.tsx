import * as React from "react";
import { Box, Typography, TextField, Button, Link, Stack } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom"; // Import useNavigate for programmatic navigation
// import CustomInput from '../../components/shared/CustomInput';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import CustomInput from "../../components/shared/CustomInput";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CustomButton from "../../components/shared/CustomButton";
import { VerifyOtpForm } from "./components/VerifyOtp";
import { DynamicLogo } from "../../components/Logo";

const schema = zod.object({
  email: zod.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
  password: zod.string().min(1, { message: "Password is required" }),
});
// handleShowMobile:{handleShowMobile},
//     setShowOtp:{setShowOtp},
//     setLoginEmail:{setLoginEmail}

const defaultValues = { email: "", password: "" };
export default function LoginPage(): React.JSX.Element {
  const {  setLoginEmail, loginPhone,
    loginEmail,} = useOutletContext<any>();
  const navigate = useNavigate(); // Hook to get the navigate function
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const [showOtp, setShowOtp] = React.useState<boolean>(false);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({ defaultValues, resolver: zodResolver(schema), mode: "onChange", });

  const email = watch("email");
  const password = watch("password");
  const handleBack = () => {
    reset({ email: '', password: '' });
    setShowOtp(false);
  }

  // Dummy login handler
   const login = async (values: any) => {
    setIsPending(true);
    const { email, password } = values;
    console.log(email,password);
    // try {
      // const ip = await getIP();
      // const systemInfo = platform.description;
      // const res = await axios.post(
      //   `${apiurl}/user/login`,
      //   { email, password },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'x-user-ip': ip,
      //       'x-system-info': systemInfo,
      //     },
      //   }
      // );
      // if (res?.data?.result?.data?.isMfaEnabled) {
        // toast.success(res?.result?.message || 'An Otp has been sent your email');
        setLoginEmail(values?.email);
        setShowOtp(true);
        setIsPending(false);
        // const token = res?.data?.result?.data.token;
        // storage.setToken(token);
        // storage.setUser(res?.data?.result?.data);
      // } else {
        // storage.clearToken();
        // // const token = res?.data?.result?.data.token;
        // storage.setToken(token);
        // storage.setUser(res?.data?.result?.data);
        // route.push('/');
        // toast.success(res?.data?.result?.message);
        setIsPending(false);
      // }
    // } catch (error) {
      // toast.error(error?.response?.data?.error?.errors[0] || 'Some thing went wrong.');
      // setIsPending(false);
    // }
  }
  const handleNavigation = () => {
    navigate('/auth/forgot-password')
  }
console.log(showOtp);
  return (
    // <Box sx={{ p: 4 }}>
    //   <Typography variant="h4" component="h1" gutterBottom align="center">
    //     Sign In
    //   </Typography>
    //   <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }} align="center">
    //     Don't have an account? {' '}
    //     <Link href="/auth/register" variant="body2" underline="hover">
    //       Sign up
    //     </Link>
    //   </Typography>
    //   <form onSubmit={handleLogin}> {/* Attach the handler to the form */}
    //     <TextField
    //       label="Email address"
    //       type="email"
    //       fullWidth
    //       margin="normal"
    //       required
    //       variant="outlined"
    //     />
    //     <TextField
    //       label="Password"
    //       type="password"
    //       fullWidth
    //       margin="normal"
    //       required
    //       variant="outlined"
    //     />
    //     <Button
    //       type="submit"
    //       variant="contained"
    //       color="primary"
    //       fullWidth
    //       size="large"
    //       sx={{ mt: 3, mb: 2 }}
    //     >
    //       Sign In
    //     </Button>
    //   </form>
    //   <Link href="/auth/forgot-password" variant="body2" underline="hover" sx={{ display: 'block', textAlign: 'center' }}>
    //     Forgot password?
    //   </Link>
    // </Box>
    <>
    {showOtp ?<VerifyOtpForm onClick={handleBack}/> :
    <>
    <Stack spacing={3}>
      <Box sx={{ display: 'inline-block', fontSize: 0 }}>
                <DynamicLogo colorDark="light" colorLight="dark" height={30} width={115} />
              </Box>
     <Stack spacing={1}>
                  {/* <Box> */}
                    <Typography className="fontw-700 f-18" sx={{ color: 'var(--text-secondary)',
          }}>
                      Welcome Super Admin!
                    </Typography>
    
                    <Typography className="f-12 fontw-400"sx={{ color: 'var(--text-secondary)'}}>
                      Let’s get you into your BrickoERP account.
                    </Typography>
                    </Stack>
    <form onSubmit={handleSubmit(login)}>
    <Stack spacing={3}>
      <CustomInput
        control={control}
        name="email"
        type="email"
        inputlabel="Email"
        placeholder="Enter email"
        errors={errors}
        required
      />
      <CustomInput
        control={control}
        name="password"
        type="password"
        inputlabel="Password"
        placeholder="Enter password"
        errors={errors}
        required
        minLength={8}
      />
      <Link
        className="privacy-policy-text"
        sx={{
          color: "var(--primary-main)",
          fontSize: "var(--font-size-caption)",
          fontWeight: 400,
          cursor: 'pointer'
        }}
        onClick={handleNavigation}
      >
        {" "}
        Forgot Password?{" "}
      </Link>
      <CustomButton
        color="primary"
        size="large"
        type="submit"
        className="f-13 fontw-700"
        disabled={!email || !password || !isValid }
        // isLoading={isPending}
        sx={{
          background: "linear-gradient(180deg, #114376 0%, #093467 100%)",
          border: "1px solid",
          borderColor: "border.black100",
          boxShadow: "0px 1px 2px 0px #00000014",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography component="span" className="f-13 fontw-700">
            Continue
          </Typography>
          <ArrowForwardIosOutlinedIcon sx={{ ml: "8px", height: 'var(--font-size-body1)', // e.g., "20px" or 20
    width: 'var(--font-size-body1)',  }} />
        </Box>
      </CustomButton>
    </Stack>
    </form>
    </Stack>
    </>
    }
    </>
  );
}

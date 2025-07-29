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
import BackButton from "../../components/shared/BackButton";
import CreateNewPassword from "./components/CreateNewPassword";

const schema = zod.object({
  email: zod.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
});

const defaultValues = { email: ""};
export default function ForgotPassword(): React.JSX.Element {
  const { setLoginEmail, loginPhone, loginEmail } =
    useOutletContext<any>();
  const navigate = useNavigate(); // Hook to get the navigate function
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const [showOtp, setShowOtp] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState(0);
// const [showEmail, setShowEmail] = useState<boolean>(true);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const email = watch("email");
  const handleBack = () => {
    reset({ email: "" });
    setIndex(0);
    setShowOtp(false);
  };

  // Dummy login handler
  const login = async (values: any) => {
    setIsPending(true);
    const { email } = values;
    console.log(email);
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
  };
  const onClick  =() => {
    if (index === 1) {
reset({ email: "" });
    setIndex(0);
    setShowOtp(false);
    } else {
    navigate('/auth/login')

    }
  }
  const callBackfunction = () => {
    setIndex(1);
    setShowOtp(false);
  }
  console.log(showOtp);
  return (
    <>
      {showOtp ? (
        <VerifyOtpForm path={'forgot-password'} onClick={handleBack} callBackfunction={callBackfunction}/>
      ) : (
        <>
        <Stack spacing={3}>
            <BackButton text="Back" onClick={onClick} isOtpPage />
              <Box sx={{ display: 'inline-block', fontSize: 0 }}>
                        <DynamicLogo colorDark="light" colorLight="dark" height={30} width={115} />
                      </Box>
          {index === 0 ?
          <>
          <Stack spacing={1}>
            {/* <Box> */}
            <Typography
              className="fontw-700 f-18"
              sx={{ color: "var(--text-secondary)" }}
            >
              Forgot Password
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
              {/* <CustomInput
                control={control}
                name="password"
                type="password"
                inputlabel="Password"
                placeholder="Enter password"
                errors={errors}
                required
                minLength={8}
              /> */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}><CustomButton
                color="primary"
                size="large"
                type="submit"
                className="f-13 fontw-700"
                disabled={!email || !isValid}
                // isLoading={isPending}
                sx={{
                  background:
                    "linear-gradient(180deg, #114376 0%, #093467 100%)",
                  border: "1px solid",
                  borderColor: "border.black100",
                  boxShadow: "0px 1px 2px 0px #00000014",
                }}
                width={90}
              >
                <Box display="flex" alignItems="center">
                  <Typography component="span" className="f-13 fontw-700">
                    Next
                  </Typography>
                  <ArrowForwardIosOutlinedIcon
                    sx={{
                      ml: "8px",
                      height: "var(--font-size-body1)", // e.g., "20px" or 20
                      width: "var(--font-size-body1)",
                    }}
                  />
                </Box>
              </CustomButton></Box>
            </Stack>
          </form></>: 
          <CreateNewPassword/>
          }
          </Stack>
        </>
      )}
    </>
  );
}

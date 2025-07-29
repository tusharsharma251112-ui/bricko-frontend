import * as React from "react";
import { Box, Typography, TextField, Button, Link, Stack } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom"; // Import useNavigate for programmatic navigation
// import CustomInput from '../../components/shared/CustomInput';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import CustomInput from "../../../components/shared/CustomInput";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CustomButton from "../../../components/shared/CustomButton";
// import { VerifyOtpForm } from "./components/VerifyOtp";
// import { DynamicLogo } from "../../components/Logo";
// import BackButton from "../../components/shared/BackButton";
// import CreateNewPassword from "./components/CreateNewPassword";

const schema = zod.object({
 password: zod.string().min(1, { message: "Password is required" }),
 retypePassword: zod.string().min(1, { message: "Password is required" }),
});
const defaultValues = { password: "", retypePassword: ""};

export default function CreateNewPassword()  {
    const navigate = useNavigate(); // Hook to get the navigate function
      const [isPending, setIsPending] = React.useState<boolean>(false);
      const [showOtp, setShowOtp] = React.useState<boolean>(false);
      const [index, setIndex] = React.useState(0);
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
    // setLoginEmail(values?.email);
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
    return (
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
                name="password"
                type="password"
                inputlabel="Create Password"
                placeholder="Enter password"
                errors={errors}
                onFocusHelpText={"Use at least 8 characters with letters, numbers, and special symbols.​"}
                margin={{ mt: '2%', px: '2%' }}
                required
              />
              <CustomInput
                control={control}
                name="retypePassword"
                type="password"
                inputlabel="Retype Password"
                placeholder="Enter password"
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
                // disabled={!email || !isValid}
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
                    Save
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
          </form></>
    );
}
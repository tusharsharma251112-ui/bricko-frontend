import React, { useState, ChangeEvent, FocusEvent } from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Switch,
  Typography,
  SxProps,
  Theme,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
// import { EyeSlash as EyeSlashIcon } from '@phosphor-icons/react/dist/ssr/EyeSlash';
import {
  Controller,
  Control,
  FieldValues,
  RegisterOptions,
  FieldErrors,
  Path,
} from "react-hook-form";

interface CustomInputProps<T extends FieldValues> {
  control: Control<T>;
  errors: FieldErrors<T>;
  name: Path<T>;
  type: string;
  inputlabel?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  emailVerified?: boolean;
  handleVerifyEmail?: () => void;
  placeholder?: string;
  showVerify?: boolean;
  isDisable?: boolean;
  height?: string | number;
  helpText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  prefix?: string;
  isReadOnly?: boolean;
  margin?: SxProps<Theme>;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  switchLable?: string;
  isSwitchButton?: boolean;
  rules?: RegisterOptions<T, Path<T>>;
  errMessage?: string;
  suffix?: string;
  customOnBlur?: (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  autoFocusInput?: boolean;
  noborderOutline?: boolean;
  value?: string;
  sx?: SxProps<Theme>;
  onFocusHelpText?: string;
}

const CustomInput = <T extends FieldValues>({
  control,
  errors,
  name,
  type,
  inputlabel,
  minLength,
  maxLength,
  required,
  emailVerified,
  handleVerifyEmail,
  placeholder,
  showVerify = false,
  isDisable = false,
  height,
  helpText,
  onChange,
  prefix,
  isReadOnly = false,
  margin,
  endAdornment = null,
  startAdornment = null,
  switchLable,
  isSwitchButton = false,
  rules,
  errMessage = undefined,
  suffix = undefined,
  customOnBlur,
  autoFocusInput = false,
  noborderOutline,
  value,
  sx = {},
  onFocusHelpText,
}: CustomInputProps<T>): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    // Optional: call parent handler if needed
    // handleSwitch?.(event.target.checked);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" justifyContent="space-between">
        <InputLabel className="form-label">
          {inputlabel} {required ? "*" : ""}
        </InputLabel>
        {isSwitchButton && (
          <Stack direction="row" alignItems="center" spacing="5px">
            <InputLabel className="form-label">{switchLable}</InputLabel>
            <Switch size="small" checked={isChecked} onChange={handleChange} />
          </Stack>
        )}
      </Stack>

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => {
          const commonProps = {
            ...field,
            minLength,
            maxLength,
            readOnly: isReadOnly,
            placeholder,
            autoFocus: autoFocusInput,
            disabled: isChecked || isDisable,
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              onChange ? onChange(e) : field.onChange(e);
            },
            onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              field.onBlur();
              customOnBlur?.(e);
              setIsFocused(false);
            },
            onFocus: () => {
              setIsFocused(true);
            },
          };

          const baseSx = {
            maxHeight: height,
            borderRadius: "8px",
            boxShadow: "0px 1px 2px 0px #00000014",
            padding: 0,
            "& .MuiInputBase-input::placeholder": {
              color: "var(--text-secondary)",
              opacity: 1,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid var(--neutral-200)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "2px solid var(--primary-main)", // focus color
            },
            ...sx,
          };

          //   console.log();

          const getInput = () => {
            switch (type) {
              case "password":
                return (
                  <OutlinedInput
                    {...commonProps}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? (
                          <RemoveRedEyeOutlinedIcon
                            cursor="pointer"
                            sx={{ fontSize: "var(--icon-fontSize-md)" }}
                          />
                        ) : (
                          <VisibilityOffOutlinedIcon
                            cursor="pointer"
                            sx={{ fontSize: "var(--icon-fontSize-md)" }}
                          />
                        )}
                      </IconButton>
                    }
                    className="form-input"
                    sx={baseSx}
                  />
                );

              case "email":
                return (
                  <OutlinedInput
                    {...commonProps}
                    type="email"
                    // endAdornment={
                    //   <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    //     <Typography
                    //       onClick={handleVerifyEmail}
                    //       sx={{
                    //         cursor: 'pointer',
                    //         color: emailVerified ? 'green' : 'blue',
                    //         fontSize: '13px',
                    //         fontWeight: 400,
                    //       }}
                    //     >
                    //       {emailVerified ? 'Verified' : 'Verify'}
                    //     </Typography>
                    //   </Box>
                    // }
                    className="form-input"
                    sx={baseSx}
                  />
                );

              case "prefix":
                return (
                  <OutlinedInput
                    {...commonProps}
                    startAdornment={
                      <InputAdornment position="start">{prefix}</InputAdornment>
                    }
                    endAdornment={endAdornment}
                    className="form-input"
                    sx={baseSx}
                  />
                );

              case "valueadded":
                return (
                  <OutlinedInput
                    {...commonProps}
                    value={value}
                    endAdornment={
                      suffix ? (
                        <Typography color="text.secondary" pr={1}>
                          {suffix}
                        </Typography>
                      ) : (
                        endAdornment
                      )
                    }
                    className="form-input"
                    sx={baseSx}
                  />
                );

              default:
                return (
                  <OutlinedInput
                    {...commonProps}
                    startAdornment={startAdornment}
                    endAdornment={
                      suffix ? (
                        <Typography color="text.secondary" pr={1}>
                          {suffix}
                        </Typography>
                      ) : (
                        endAdornment
                      )
                    }
                    className="form-input"
                    sx={{ ...baseSx, backgroundColor: "white" }}
                  />
                );
            }
          };
          // console.log(getInput());
          return (
            <FormControl
              error={Boolean(errors[name] || errMessage)}
              variant="outlined"
              fullWidth
            >
              {getInput()}
              {(errors[name] || errMessage) && (
                <FormHelperText sx={{ marginLeft: 0 }}>
                  {(errors[name]?.message as string) || errMessage}
                </FormHelperText>
              )}
              {onFocusHelpText && isFocused ? (
                <Typography
                  className="f-12 fontw-400"
                  sx={{ color: "var(--text-secondary)", ...margin }}
                >
                  {onFocusHelpText}
                </Typography>
              ) : !onFocusHelpText && helpText ? (
                <Typography
                  className="f-12 fontw-400"
                  sx={{ color: "var(--text-secondary)", ...margin }}
                >
                  {helpText}
                </Typography>
              ) : null}
            </FormControl>
          );
        }}
      />
    </Box>
  );
};
export default CustomInput;

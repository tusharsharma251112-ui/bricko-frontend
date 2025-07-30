declare module 'react-otp-input' {
  import * as React from 'react';

  interface OTPInputProps {
    value: string;
    onChange: (otp: string) => void;
    numInputs: number;
    inputStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    renderInput?: (props: any) => React.ReactNode;
    shouldAutoFocus?: boolean;
    skipDefaultStyles?: boolean;
    isInputNum?: boolean;
    inputType?: string;
  }

  const OTPInput: React.FC<OTPInputProps>;
  export default OTPInput;
}

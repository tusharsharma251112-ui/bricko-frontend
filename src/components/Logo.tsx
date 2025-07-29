
import * as React from 'react';
import Box from '@mui/material/Box';
import lightImage from "../assets/images/bricko-light.svg";
import darkImage from "../assets/images/bricko-logo.svg";



const HEIGHT = 60;
const WIDTH = 60;

export function Logo({ color = 'dark', height = HEIGHT, width = WIDTH }) {
  let url = '../../public/assets/images/bricko-light.svg';

//   if (emblem) {
    // url = color === 'light' ? '/assets/logo-emblem.svg' : '/assets/logo-emblem--dark.svg';
//   } else {
//     url = color === 'light' ? '/assets/bricko-light.svg' : '/assets/bricko-dark.svg';
//   }

  return <Box alt="logo" component="img" height={height} src={darkImage} width={width} />
}

export function DynamicLogo({ height = HEIGHT, width = WIDTH, ...props }) {
  return (
    <>
    {/* <Box sx={{ height: `${height}px`, width: `${width}px` }} />
      <Logo height={height} width={width} {...props} /> */}
      <Logo height={height} width={width} {...props} />
    </>
  );
}

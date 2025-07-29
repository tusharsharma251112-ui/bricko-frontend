import * as React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { DynamicLogo } from '../components/Logo';
import leftLogo from "../assets/images/top-imageleft-side.svg";
// import leftLogo from "../assets/images/Maskgroup.png";


// Define the props for the SplitLayout component
interface SplitLayoutProps {
  /**
   * The content to be rendered on the right side of the split layout.
   * This is typically your form (login, forgot password, etc.).
   */
  children?: React.ReactNode;
  /**
   * The source URL for the image displayed on the left side of the split layout.
   * This will be used in a standard <img> tag.
   */
  imageSrc?: string;
  /**
   * Optional CSS class name to apply to the image container.
   * Useful for specific image sizing or animations if needed later.
   */
  imageClassName?: string;
  /**
   * Optional CSS class name to apply to the root container of the layout.
   * Useful for overall layout adjustments.
   */
  rootClassName?: string;
  /**
   * Optional CSS class name to apply to the content container on the right.
   */
  contentClassName?: string;
}

export function SplitLayout({
  children,
  imageSrc,
  imageClassName,
  rootClassName,
  contentClassName,
}: SplitLayoutProps): React.JSX.Element {
  console.log(leftLogo);
  return (
//     <Box
//   sx={{
//     display: 'grid',
//     gridTemplateColumns: { xs: '1fr', md: '55% 45%', lg: '60% 40%' },
//     height: '100vh',
//     overflow: 'hidden',
//   }}
// >
//   {/* Left Pane: Branding Section */}
//   <Box
//     className="sign-up-bg-image"
//     sx={{
//       display: { xs: 'none', md: 'flex' },
//       flexDirection: 'column',
//       height: '100%',
//     }}
//   >
//     {/* Top 75% for the Background Image */}
//     <Box
//       sx={{
//         flex: '3', // 3/4 = 75% of the vertical space
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         overflow: 'hidden',
//         bgcolor: '#022E69',
//         width: '100%',
//         height:'auto',
//         position: 'relative',
//         // Background image properties
//         backgroundImage: `url(${leftLogo})`,
//         backgroundSize: 'contain', // or 'cover' depending on your preference
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center center',
        
//         // Alternative: If you want more control over sizing
//         // backgroundSize: '90% 90%', // Custom sizing
//         // backgroundSize: 'auto 80%', // Height-based sizing
        
//         // For better image quality on high DPI screens
//         // backgroundAttachment: 'scroll',
//       }}
//     >
//       {/* Optional: Overlay content on top of background */}
//       {/* You can add any overlay elements here if needed */}
      
//       {/* Optional: Gradient overlay for better text readability */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'linear-gradient(rgba(2, 46, 105, 0), rgba(2, 46, 105, 0.1))', // Very subtle overlay
//           pointerEvents: 'none', // Allow clicks to pass through
//         }}
//       />
      
//       {/* Optional: Loading placeholder when image is loading */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           color: 'rgba(255, 255, 255, 0.5)',
//           fontSize: '14px',
//           fontWeight: 500,
//           display: 'none', // Show this only when image fails to load
//         }}
//       >
//         Loading illustration...
//       </Box>
//     </Box>

//     {/* Bottom 25% for the Content */}
//     <Box
//       sx={{
//         flex: '1', // 1/4 = 25% of the vertical space
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: 'var(--mui-palette-background-level1, #F8F9FA)',
//         p: { xs: 2, md: 3, lg: 4 },
//         minHeight: 0,
//       }}
//     >
//       <Stack 
//         spacing={2} 
//         sx={{ 
//           width: '100%', 
//           maxWidth: { md: '500px', lg: '600px', xl: '700px' }
//         }}
//       >
//         <Stack spacing={1}>
//           <Box sx={{ 
//             display: 'flex', 
//             alignItems: 'center', 
//             gap: '10px',
//             flexWrap: 'wrap',
//           }}>
//             <Typography 
//               className="f-24 fontw-700 font-helvetica"
//               sx={{
//                 fontSize: { md: '20px', lg: '24px' },
//                 fontWeight: 700,
//               }}
//             >
//               Welcome to
//             </Typography>
//             <DynamicLogo 
//               colorDark="light" 
//               colorLight="dark" 
//             />
//           </Box>
          
//           <Typography 
//             variant="h4" 
//             component="h1" 
//             sx={{ 
//               fontWeight: 'bold',
//               fontSize: { md: '1.75rem', lg: '2.125rem' },
//               lineHeight: 1.2,
//             }}
//           >
//             Where Construction Connects — From Quarry to Concrete
//           </Typography>
          
//           <Typography 
//             color="text.secondary" 
//             className="f-13 fontw-400"
//             sx={{
//               fontSize: { md: '12px', lg: '13px' },
//               lineHeight: 1.4,
//             }}
//           >
//             Super Admin access to vendors, brands, raw materials, logistics, and builders.
//           </Typography>
//         </Stack>
//       </Stack>
//     </Box>
//   </Box>

//   {/* Right Pane: Content Section (e.g., Login Form) */}
//   <Box
//     sx={{
//       boxShadow: 'var(--mui-shadows-8)',
//       display: 'flex',
//       flexDirection: 'column',
//       overflowY: 'auto',
//       bgcolor: 'white',
//     }}
//   >
//     <Box
//       sx={{
//         alignItems: 'center',
//         display: 'flex',
//         flexDirection: 'column',
//         flex: '1 1 auto',
//         justifyContent: 'center',
//         p: { xs: 3, md: 4 },
//       }}
//     >
//       <Box sx={{ 
//         maxWidth: '502px', 
//         width: '100%',
//         px: { xs: 1, md: 0 },
//       }}>
//         {children}
//       </Box>
//     </Box>
//   </Box>
// </Box>
 <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '60% 40%' },
        minHeight: '100%',
      }}
    >
      {/* <Box
        className="sign-up-bg-image"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'var(--mui-palette-background-level1)',
          display: { xs: 'none', lg: 'flex' },
          flexDirection: 'column',
          p: 3,
        }}
      >
        <Box></Box>
        <Stack spacing={2} sx={{ maxWidth: '700px' }}>
          <Stack spacing={1}>
            <Box className="d-flex gap-10">
              <Box mt={1}>
                <Typography variant="h5">Welcome to </Typography>
              </Box>
              <Box sx={{ display: 'inline-block', fontSize: 0 }}>
                <DynamicLogo colorDark="light" colorLight="dark" height={40} width={116} />
              </Box>
            </Box>
            <Typography color="text.secondary">
              Customisable space for adding photos and videos, to be controlled by Super Admin for what should be
              displayed here with a preview.
            </Typography>
            <Box sx={{ mt: '32px' }}>
              <Typography sx={{ color: 'text.primary', mt: '32px' }}>
                Join 6,000+ forward-thinking companies:
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box> */}
      <Box
  className="sign-up-bg-image"
  sx={{
    height: '100vh', // or any desired height
    display: { xs: 'none', lg: 'flex' },
    flexDirection: 'column',
    bgcolor: 'var(--mui-palette-background-level1)',
    p: 3,
  }}
>
  {/* 70% height box */}
    <Box
      className="leftimage-css"
    sx={{
    flex: 7,
    display: 'flex',
    position:"relative",
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    height: '100%', // Important: ensures it follows parent's flex height
  }}
  >
    <Box
      component="img"
      src={leftLogo}
      alt="Overlay"
      sx={{
        maxHeight: '100%',
        maxWidth: '100%',
        objectFit: 'contain',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        zIndex: 1,
        pointerEvents: 'none', // optional, if you want it to not block interaction
      }}
    />
  </Box>


  {/* 30% height box */}
  <Box
    sx={{
      flex: 3,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0, // Allows flex item to shrink below content size
      overflow: 'auto', // Handle content overflow gracefully
    }}
    className = "grey-background"
  >
    <Box sx={{
    pl: '3%',  // More padding on the left
    pt: '1%',
    pr: '1%',
    pb: '1%',
  }}>
    {/* Content container that adjusts to available space */}
    <Typography sx={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent:'left', 
            gap: '10px',
            flexWrap: 'wrap',
          }}>
            <Typography 
              className="f-20 fontw-700 font-helvetica"
              sx={{
                // fontSize: { md: '20px', lg: '24px' },
                fontWeight: 700,
              }}
            >
              Welcome to
            </Typography>
            <DynamicLogo 
              colorDark="light" 
              colorLight="dark"
              height={60}
              width={60} 
            />
          </Typography>
          
          <Typography 
          className="f-24 fontw-500 font-helvetica"
            // variant="h4" 
            // component="h1" 
            sx={{ 
              fontWeight: 'bold',
              // fontSize: { md: '1.75rem', lg: '2.125rem' },
              lineHeight: 1.2,
            }}
          >
            Where Construction Connects — From
          </Typography>
          <Typography 
          className="f-24 fontw-500 font-Inter"
            // variant="h4" 
            // component="h1" 
            sx={{ 
              fontWeight: 'bold',
              // fontSize: { md: '1.75rem', lg: '2.125rem' },
              lineHeight: 1.2,
            }}
          >
            Quarry to Concrete
          </Typography>
          
          <Typography 

            className="f-12 fontw-400 secondary-color"
            sx={{
              // fontSize: { md: '12px', lg: '13px' },
              mt: '2%',
              lineHeight: 1.4,
            }}
          >
            Super Admin access to vendors, brands, raw materials, logistics, and builders.
          </Typography>
      </Box>
      </Box>
</Box>
      <Box
        sx={{
          boxShadow: 'var(--mui-shadows-8)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            justifyContent: 'center',
            p: 3,
          }}
        >
          <Box sx={{ maxWidth: '502px', width: '100%' }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  


  );
}
export const paths = {
//   home: '/',
//   checkout: '/checkout',
//   contact: '/contact',
//   pricing: '/pricing',
//   // Add routes
//   brands: '/brands',
//   dealers: '/dealers',
//   builders: '/builders',
//   catalogue: '/catalogue',
//   suppliers: '/suppliers',

  auth: {
    signIn: 'auth/sign-in',
    signUp: '/sign-up',
    forgotPassword: '/auth/forgot-password',
    verifyOTP: '/auth/verify-otp',
    resetPassword: '/auth/reset-password',

    auth0: {
      callback: '/auth/auth0/callback',
      signIn: '/auth/auth0/sign-in',
      signUp: '/auth/auth0/sign-up',
      signOut: '/auth/auth0/sign-out',
      profile: '/auth/auth0/profile',
    },
    cognito: {
      signIn: '/auth/cognito/sign-in',
      signUp: '/auth/cognito/sign-up',
      signUpConfirm: '/auth/cognito/sign-up-confirm',
      newPasswordRequired: '/auth/cognito/new-password-required',
      resetPassword: '/auth/cognito/reset-password',
      updatePassword: '/auth/cognito/update-password',
    },
    firebase: {
      signIn: '/auth/firebase/sign-in',
      signUp: '/auth/firebase/sign-up',
      resetPassword: '/auth/firebase/reset-password',
      recoveryLinkSent: '/auth/firebase/recovery-link-sent',
      updatePassword: '/auth/firebase/update-password',
    },
    supabase: {
      callback: { implicit: '/auth/supabase/callback/implicit', pkce: '/auth/supabase/callback/pkce' },
      signIn: '/auth/supabase/sign-in',
      signUp: '/auth/supabase/sign-up',
      signUpConfirm: '/auth/supabase/sign-up-confirm',
      resetPassword: '/auth/supabase/reset-password',
      recoveryLinkSent: '/auth/supabase/recovery-link-sent',
      updatePassword: '/auth/supabase/update-password',
    },
    samples: {
      signIn: { centered: '/auth/samples/sign-in/centered', split: '/auth/samples/sign-in/split' },
      signUp: { centered: '/auth/samples/sign-up/centered', split: '/auth/samples/sign-up/split' },
      updatePassword: {
        centered: '/auth/samples/update-password/centered',
        split: '/auth/samples/update-password/split',
      },
      resetPassword: { centered: '/auth/samples/reset-password/centered', split: '/auth/samples/reset-password/split' },
      verifyCode: { centered: '/auth/samples/verify-code/centered', split: '/auth/samples/verify-code/split' },
    },
  },
  dashboard: {
    settings: {

      userManagement: '/settings/user-management',

    },
}
};

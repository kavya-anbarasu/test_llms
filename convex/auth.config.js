const config = {
  providers: [
    {
      // Configure CLERK_JWT_ISSUER_DOMAIN on the Convex Dashboard
      // See https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances
      // name should be: CLERK_JWT_ISSUER_DOMAIN, value should be found in .env.local (NEXT_PUBLIC_CONVEX_URL)
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ],
};

export default config;

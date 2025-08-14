import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_POSTHOG_KEY: "phc_tM9b0mbSuZBNReaknyMXV75BwYmRJmo7QsNY296oH7w",
    NEXT_PUBLIC_POSTHOG_HOST: "https://us.i.posthog.com",
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        // Proxy static pages
        {
          source: "/ai-prompt-testing",
          destination: "/ai-prompt-testing.html",
        },
        {
          source: "/privacy",
          destination: "/privacy.html",
        },
        {
          source: "/terms",
          destination: "/terms.html",
        },

        // Test
        {
          source: "/studio",
          destination: "https://gusarov.studio",
        },

        // Reverse-Proxy DataFast
        {
          source: "/replay-xF5c/script.js",
          destination: "https://datafa.st/js/script.js",
        },
        {
          source: "/replay-xF5c/events",
          destination: "https://datafa.st/api/events",
        },
      ],
    };
  },
  async redirects() {
    return [
      // Redirect old landing page to root
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
    ];
  },
  trailingSlash: false,
};

export default nextConfig;

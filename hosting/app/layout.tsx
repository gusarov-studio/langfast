import Script from "next/script";
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LangFast - Prompt Playground',
  icons: {
    icon: '/assets/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* DataFast */}
        <Script
          data-website-id="68650ba6dc6c810679eb701b"
          data-domain="langfa.st"
          src="/replay-xF5c/script.js"
          strategy="afterInteractive"
        />
      </head>

      <body>
        <div id="lisapet">
          {children}
        </div>

        {/* Tawk.to */}
        <Script strategy="lazyOnload">
          {`
            var Tawk_API = Tawk_API || { }, Tawk_LoadStart = new Date();
            (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/68505fcf1c5a261911682741/1itsvch48';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ischys Wellness",
  description:
    "Ischys Wellness offers compassionate mental health care, therapy, and counseling for individuals, teens, and families in a safe, inclusive environment.",
  keywords: [
    "mental health",
    "therapy",
    "counseling",
    "wellness",
    "anxiety",
    "depression",
    "teens",
    "families",
    "inclusive care",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Ischys Wellness",
    description:
      "Ischys Wellness offers compassionate mental health care, therapy, and counseling for individuals, teens, and families. Our experienced team provides support for anxiety, depression, and emotional well-being in a safe, inclusive environment.",
    url: "https://www.yoursite.com/",
    siteName: "Ischys Wellness",
    images: [
      {
        url: "https://www.yoursite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ischys Wellness Clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ischys Wellness",
    description:
      "Ischys Wellness offers compassionate mental health care, therapy, and counseling for individuals, teens, and families. Our experienced team provides support for anxiety, depression, and emotional well-being in a safe, inclusive environment.",
    images: ["https://www.yoursite.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.yoursite.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5G3JWTSK');
          `}
        </Script>

        {/* Meta Description for SEO removed (handled by Next.js metadata API) */}
        {/* SEO Meta Tags */}
        <meta name="keywords" content="mental health, therapy, counseling, wellness, anxiety, depression, teens, families, inclusive care" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yoursite.com/" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Ischys Wellness" />
        <meta property="og:description" content="Ischys Wellness offers compassionate mental health care, therapy, and counseling for individuals, teens, and families. Our experienced team provides support for anxiety, depression, and emotional well-being in a safe, inclusive environment." />
        <meta property="og:url" content="https://www.yoursite.com/" />
        <meta property="og:site_name" content="Ischys Wellness" />
        <meta property="og:image" content="https://www.yoursite.com/og-image.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ischys Wellness" />
        <meta name="twitter:description" content="Ischys Wellness offers compassionate mental health care, therapy, and counseling for individuals, teens, and families. Our experienced team provides support for anxiety, depression, and emotional well-being in a safe, inclusive environment." />
        <meta name="twitter:image" content="https://www.yoursite.com/twitter-image.jpg" />
          {/*End Google Tag Manager*/}

        {/* Favicon */}
        <link rel="icon" href="/logo.png" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6HBHJQC385"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6HBHJQC385');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5G3JWTSK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
                  {/* Google Ads (AW-17549617803) */}
                  <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17549617803"
                    strategy="afterInteractive"
                  />
                  <Script id="aw-init" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'AW-17549617803');
                    `}
                  </Script>
        {/* End Google Tag Manager (noscript) */}

        <Script src="//code.tidio.co/epnjvabie0mjl8vkuqgtcz8zgmbjzfr1.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}

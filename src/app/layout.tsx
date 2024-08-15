import type { Metadata, Viewport } from "next";
// import { SpeedInsights } from "@vercel/speed-insights/next"
// import { Analytics } from "@vercel/analytics/next"
// import { ToastContainer } from "react-toastify"

import Provider from "@/context/provider";
import Layout from "@/components/layout";

import "./globals.css";
// import "react-toastify/dist/ReactToastify.css"

const APP_NAME = "Interview Task";
const APP_DEFAULT_TITLE = "interview submission task";
const APP_TITLE_TEMPLATE = "%s - App";
const APP_DESCRIPTION = "Waterloo co op interview submission task";
const APP_IMAGE_URL =
  "https://waterloo-co-op-interview-submission-task.vercel.app/about.png";
const APP_URL = "https://waterloo-co-op-interview-submission-task.vercel.app/";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DEFAULT_TITLE,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    startupImage: [APP_IMAGE_URL],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: APP_URL,
    images: [
      {
        url: APP_IMAGE_URL,
        width: 1240,
        height: 600,
        alt: "Demo Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: APP_IMAGE_URL,
        alt: "Demo Image",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Layout>{children}</Layout>
          {/* <ToastContainer theme="dark" style={{ zIndex: "100" }} /> */}
        </Provider>
        {/* <SpeedInsights />
        <Analytics /> */}
      </body>
    </html>
  );
}

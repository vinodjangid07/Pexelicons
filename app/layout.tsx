import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0c0d0e",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://pexelicons.vinodjangid.site"
  ),
  title: {
    default: "Pexelicons | Custom Windows Folder Icons",
    template: "%s | Pexelicons",
  },
  description:
    "A free collection of 30 custom 32-bit Windows folder icons in saturated honey yellow and royal purple colorways. Multi-resolution ICO files crafted for Windows 10 and 11.",
  keywords: [
    "Pexelicons",
    "Windows folder icons",
    "custom folder icons",
    "ICO files",
    "Windows 11 icons",
    "Windows 10 icons",
    "custom icons",
    "desktop customization",
    "yellow folder icons",
    "purple folder icons",
    "free ICO download",
    "Vinod Jangid",
  ],
  authors: [{ name: "Vinod Jangid", url: "https://github.com/vinodjangid07" }],
  creator: "Vinod Jangid",
  publisher: "Vinod Jangid",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/brand/favicon.png", type: "image/png" },
      { url: "/brand/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/brand/favicon.png" }],
  },
  openGraph: {
    title: "Pexelicons | Custom Windows Folder Icons",
    description:
      "A free collection of 30 custom 32-bit Windows folder icons in saturated honey yellow and royal purple colorways. Download free ICO files for Windows 10 and 11.",
    url: "https://pexelicons.vinodjangid.site",
    siteName: "Pexelicons",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pexelicons - Custom Windows Folder Icons by Vinod Jangid",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pexelicons | Custom Windows Folder Icons",
    description:
      "A free collection of 30 custom 32-bit Windows folder icons in saturated honey yellow and royal purple colorways.",
    images: ["/og-image.jpg"],
    creator: "@vinodjangid07",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

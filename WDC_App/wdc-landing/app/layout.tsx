import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WDC — WebDevConstruct | Your Tech Consultant",
  description:
    "WebDevConstruct builds custom, solution-oriented applications for enterprises and growing businesses. We turn strategic goals into measurable results.",
  keywords: ["custom applications", "business software", "tech consultant", "SME solutions", "enterprise apps"],
  openGraph: {
    title: "WDC — WebDevConstruct",
    description: "Your Tech Consultant. Built for results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

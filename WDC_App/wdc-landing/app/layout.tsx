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
 
      <body>{children}</body>
    </html>
  );
}

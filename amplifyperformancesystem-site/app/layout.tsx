import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amplify Performance System",
  description:
    "Build the athlete. Build the mind. Build the human. Amplify Potential. Amplify Life."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}

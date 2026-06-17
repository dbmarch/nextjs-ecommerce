import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "@/assets/styles/globals.css";
import { cn } from "@/lib/utils";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "../lib/constants";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | Prostore`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        inter.className,
        "font-sans",
        roboto.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

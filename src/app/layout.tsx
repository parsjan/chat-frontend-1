import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/components/theme-provider";
import ChatSupport from "@/components/chat/chat-support";

export const metadata: Metadata = {
  title: "Medecro Chat",
  description: "Chat/message components for Shadcn",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const layout = cookies().get("react-resizable-panels:layout");
  // const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main className="">
            <div className="">{children}</div>

            {/* Chat support component */}
            <ChatSupport />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

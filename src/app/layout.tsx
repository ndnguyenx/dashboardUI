import { Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
import { Metadata } from 'next';

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500"
});
export const metadata: Metadata = {
  title: "My dashboard",
  description: "NextJs admin dashboard"
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className + ' h-screen overflow-hidden'}>
          {children}
      </body>
    </html>
  )
}

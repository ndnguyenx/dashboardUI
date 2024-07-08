import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400" // Hoặc trọng lượng bạn cần cho login
});

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={roboto.className}>
      {children}
    </div>
  );
}
import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Adventra',
  description: 'Connect with like-minded adventurer seekers',
  image: '/vercel.svg',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="min-h-screen">
            <Navbar />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

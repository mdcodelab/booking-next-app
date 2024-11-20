import { Inter } from 'next/font/google';
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/context/authContext';
import Header from './(components)/Header';
import Footer from './(components)/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bookit App | Book a Room',
  description: 'Book a meeting or conference room for your team',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <AuthProvider>
        <>
          <body className={inter.className}>
            <ToastContainer position="top-center"/>
            <Header />
            <main className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
              {children}
            </main>
            <Footer />
          </body>
        </>
      </AuthProvider>
    </html>
  );
}

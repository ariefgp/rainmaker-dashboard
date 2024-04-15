import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./components/auth/AuthContext";
import TopBar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-grow">
              <TopBar />
              <main className="flex-grow p-4">
                {children}
              </main>
            </div>
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/Toaster";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Anime Blogs",
  description:
    "Anime Blogs a blog posting platform, here you can and read blogs about anime and manga, anime reviews, manga reviews, anime characters, manga characters, with many differect genres",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <Providers>
          <Navbar />

          <div>{children}</div>
          {authModal}

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import { ModeToggle } from "@app/components/theme/mode-toggle";
import { Button } from "@app/components/ui/button";
import { Home } from "lucide-react";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "FollowDiff",
    description: "A free tool that generates a list of who doesn't follow back and who you don't follow back on Instagram. Upload your information zip file to get started.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="fixed top-2 right-2 flex gap-x-2">
                        <a href="/">
                            <Button variant="outline" size="icon">
                                <Home className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:scale-100" />
                            </Button>
                        </a>

                        <ModeToggle />
                    </div>

                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

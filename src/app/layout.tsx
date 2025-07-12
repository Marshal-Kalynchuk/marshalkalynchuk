import { EB_Garamond } from "next/font/google";
import "./globals.css";
import LiveDate from "@/components/LiveDate";
import { Divider } from "@/components/ui/divider";
import { Navbar } from "@/components/ui/navbar";
import { Link } from "@/components/ui/link";
import { SocialIcon } from "react-social-icons";
import { Memloop } from "@/components/ui/memloop";
import { ThemeProvider } from "next-themes";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Navigation } from "@/components/Navigation";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serverDate = new Date();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${garamond.variable} antialiased`}>
        <ThemeProvider attribute="class">
          <div className="bg-stone-100 dark:bg-stone-900 flex flex-col items-center min-h-screen font-serif font-[family-name:var(--font-garamond)]">
            <header className="w-full max-w-7xl px-4">
              <Navbar>
                <LiveDate serverDate={serverDate.toISOString()} />
                <Divider />
                <Navigation />
                <Divider />
                <ThemeSwitcher />
              </Navbar>
            </header>
            <main className="flex flex-col gap-8 grow px-6 py-4 sm:py-8 w-full">
              {children}
            </main>
            <footer className="flex flex-col items-center justify-center space-y-2 mb-2">
              <div  className="flex gap-4 justify-center">
                <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.linkedin.com/in/marshal-kalynchuk-328398236" className="text-stone-400 hover:text-stone-950 dark:text-stone-400 dark:hover:text-white" fgColor="currentColor" bgColor="transparent" />
                <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.instagram.com/marshal_kalynchuk/" className="text-stone-400 hover:text-stone-950 dark:text-stone-400 dark:hover:text-white" fgColor="currentColor" bgColor="transparent" />
                <SocialIcon target="_blank" rel="noopener noreferrer" url="https://github.com/marshal-kalynchuk" className="text-stone-400 hover:text-stone-950 dark:text-stone-400 dark:hover:text-white" fgColor="currentColor" bgColor="transparent" />
                <Link target="_blank" rel="noopener noreferrer" href="https://www.memloop.ai" className="ml-2 flex items-center justify-center">
                  <Memloop className="w-7 h-7 text-stone-400 hover:text-stone-950 dark:text-stone-400 dark:hover:text-white" />
                </Link>
              </div>
              <div>
                <span className="text-sm text-stone-600 dark:text-stone-400">&copy; {new Date().getFullYear()} Marshal Kalynchuk</span>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

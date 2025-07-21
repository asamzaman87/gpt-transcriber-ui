import { ThemeContextProvider } from "@/components/context/theme-context";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>GPT Transcriber: Free AI Speech to Text with ChatGPT Transcription</title>
        <meta
          name="description"
          content="Bring ChatGPT’s natural AI trancription to your audio—instantly transcribe and download high-quality text for free"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph tags */}
        <meta property="og:title" content="GPT Transcriber: Free AI Speech to Text with ChatGPT Transcription" />
        <meta property="og:description" content="Bring ChatGPT’s natural AI trancription to your audio—instantly transcribe and download high-quality text for free" />
        <meta property="og:url" content="https://www.gpt-transcriber.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/social-preview.png" />

        {/* Favicon & Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" type="image/png" sizes="48x48" />
      </head>
      <body suppressHydrationWarning className={inter.className}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}

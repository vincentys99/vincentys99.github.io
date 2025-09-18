import "./globals.css";

export const metadata = {
  title: "Yun Shen's Portfolio",
  description: "A simple introduction about myself.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

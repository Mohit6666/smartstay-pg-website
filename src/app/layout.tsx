import "./globals.css";

export const metadata = {
  title: "Smart Stay PG/Rooms",
  description: "Smart Stay PG - Affordable PG & Rooms near Chandigarh, Mohali & Kharar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

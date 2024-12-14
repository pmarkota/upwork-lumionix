import "./globals.css";
import ClientLayout from "../components/ClientLayout";

export const metadata = {
  title: "Lumionix - KOMET Camera Trigger",
  description: "A camera trigger redefined - KOMET by Lumionix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

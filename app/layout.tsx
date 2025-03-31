import type { Metadata } from "next";
import "./globals.css";
import styles from "./styles/page.module.scss";




export const metadata: Metadata = {
  title: "Arteludovica",
  description: "Sitio de la Compañía teatral Arteludovica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.background}>
        {children}
      </body>
    </html>
  );
}

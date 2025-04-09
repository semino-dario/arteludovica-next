"use client";

import { usePathname } from "next/navigation";
import styles from "../styles/page.module.scss";

export default function Body({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const bodyClassName =
    pathname === "/musica-de-oficinas" ? styles.backgroundMDO : styles.background;

  return <body className={bodyClassName}>{children}</body>;
}
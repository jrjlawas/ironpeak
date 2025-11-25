import type { Metadata } from "next";
import "@/public/styles/style.scss";
import InitAnimations from "@/components/layout/InitAnimations";

export const metadata: Metadata = {
  title:
    "IronPeak Technology | Software Development, IT Solutions & Consultancy",
  description: "Software Development, IT Solutions & Consultancy",
  keywords: [
    "Software",
    "IT",
    "Agency",
    "Isabel, Leyte",
    "IT Consultancy",
    "Leyte",
    "Ormoc",
  ],
  authors: [
    {
      name: "jrlawas",
      url: "",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <InitAnimations />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { inter, unbounded } from "@/fonts";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ProvidersWrapper from "@/providers/ProvidersWrapper";
import { RootContainer, PageContainer, Main } from "@/components/composition";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Page - Fauget",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${unbounded.variable}`}>
      <body className="font-inter overflow-hidden">
        <RootContainer>
          <ProvidersWrapper>
            <Sidebar />
            <PageContainer>
              <Header />
              <Main>{children}</Main>
            </PageContainer>
          </ProvidersWrapper>
        </RootContainer>
      </body>
    </html>
  );
}

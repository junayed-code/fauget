import type { Metadata } from "next";
import { inter, unbounded } from "@/fonts";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ProvidersWrapper from "@/providers/ProvidersWrapper";
import { PageContainer, Main, RootContainer } from "@/components/composition";
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
      <body className="font-inter bg-[var(--color-black-800)] text-slate-100">
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

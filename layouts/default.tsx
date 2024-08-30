import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-6 items-center">
        {children}
      </main>
      <footer className="w-full flex items-center justify-end py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href=""
          title="nextui.org homepage"
        >
          <p className="text-secondary underline font-medium">Made by @socramdavid</p>&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
      </footer>
    </div>
  );
}

import FooterAdmin from "@/components/Footers/FooterAdmin";
import HeaderStats from "@/components/Headers/HeaderStats";
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Sidebar />
          <div className="relative md:ml-64 bg-blueGray-100">
            <AdminNavbar />
            {/* Header */}
            <HeaderStats />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              {children}
              <FooterAdmin />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

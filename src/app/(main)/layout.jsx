"use client";
import Footer from "../components/footer";
import ComplexNavbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="bg-gradient-to-r from-black to-purple-500 via-black via-[100%]">
      <div className="p-4">
        <ComplexNavbar />
      </div>
      {children}
      <div>
        <Footer/>
      </div>
    </div>
  );
}

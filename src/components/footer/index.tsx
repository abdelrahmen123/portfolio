import React from "react";

function Footer() {
  return (
    <footer className="mt-20 h-32 flex items-center justify-center border-t border-border py-6 bg-linear-to-r from-sky-700 to-cyan-600 text-white text-center text-sm">
      <p>
        جميع الحقوق محفوظة عبد الرحمن أحمد &copy; {new Date().getFullYear()}{" "}
      </p>
    </footer>
  );
}

export default Footer;

import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>© {year} какой-то текст</span>
    </footer>
  );
}

export default Footer;

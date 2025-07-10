import Link from "next/link";
import "doodle.css/doodle.css";
import "./globals.css";
3;
// metadata name required
export const metadata = {
  title: "Note Passer",
  description: "Example App",
};

// just need to be default exported
export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="doodle">
        <nav>
          <h1>
            <Link href="/">Note Passer</Link>
          </h1>
        </nav>
        {children}
      </body>
    </html>
  );
}

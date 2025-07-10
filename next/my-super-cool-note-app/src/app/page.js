import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/my">My Notes</Link>
          <Link href="/write">Write a Note</Link>
          <Link href="/teacher">Secret Teacher Feed</Link>
          <Link href="/who-am-i">Who am I?!</Link>
        </li>
      </ul>
    </div>
  );
}

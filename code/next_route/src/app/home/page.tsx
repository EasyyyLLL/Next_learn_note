import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">First</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul>
  );
}

export default Home;

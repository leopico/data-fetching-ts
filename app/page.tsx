import Link from "next/link"

export default function Home() {
  return (
    <main className="text-center p-24">
      <h1>Home Page</h1>
      <p>
        <Link href="/users">Go to Users page</Link>
      </p>
    </main>
  )
}

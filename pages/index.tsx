import Link from 'next/link'

export default function Home() {
  return (
    <div>
      Hello World. This is my blog <Link href="/about">About</Link>
    </div>
  )
}

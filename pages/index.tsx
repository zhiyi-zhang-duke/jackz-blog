import Link from 'next/link'

export default function Home() {
  return (
    <div>
      Hello Jack's World. This is his blog <Link href="/about">About</Link>
      <div>
        Hopefully he doesn't need to deploy too many more times after this
      </div>      
    </div>
  )
}

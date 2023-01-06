import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h3 className='text-2x1 font-semibold'> Hello World from Dawood!</h3>
      <br/>
       <Link href="/name">Go to name page</Link>
    </div>
  )
}

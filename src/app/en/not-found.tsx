import Link from 'next/link'
export default function NotFound() {
  return (
    <main
      id="conteudo"
      style={{ maxWidth: 760, margin: 'auto', padding: '8rem 2rem' }}
    >
      <p className="eyebrow">404 / page not found</p>
      <h1>This path is not on the map yet.</h1>
      <p>
        <Link href="/en">Back to home</Link>
      </p>
    </main>
  )
}

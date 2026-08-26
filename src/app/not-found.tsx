import Link from 'next/link'
export default function NotFound() { return <main style={{ maxWidth: 760, margin: 'auto', padding: '8rem 2rem' }}><p className="eyebrow">404 / caminho não encontrado</p><h1>Esse caminho ainda não está no mapa.</h1><p><Link href="/">Voltar para a home</Link></p></main> }

import { ImageResponse } from 'next/og'
export const alt = 'Luis Fellype Botelho | Desenvolvedor Full-Stack'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function OpenGraphImage() { return new ImageResponse(<div style={{ background: '#0D120F', color: '#F3F0E8', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, fontFamily: 'sans-serif' }}><div style={{ color: '#D97852', fontSize: 24 }}>LUIS BOTELHO / FULL-STACK</div><div style={{ fontSize: 72, lineHeight: 1, marginTop: 24 }}>Construo produtos digitais para problemas reais.</div><div style={{ color: '#A9B2AA', fontSize: 28, marginTop: 32 }}>Angra dos Reis, RJ / Brasil</div></div>, { ...size }) }

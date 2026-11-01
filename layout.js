import './globals.css'

export const metadata = {
  title: 'Maung Coffee - Premium Roastery',
  description: 'Nikmati kopi terbaik dengan suasana cyber-modern.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
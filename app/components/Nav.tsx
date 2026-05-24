'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-[var(--color-border)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-display)] text-sm font-medium tracking-tight"
        >
          NoZak Labs
        </a>
        <nav className="flex items-center gap-6">
          {[
            { label: 'Capabilities', href: '#capabilities' },
            { label: 'Work', href: '#work' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs text-[var(--color-text-dim)] hover:text-[var(--color-text)] transition"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

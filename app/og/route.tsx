import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export async function GET() {
  const fontData = await readFile(
    join(process.cwd(), 'assets/SpaceGrotesk-Medium.woff')
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: '"Space Grotesk"',
        }}
      >
        {/* Eyebrow — top-left */}
        <div style={{ display: 'flex', color: '#6b6b6b', fontSize: 24 }}>
          NoZak Labs · Cairo
        </div>

        {/* Primary content — vertically centered by space-between */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#ededed',
              fontSize: 88,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            <span>Operational systems,</span>
            <span>engineered.</span>
          </div>
          <div
            style={{
              display: 'flex',
              color: '#a0a0a0',
              fontSize: 32,
              marginTop: 32,
            }}
          >
            Automation · AI integration · Pega
          </div>
        </div>

        {/* URL — bottom-right */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ color: '#6b6b6b', fontSize: 24 }}>
            nozaklabs.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Space Grotesk',
          data: fontData,
          weight: 500,
          style: 'normal',
        },
      ],
    }
  )
}

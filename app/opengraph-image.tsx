import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'Remainders - Life Calendar & Year Calendar Wallpaper Generator';
export const size = {
  width: 1200,
  height: 630,
};
 
export const contentType = 'image/png';
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          fontFamily: 'system-ui',
        }}
      >
        {/* Logo/Title */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 300,
            color: 'white',
            letterSpacing: '0.2em',
            marginBottom: 30,
          }}
        >
          REMAINDERS
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: '#888',
            letterSpacing: '0.3em',
            marginBottom: 60,
          }}
        >
          MEMENTO MORI
        </div>

        {/* Main Message */}
        <div
          style={{
            fontSize: 42,
            fontWeight: 500,
            color: 'white',
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.4,
            marginBottom: 40,
          }}
        >
          Life Calendar & Year Calendar Wallpaper Generator
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 28,
            color: '#aaa',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          Visualize your life as 4,160 weeks. Free tool for mindful, intentional living.
        </div>

        {/* Visual Element - Simple Week Grid */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            marginTop: 50,
          }}
        >
          {[...Array(52)].map((_, i) => (
            <div
              key={i}
              style={{
                width: 4,
                height: 40,
                background: i < 26 ? 'white' : i === 26 ? '#FF6B35' : '#404040',
                borderRadius: 1,
              }}
            />
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: 20,
            color: '#666',
            marginTop: 40,
            letterSpacing: '0.1em',
          }}
        >
          remainders.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

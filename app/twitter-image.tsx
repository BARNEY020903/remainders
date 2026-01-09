import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'Remainders - Life Calendar Wallpaper Generator';
export const size = {
  width: 1200,
  height: 675,
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
        <div
          style={{
            fontSize: 72,
            fontWeight: 300,
            color: 'white',
            letterSpacing: '0.2em',
            marginBottom: 20,
          }}
        >
          REMAINDERS
        </div>
        
        <div
          style={{
            fontSize: 22,
            color: '#888',
            letterSpacing: '0.3em',
            marginBottom: 50,
          }}
        >
          MEMENTO MORI
        </div>

        <div
          style={{
            fontSize: 38,
            fontWeight: 500,
            color: 'white',
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Visualize your life as 4,160 weeks
        </div>

        <div
          style={{
            display: 'flex',
            gap: 6,
            marginTop: 45,
          }}
        >
          {[...Array(52)].map((_, i) => (
            <div
              key={i}
              style={{
                width: 3,
                height: 35,
                background: i < 26 ? 'white' : i === 26 ? '#FF6B35' : '#404040',
                borderRadius: 1,
              }}
            />
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3E66FC 0%, #986AFE 100%)',
          color: 'white',
          fontSize: 18,
          fontWeight: 800,
          fontFamily: 'sans-serif',
          borderRadius: 10,
        }}
      >
        DB
      </div>
    ),
    size,
  );
}

import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import { ReactComponent as LetterboxdIcon } from '../assets/letterboxd-logo.svg';

export default function Expose() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        background: '#d2f5bc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          color: '#963F2E',
          fontWeight: 700,
          marginBottom: '2vw',
          fontSize: '3vw',
          letterSpacing: 2,
          textAlign: 'center',
        }}
      >
        Exposé
      </h1>
      <div
        style={{
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '60vw',
          width: '100%',
          aspectRatio: '16/9',
          overflow: 'hidden',
        }}
      >
        <img
          src="/jinmuwon.jpg"
          alt="Jin Mu Won"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 0,
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
      <Box
        sx={{
          background: '#f8f4b2',
          color: '#963F2E',
          borderRadius: '14px',
          boxShadow: '0 2px 8px #0001',
          mt: '2vw',
          p: '1.2vw 2vw',
          fontFamily: 'Fira Code, monospace',
          fontSize: '1.3vw',
          fontWeight: 500,
          letterSpacing: 1,
          textAlign: 'center',
          maxWidth: '32vw',
        }}
      >
        ValorantId :- NorthernBladeSid#solo
      </Box>
      
      <Box
        sx={{
          mt: '4vw',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2vw'
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#963F2E',
            fontWeight: 700,
            fontSize: '1.5vw',
            letterSpacing: 2,
            textAlign: 'center'
          }}
        >
          My Letterboxd Top 4
        </Typography>
        
        <Grid container spacing={2} sx={{ width: '100%' }}>
          {[
            {
              title: 'Apocalypse Now',
              year: '1979',
              poster: 'https://i.pinimg.com/736x/51/95/36/519536d3960ec5d289a4a52525438035.jpg'
            },
            {
              title: 'Interstellar',
              year: '2014',
              poster: 'https://i.pinimg.com/736x/ac/d4/f9/acd4f9d7a94b35391a2906edd27be4b3.jpg'
            },
            {
              title: 'Youve Got Mail',
              year: '1998',
              poster: 'https://i.pinimg.com/736x/78/3d/3b/783d3b36134c54ad43c81ae8144ded5f.jpg'
            },
            {
              title: 'Its A Wonderful Life',
              year: '1946',
              poster: 'https://i.pinimg.com/736x/8a/b6/1e/8ab61ef423f15a8fcebc256f488c3769.jpg'
            }
          ].map((movie, index) => (
            <Grid item xs={6} key={index}>
              <Box
                sx={{
                  background: '#f8f4b2',
                  color: '#963F2E',
                  borderRadius: '14px',
                  boxShadow: '0 2px 8px #0001',
                  p: '1vw 1.5vw',
                  fontFamily: 'Fira Code, monospace',
                  fontSize: '1.5vw',
                  fontWeight: 500,
                  letterSpacing: 1,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5vw'
                }}
              >
                {movie.poster && (
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    style={{
                      width: '100%',
                      height: '320px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      marginBottom: '1vw'
                    }}
                  />
                )}
                <Typography variant="body1">{movie.title}</Typography>
                <Typography variant="caption" sx={{ color: '#56694F' }}>{movie.year}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: '2vw',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5vw'
          }}
        >
          <LetterboxdIcon style={{ width: '144px', height: '144px' }} />
          <Typography
            variant="body2"
            sx={{
              color: '#963F2E',
              fontFamily: 'Fira Code, monospace',
              fontSize: '1.3vw',
              fontWeight: 500,
              letterSpacing: 1
            }}
          >
            @Sidyaa__10
          </Typography>
        </Box>
      </Box>
    </div>
  );
} 
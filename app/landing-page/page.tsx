'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { Box, Button, Stack, Typography } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import MuiLink from '@mui/material/Link';
import { alpha } from '@mui/material/styles';

const LandingPage: NextPage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        overflowX: 'hidden',
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Box
        component="main"
        sx={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          width: '100%',
          minHeight: { xs: 'calc(100vh - 72px)', md: 'calc(100vh - 88px)' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'stretch' },
        }}
      >
        <Box
          sx={{
            flex: { xs: '0 0 auto', md: '1 1 35%' },
            width: { xs: '100%', md: '35%' },
            position: 'relative',
            minHeight: { xs: 240, md: '100%' },
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src="/logo.jpeg"
            alt="Khmer Statuary Project Logo"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'left center',
            }}
          />
        </Box>
        <Box
          sx={{
            flex: { xs: '0 0 auto', md: '1 1 65%' },
            width: { xs: '100%', md: '65%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 3, md: 4 },
            py: { xs: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: 760,
              borderRadius: 5,
              px: { xs: 3, md: 5 },
              py: { xs: 3, md: 5 },
              boxShadow: '0 32px 90px rgba(15,23,42,0.35)',
              backgroundColor: 'background.paper',
            }}
          >
            <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }} textAlign={{ xs: 'center', md: 'left' }}>
              <Box
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'common.white',
                  px: 2.5,
                  py: 0.75,
                  borderRadius: 9999,
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: 0.8,
                }}
              >
                Introduction
              </Box>
              <Typography variant="h6" color="text.primary">
                The Khmer Statuary Project (KSP) database and search engine is an initiative of the Statuary Projects.
                It is designed to expand our understanding of Khmer objects around the world, helping us see where they
                came from, whose hands they&apos;ve passed through, and how people have engaged with them through time.
                People, from local community members to visitors, art dealers and museum representatives to
                creatives—and now maybe you—have taken photographs of these objects for centuries.
              </Typography>
              <Typography variant="h6" color="text.primary">
                Interested in seeing if there are other photos of a particular statue? Upload a photo of a statue and
                search for other photos of it in the KSP&apos;s database. Our trained image recognition model will
                return possible matches for your photo. You can add your photo and its corresponding information to our
                growing database, either as a new statue or as an additional image for a statue already documented. Our
                team will review and confirm
                your submission.
              </Typography>
              <Typography variant="h6" color="text.primary">
                Visit{' '}
                <MuiLink
                  href="https://statuaryproject.org"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  our website
                </MuiLink>{' '}
                to read more about this tool and the KSP&apos;s companion projects.
              </Typography>
              <Button variant="contained" size="large" component={Link} href="/upload" endIcon={<CloudUpload />}>
                Contribute to the Database
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        component="footer"
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 4,
          px: { xs: 2, md: 4 },
          backgroundColor: (theme) => alpha(theme.palette.grey[100], 0.85),
          borderTop: (theme) => `1px solid ${alpha(theme.palette.divider, 0.6)}`,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Contact Us: <MuiLink href="mailto:statuaryproject@gmail.com">statuaryproject@gmail.com</MuiLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;

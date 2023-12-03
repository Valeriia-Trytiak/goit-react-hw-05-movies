import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link } from './SharedHeader.styled';
// import Background from 'components/Background/Background';
import { GradientBackground } from 'gradient-background';

export const SharedHeader = () => {
  return (
    <Container>
      {/* <Background /> */}
      <GradientBackground color="secondary" />
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

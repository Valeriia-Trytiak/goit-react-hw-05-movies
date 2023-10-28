import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedHeader.styled";

export const SharedHeader = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

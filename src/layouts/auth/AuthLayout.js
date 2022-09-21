import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Container from "../container/Container";

function AuthLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default AuthLayout;

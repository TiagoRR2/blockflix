import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Header from "components/Header";
import Container from "components/Container";
import Cart from "pages/Cart";
import Home from "pages/Home";
import Login from "pages/Login";
import MovieDetails from "pages/MovieDetails";
import Page404 from "pages/Page404";
import Register from "pages/Register";
import User from "pages/User";
import { CartProvider } from "common/context/Cart";
import { UserProvider, useUserContext } from "common/context/User";


export default function Routes() {
  const {isLoggedIn} = useUserContext();
  
  return (
    <Router>
      <UserProvider>
        <Header />

        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/movie/:id">
              <MovieDetails />
            </Route>

            <Route path="/register">
              { isLoggedIn ? <Redirect to="/user" /> : <Register /> }
            </Route>

            <Route path="/login">
              { isLoggedIn ? <Redirect to="/user" /> : <Login /> }
            </Route>

            <CartProvider>
              <Route path="/user">
                { isLoggedIn ? <User /> : <Redirect to="/login" />}
              </Route>

              <Route path="/cart">
                { isLoggedIn ? <Cart /> : <Redirect to="/login" />}
              </Route>
            </CartProvider>

            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </Container>
      </UserProvider>
    </Router>
  );
}

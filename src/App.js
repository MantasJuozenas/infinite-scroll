import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import { GlobalStyles } from './globalStyles.styled';
import Header from './components/Header/Header';
import FavouritedPage from './pages/FavouritedPage/FavouritedPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Header active="all" />
          <MainPage />
        </Route>
        <Route path="/favourited">
          <Header active="favourited" />
          <FavouritedPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;

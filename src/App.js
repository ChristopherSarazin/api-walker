import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchForm from './compenents/SearchForm';
import Display from './compenents/Display';



function App() {
  return (
    <BrowserRouter>
      <div className="App container-fluid">

        <h1>Hello ApiWalker</h1>
        <a href="/">Home</a>
        <SearchForm></SearchForm>
        <Switch>
          <Route exact path="/:category/:id">
            <Display></Display>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

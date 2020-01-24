import React from "react";
import Header from "./components/Header.js";
import "./index.css";
import { Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <nav>
        <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
        <Link to='/search'>Search</Link>
        </div>
      </nav>
      <Route exact path='/' compontent={WelcomePage} />
      <Route exact path='/characters' component={CharacterList} />
      <Route path='/search' component={SearchForm}></Route>
    </main>
  );
}

{
  /* <main>
      <Header />
      <Route exact path='/' compontent={WelcomePage} />
      <Route path='/CharacterList' compontent={CharacterList} />
    </main> */
}

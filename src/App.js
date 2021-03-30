import { useEffect, useState } from 'react';
import { Route, Switch, NavLink as Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import WebDeveloper from './components/WebDeveloper';
import GraphicDesign from './components/GraphicDesign';
import Handletterer from './components/Handletterer';
import AboutMe from './components/AboutMe';
import LinkBox from './components/LinkBox';
import Footer from './components/Footer';
import { ReactComponent as NameIcon } from "./svg/Name.svg";

function App() {
  let storage = "";
  if (localStorage.getItem("darkmode") === "true") {
    storage = "dark";
  }
  else {
    storage = "light"
  }

  const [ theme, setTheme ] = useState(storage);

  useEffect(
    () => {
      if (theme === "light") {
        localStorage.setItem("darkmode", false);
      }
      else {
        localStorage.setItem("darkmode", true);
      }
    },
    [theme]
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`background bkg-${theme}`}>
        <div className="content">
          <div className={`nameBox nameStyle-${theme}`}>
            <Link to="/" className="homeLink"><NameIcon/></Link>
          </div>
          <div className="componentBox">
            <Switch>
              <Route path="/webdev" component={WebDeveloper}/>
              <Route path="/design" component={GraphicDesign}/>
              <Route path="/lettering" component={Handletterer}/>
              <Route path="/me" component={AboutMe}/>
              <Route path="/" exact component={LinkBox}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </div> 
    </ThemeContext.Provider>
  );
}

export default App;

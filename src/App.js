import { Component } from "react";
import "./App.scss";
import PageNav from "../src/components/PageNav/PageNav";
import {BrowserRouter, Switch, Route} from "react-router-dom"; 
import Home from "./Page/Home/home";
import Upload from "./Page/Upload/upload";
import VideoDetails from "./Page/VideoDetails/vidodetails";

class App extends Component {


  render() {

    return (
      <BrowserRouter>
      <section>
        <PageNav />
          <Switch>
              <Route path= "/" exact component={Home} />
              <Route path= "/videodetails" component={VideoDetails} />
              <Route path= "/upload" component={Upload} />
          </Switch>
      </section>
      </BrowserRouter>
    );
  }
}

export default App;

import { Article, CTA, Brands, Feature, Navbar } from "./component";
import {
  Blog,
  Possibility,
  Whatgpt3,
  Header,
  Footer,
  Features,
} from "./container";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

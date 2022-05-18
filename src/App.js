import './App.css';
import {About,Blog,Features,Footer,Hero,Lightpaper,Nav,Pricing} from './components';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Features></Features>
      <Lightpaper></Lightpaper>
      <Pricing></Pricing>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;

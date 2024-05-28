import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import {
  footerAPI,
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
} from './data/data.js';

const App = () => {
  return (
    <>
      <Navbar />
      <Cart/>
      <main className="flex flex-col gap-16 relative overflow-hidden">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />

      
    </>
  );
};

export default App;

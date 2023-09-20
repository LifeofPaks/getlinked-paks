
import './App.scss';
import Hero from './components/Hero/Hero';
import Introduction from './components/Introduction/Introduction';
import Prizes from './components/Prizes/Prizes';
import Timeline from './components/Timeline/Timeline';

function App() {
  return (
    <main className="App">
      <Hero/>
      <Introduction/>
      <Timeline/>
      <Prizes/>
    </main>
  );
}

export default App;

import './App.css';
import { HomeSlider } from './components/HomeSlider';
import { Navbar } from './components/Navbar';
import { ThirdSection } from './components/ThirdSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSlider />
      <ThirdSection />
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';  
import Section from './components/Section/Section';
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
       <Section title="Top Albums" /> 
    </div>
  );
}

export default App;

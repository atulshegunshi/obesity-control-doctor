import Hero from './components/Hero';
import ServiceIcons from './components/ServiceIcons';
import DietProblems from './components/DietProblems';
import WeightControl from './components/WeightControl';
import Medication from './components/Medication';
import NewsSection from './components/NewsSection';
import Contact from './components/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Hero />
      <ServiceIcons />
      <DietProblems />
      <WeightControl />
      <Medication />
      <NewsSection />
      <Contact />
    </Layout>
  );
}

export default App;

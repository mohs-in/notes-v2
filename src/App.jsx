import Header from '../components/Header';
import data from '../src/data';
import Skill from '../components/Skill';
import Footer from '../components/Footer';
import './App.css';
import ExcalidrawViewer from './ExcalidrawViewer';

function App() {
  const skills = data.map(skill => <Skill key={skill.id} {...skill} />)
  return (
    <div className='flex items-center flex-col bg-gray-900 h-full sm:h-screen'>
      <Header />
      <div className='mt-8 flex flex-col md:flex-row md:flex-wrap justify-around'>{skills}</div>
      <ExcalidrawViewer filePath="notes/Streams.excalidraw" />
      <Footer />
    </div>
  )
}

export default App

import Header from '../components/Header';
import data from '../src/data';
import Skill from '../components/Skill';
import Footer from '../components/Footer';
import './App.css';

function App() {
  const skills = data.map(skill => <Skill key={skill.id} {...skill} />)
  return (
    <div className='flex items-center flex-col bg-gray-900 h-screen'>
      <Header />
      <div className='mt-8 flex flex-col md:flex-row'>{skills}</div>
      <a className='j17' href="https://mohsinkhan.notion.site/J17-6733c1b6610943f8a636d5fedad76a55?pvs=4">J17</a>
      <Footer />
    </div>
  )
}

export default App

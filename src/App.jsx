import Header from '../components/Header'
import data from '../src/data'
import Skill from '../components/Skill'
import './App.css'

function App() {
  const skills = data.map(skill => <Skill key={skill.id} {...skill} />)
  return (
    <div className='flex items-center flex-col bg-gray-900 h-screen'>
      <Header />
      <div className='mt-8 flex flex-col md:flex-row'>{skills}</div>
    </div>
  )
}

export default App

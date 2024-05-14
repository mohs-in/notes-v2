import Header from '../components/Header'
import data from '../src/data'
import Skill from '../components/Skill'
import './App.css'

function App() {
  const skills = data.map(skill => <Skill key={skill.id} {...skill} />)
  return (
    <>
      <Header />
      <div className='bg-gray-100'>{skills}</div>
    </>
  )
}

export default App

import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
      <h1 className= "bg-blue-500 text-white text-3xl font-bold underline padding-4 rounded-lg">
        Hello, Vite + React! & Tailwind
      </h1>
      <Card btnText = "click me"  content = "Discover amazing view."/>
      <Card btnText = "open me" />
      
    </>
  )
}

export default App

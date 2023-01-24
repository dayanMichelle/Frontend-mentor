import './App.css'
import { Banner } from './components/banner'
import { Form } from './components/form'

function App() {

  return (
    <div className="App">
     <Banner 
     text="Learn to code by watching others"
     content="See how experienced developers solve problems in real-time.
     Watching scripted tutorials is great, but understanding how
     developers think is invaluable."/>
     <Form /> 
    </div>
  )
}

export default App

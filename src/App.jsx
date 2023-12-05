import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Title from "./components/Title"
import { ContextProvider } from "./context/ThemeContext"


function App() {


  return (
    <ContextProvider>
      <div className="container">
        <Navbar/>
        <Title />
        <Layout/>
      </div>
    </ContextProvider>
  )
}

export default App

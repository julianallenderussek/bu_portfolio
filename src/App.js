import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import ContactMe from "./pages/ContactMe"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"
import Videos from "./pages/Videos"
import { CV } from "./pages/CV"
import Articles from "./pages/Articles"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/cv" element={ <CV/> } />
        <Route path="/contact" element={ <ContactMe/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/articles" element={ <Articles/> } />
        <Route path="/projects" element={ <Projects/> } />
        <Route path="/project/:id" element={ <ProjectDetails/> } />
        <Route path="/videos" element={ <Videos/> } />
      </Routes>
    </div>
  )
}

export default App;
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/skills";
import College from "./components/College/college";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
function App() {
    return(
    <div className="App">
<Navbar />
<Intro />
<Skills/>
<College />
<Projects />
<Contact />

</div>
    );
}

export default App;

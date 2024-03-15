import './App.css'
import About from './Components/About';
import Contact from './Components/Contact';
import Review from './Components/Review';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Course from './Components/Course';
import SocialLinks from './Components/SocialLinks';

function App() {

  return (
    <>
     <NavBar></NavBar>
      <Home></Home>
      <SocialLinks></SocialLinks>
      <About></About>
      <Course></Course>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App;

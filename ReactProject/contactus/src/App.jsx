import './App.css'
import Navbar from './components/Navigation/Navbar'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Contact from './components/ContactForm/Contact'

function App() {
  return(
    <>
    <Navbar />
   <main className='main_container'>
     <ContactHeader />
    <Contact/>
   </main>
    </>
  )
}

export default App

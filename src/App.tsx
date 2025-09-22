
import './App.css'
import Footer from './components/commonComponents/Footer'
import Navbar from './components/commonComponents/Navbar'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <section>
        <Navbar />
        {/* <HomePage /> */}
        <HomePage />
        <Footer />
      </section>
    </>
  )
}

export default App

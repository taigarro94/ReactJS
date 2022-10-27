import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <Header />
    </>
  )
}

export default App;
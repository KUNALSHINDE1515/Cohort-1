import './App.css'
import ContriesContainer from './Components/ContriesList'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import SelectMenu from './Components/SelectMenu'
function App() {

  return (
    <>
      <Header/>
     <main>
      <div className='search-filter-container'>
       <SearchBar />
      <SelectMenu />
     </div>

     <ContriesContainer />
     </main>

    </>
  )
}

export default App

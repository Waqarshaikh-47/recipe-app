import { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList'
import Navbar from './components/Navbar'
import "./App.css"
import Container from './components/Container'
import InnerContainer from './components/InnerContainer'
import FoodDetails from './components/FoodDetails'

function App() {
  const [ foodData, setFoodData ]  = useState([])
  const [ foodId, setFoodId ]  = useState('658615')
  return (
    <div>
      <Navbar/>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
      <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
       </div>
  )
}

export default App
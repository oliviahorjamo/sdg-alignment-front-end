import { useState, useEffect } from 'react'

import Firm from './components/Firm.js'
import FirmDetails from './components/FirmDetails'
import firmService from './services/firms'

const App = () => {
  const [firms, setFirms] = useState([])
  const [products, setProducts] = useState({})
  const [firmClicked, setClickedFirm] = useState('')


  useEffect(() => {
    firmService
      .getAll()
      .then(initialFirms => {
        setFirms(initialFirms)
      })
  }, [])

  useEffect(() => {
    firmService
      .getFirm(firmClicked.name)
      .then(products => {
        setProducts(products)
      })
  }, [firmClicked])

  const handleClickFirm = (firm) => {
    setClickedFirm(firm)
  }

  const handleClickReturn = () => {
    setClickedFirm('')
  }

  return (
    <div>
      <h1>SDG alignment api</h1>
      <div>
      </div>   
      <ul>
        {firms.map(firm => 
          <Firm
            selected_firm = {firmClicked}
            key={firm.id}
            firm={firm}
            handle = {handleClickFirm}
          />
        )}
      </ul>
      <FirmDetails
        firm = {firmClicked}
        products = {products}
        handle = {handleClickReturn}
      ></FirmDetails>
    </div>
  )
}

export default App
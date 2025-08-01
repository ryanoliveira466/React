import React from "react";
//Importa todos os componentes

import Title from './components/Title/Title'
import CarList from './components/CarList/CarList'
import Line from './components/Line/Line'
import Image from './components/Image/Image'
import Button from './components/Button/Button'

function App () {
  const userName = '232M Carros'

  return(
    <div className="App">
      <Title name={userName} />
      <Line />
      <Image />
      <CarList />
      <Button />
    </div>
  )
}

export default App
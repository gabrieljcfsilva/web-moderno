import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import ComponenteParametro from './components/ComponenteParametro'
import Multi, { BoaTarde, BoaNoite } from './components/Multiplos'

ReactDOM.render(
    <>
        <Multi.BoaTarde nome="Bruno" />
        <BoaNoite nome="Bruno" />
    </>
, document.getElementById('root'))
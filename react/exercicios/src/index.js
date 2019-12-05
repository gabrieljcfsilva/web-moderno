import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import ComponenteParametro from './components/ComponenteParametro'
// import Multi, { BoaTarde, BoaNoite } from './components/Multiplos'
// import Saudacao from './components/ComponenteClasse'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <>
        <Pai nome="Paulo" sobrenome="Nogueira">
            <Filho nome="Pedro" />
            <Filho nome="Paula" />
            <Filho nome="João" />
        </Pai>
        {/* <Saudacao tipo="Bom dia" nome="João" /> */}
        {/* <Multi.BoaTarde nome="Bruno" />
        <BoaNoite nome="Bruno" /> */}
    </>
, document.getElementById('root'))
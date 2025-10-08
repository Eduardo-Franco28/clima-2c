import { useState } from 'react'
import './App.css'
import { CloudMoon, CloudSun, MapPin } from 'lucide-react';



function App() {
  const [cidade, setCidade] = useState('')
  const [clima, setClima] = useState(null)
  const [carregamento, setCarregamento] = useState(false)
  const [erro, setErro] = useState('')

  //Funcao para buscar climas
  const buscarClima = async () =>{
    //validação
    if(!cidade.trim()){
      setErro('Por favor, digite uma cidade')
      return
    }

    setCarregamento(true)
    setErro('')

    try {
      
    } catch (error) {
      
    }finally{
      
    }
  }

  return (
    <>
      <div className="container">
        <div className="content">
          <header>
            <h1> <CloudSun color='white' size={48} />
              Consulta de Clima
              <CloudMoon color='white' size={48} />
            </h1>
            <p>Exemplo de consumo de API com React</p>
          </header>
          {/* caixa de busca */}
          <div className="busca-box">
            <div className="busca-container">
              <input type="text" placeholder='Digite o nome da cidade..'/>
              <button>Buscar</button>
            </div>
          </div>

          {/* Resultado Do Clima */}
          <div id="card-resultado">
            <div id="cidade-info">
              <div id="cidade-nome">
                <MapPin color='red' size={25}/>
                Campinas, BR
              </div>
              <p id="cidade-desc">
                Nublado
              </p>

            </div>

            {/* temperatura principal */}
            <div id="temp-box">
              <div id="temp-valor">21°C</div>
              <div id="temp-sens">Sensação Térmica: 21°C</div>
            </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default App

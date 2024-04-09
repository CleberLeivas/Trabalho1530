import style from './App.module.css'
import Menu from './components/Menu'

import prof from './assets/euMesmo.png'
import Card from './components/Card'

export default function App() {

  return (
    <div className={style.wrapHome}>
        <Menu />
        <div className={style.firstPageHeading}>
          <h1>HOME!</h1>
          <p className={style.pHome} >Seja bem vindo(a) à atividade desenvolvida para avaliação</p>
        <br />
        <br />
        <div>
          <Card 
          title='Cleber Leivas' 
          imgSrc={prof} 
          desc='' 
          value = "Sabendo das coisas que para trás ficam, prossigo para o alto."
          />
          </div>


      </div>
    </div>
  )
}

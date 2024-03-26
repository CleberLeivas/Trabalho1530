import style from './Menu.module.css'

export default function Menu() {
    return(
        <div className="primeiraDiv">
            <p>
                <a href={'/'}>Home</a>
            </p>
            <p>
                <a href={'/Calculadora'}>Calculadora</a>
            </p>
            <p>
                <a href={'/Mapas'}>Mapas</a>
            </p>
            <p>
                <a href={'/Api'}>Api</a>
            </p>
        </div>
    )
}

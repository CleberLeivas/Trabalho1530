import style from './Menu.module.css'

export default function Menu(){
    
    return( 
        <div className={style.wrapMenu}>
            <div className={style.navLinks}>
                <ul>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/calculadora">Calculadora</a></li>
                    <li><a href="/mapa">Mapa</a></li>
                    <li><a href="/marvelAPI">Marvel API</a></li>
                </ul>   
            </div>
        </div>
    )
}

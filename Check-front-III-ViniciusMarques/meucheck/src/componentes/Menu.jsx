import { useState } from "react"


function Menu() {
    //mudar nome da ClassName
    const [isActive, defActive] = useState(false)

    //aplicação da sidebar
    function apresentaMenu() {
        if (isActive) {
            defActive(false);

        } else {
            defActive(true)
        }
    }
    return (
        <>

            <div className="l-app" onKeyDown={(evento) => {
                if (evento.key === "Space") {
                    apresentaMenu();
                }
            }}>

                {/* <!--
        <button class="l-sidebar__btn" type="button">Menu</button>

        1. Esta sessão deverá ser apresentada
        sempre que houver o click no botão MENU:


        --> */}

                <div className={isActive ? "l-sidebar--open" : "l-sidebar--close"}>
                    <h1 className="l-logo">Vinicius Marques</h1>
                    <nav className="c-sidebar">
                        <a className="c-nav__item" href="#sobre-mim">Quem sou eu?</a>
                        <a className="c-nav__item" href="#contatos">Meu contato</a>
                    </nav>
                </div>

                {/* <!--
        

1.1. Quando houver o click do usuário,
a sidebar deverá ser apresentada.
        <div className="l-sidebar">
          ...
        </div>

        --> */}

                <button className="l-sidebar__btn" type="button" onClick={() => {
                    apresentaMenu()


                }} >Menu</button>

            </div>


        </>
    )
}
export default Menu;
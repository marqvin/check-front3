import { useState } from "react"
import Menu from "./componentes/Menu";
import { useEffect } from "react"
import Contato from "./componentes/Contato";

function App() {
    // useState pega os valores dos inputs
    const [nome,defNome]=useState(null);
    const [email,defEmail]=useState(null);

    //colocar mensagem nos inputs
    const [texto,setandoText]=useState("")
    const [texto_email,setandoEmail]=useState("")

    
    
    useEffect(()=>{
      verificarEmail();
      verificarNome();
      
    })
    //verificação de email
    function verificarEmail() {
      var armazena = /\S+@\S+\.\S+/;
      return !armazena.test(email) ? false : true;
    }
    
    //vericação de nome
    function verificarNome(){
      
      return nome==null||nome==""? false : nome.length < 3 ? false : true;
    }
  return (
    <>
      <Menu />

        {/* <!--

        2. O usuário poderá usar o teclado para abrir ou fechar
        a sidebar. No caso, as tecla Space.

        3. O usuário poderá usar o mouse para abrir ou fechar
        a sidebar. No caso, um duplo click em qualquer local
        do site irá abrir ou fechar a sidebar.

        --> */}

        <div className="l-content">

          {/* <!-- Sessão Principal --> */}
          <div className="l-page bg__profile">

            <main>
              <h1 className="title">Olá, sou Vinicius</h1>
              <p className="description">Seja bem vindo ao site React</p>

              <nav className="c-nav u-my-3">

                <a className="c-nav__item" href="https://github.com/marqvin">GitHub</a>
                <a className="c-nav__item" href="https://www.linkedin.com/in/v1niciusmarques/">Linkedin</a>
              </nav>

              <a className="c-btn u-my-3" href="#sobre-mim">Sobre mim</a>
            </main>

          </div>

          {/* <!-- Sessão Sobre mim --> */}
          <div className="l-page" id="sobre-mim">
            <article>

              <h1 className="title">Sobre mim</h1>

              <p>Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Per aumento de cachacis, eu reclamis.Casamentiss faiz malandris se pirulitá.Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
              <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Manduma pindureta quium dia nois paga.</p>
              <p>Interagi no mé, cursus quis, vehicula ac nisi.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Sapien in monti palavris qui num significa nadis i pareci latim.</p>
            </article>

          </div>

          {/* <!-- Sessão de contatos--> */}
          <Contato />
          
        </div>
      
    </>
  )
}

export default App;

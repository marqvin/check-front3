import { useState } from "react"
import { useEffect } from "react"
function Contato() {
    // useState pega os valores dos inputs
    const [nome, defNome] = useState(null);
    const [email, defEmail] = useState(null);

    //colocar mensagem nos inputs
    const [texto, setandoText] = useState("")
    const [texto_email, setandoEmail] = useState("")

    useEffect(() => {
        verificarEmail();
        verificarNome();

    })
    //verificação de email
    function verificarEmail() {
        var armazena = /\S+@\S+\.\S+/;
        return !armazena.test(email) ? false : true;
    }

    //vericação de nome
    function verificarNome() {

        return nome == null || nome == "" ? false : nome.length < 3 ? false : true;
    }
    return (
        <>
            <div className="l-page" id="contatos">

                <section>
                    <h1 className="title">Como posso te ajudar?</h1>

                    <nav className="c-nav">
                        <a className="c-nav__item" href="https://github.com/marqvin">GitHub</a>
                        <a className="c-nav__item" href="https://www.linkedin.com/in/v1niciusmarques/">Linkedin</a>
                        <a className="c-nav__item" href="tel:+5511962572548">Celular</a>
                    </nav>

                    <form
                        onSubmit={(evento) => {

                            if (!verificarEmail() || !verificarNome()) {

                                evento.preventDefault();
                                if (!verificarEmail() && !verificarNome()) {
                                    setandoEmail("email não valido!")

                                    setandoText("nome não valido!")
                                } else if (!verificarEmail()) {
                                    setandoEmail("email não valido!")

                                } else if (!verificarNome()) {
                                    setandoText("nome não valido!")

                                }
                            } else {
                                alert("Ação bem sucedida!")

                                setandoEmail("");
                                setandoText("");

                            }
                        }}
                        name="contact"
                        className="c-form"

                    >
                        <div className="c-form__group">

                            <label htmlFor="name" className="c-form__label">Nome</label>
                            <input type="text" placeholder="Digite seu nome" id="name" className="c-form__control" onChange={(resposta) => { defNome(resposta.target.value) }}

                            />
                            <div className="nome" style={{ color: "red" }}>

                                {texto}
                            </div>


                        </div>
                        <div className="c-form__group">

                            <label htmlFor="email" className="c-form__label">E-mail</label>


                            <input type="text" placeholder="Digite seu e-mail" id="email" className="c-form__control" onChange={(resposta) => { defEmail(resposta.target.value) }} />
                            <div style={{ color: "red" }}>{texto_email}</div>

                        </div>
                        <div className="c-form__group">
                            <label htmlFor="subject" className="c-form__label">Assunto</label>
                            <select id="subject" className="c-form__control">
                                <option value disabled>Qual o assunto?</option>
                                <option value="orcamento">Orçamento</option>
                                <option value="oportunidade">Oportunidade</option>
                                <option value="parceria">Parcerias</option>
                            </select>
                        </div>
                        <div className="c-form__group">
                            <label htmlFor="messager" className="c-form__label">Mensagem</label>
                            <textarea rows="5" placeholder="Se desejar, explique-me melhor..." id="messager" className="c-form__control"></textarea>
                        </div>
                        <div className="c-form__group">
                            <button className="c-btn" type="submit"

                            >Enviar</button>
                        </div>
                    </form>
                </section>

                <footer className="u-my-3">
                    <span>Todos os direitos reservados por Vinicius Marques</span>
                </footer>

            </div>


        </>
    )
}

export default Contato;
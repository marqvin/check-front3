function Formulario(){
    return(
        <>
            <form
                name="contact"
                className="c-form"
              >
                <div className="c-form__group">
                  <label for="name" className="c-form__label">Nome</label>
                  <input type="text" placeholder="Digite seu nome" id="name" className="c-form__control"/>
                </div>
                <div className="c-form__group">
                  <label for="email" className="c-form__label">E-mail</label>
                  <input type="text" placeholder="Digite seu e-mail" id="email" className="c-form__control"/>
                </div>
                <div className="c-form__group">
                  <label for="subject" className="c-form__label">Assunto</label>
                  <select id="subject" className="c-form__control">
                    <option selected disabled>Qual o assunto?</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="oportunidade">Oportunidade</option>
                    <option value="parceria">Parcerias</option>
                  </select>
                </div>
                <div className="c-form__group">
                  <label for="messager" className="c-form__label">Mensagem</label>
                  <textarea rows="5" placeholder="Se desejar, explique-me melhor..." id="messager" className="c-form__control"></textarea>
                </div>
                <div className="c-form__group">
                  <button className="c-btn" type="submit">Enviar</button>
                </div>
              </form>
        
        </>
    )
}

export default Formulario;
import MaisCampos from "./MaisCampos.js";
export default {
    open() {
        const html = `  
                    <div class="novo_paciente_windown_container">
                        <div class="novo_paciente_windown">
                            <div class="novo_paciente_windown_header">
                                <span class="material-icons">face</span>
                                <span class="novo_paciente_windown_header--text">Novo Paciente</span>
                                <span class="material-icons novo_paciente_windown_header--btn_close">close</span>
                            </div>
                            <div class="novo_paciente_windown_body">
        
                                <form class="form_novo_paciente" action="">
                                <div class="info_accordion_form">
                                    <div class="info_accordion_form--header pessoais">
                                        <span class="info_accordion_form--header-text">Informações Pessoais</span>
                                        <span class="material-icons info_accordion_form--header-icon">expand_more</span>
                                    </div>
                                    <div class="info_accordion_form--body">
                        
                                        <div class="input_container">
                                            <label for="nome">Nome</label>
                                            <input type="text" name="nome" id="nome">
                                        </div>
                                        <div class="container__4-first_small">
                                            <div class="input_container">
                                                <label for="Idade">Idade</label>
                                                <input type="number" name="idade" id="idade">
                                            </div>
                                            <div class="input_container">
                                                <label for="dataNascimento">Data de Nascimento</label>
                                                <input type="date" name="dataNascimento" id="dataNascimento">
                                            </div>
                                            <div class="input_container">
                                                <label for="sexo">Sexo</label>
                                                <select name="sexo" id="sexo">
                                                    <option value="Masculino">Masculino</option>
                                                    <option value="Feminino">Feminino</option>
                                                    <option value="Outro">Outro</option>
                                                </select>
                                            </div>
                                            <div class="input_container">
                                                <label for="naturalidade">Naturalidade</label>
                                                <input type="text" name="naturalidade" id="naturalidade">
                                            </div>
                                        </div>
                        
                                        <div class="container__3">
                        
                                            <div class="input_container">
                                                <label for="estadoCivil">Estado Civil</label>
                                                <select name="estadoCivil" id="estadoCivil">
                                                    <option value="Solteiro">Solteiro</option>
                                                    <option value="Casado">Casado</option>
                                                    <option value="Divorciado">Divorciado</option>
                                                    <option value="Viuvo">Viúvo</option>
                                                    <option value="Separado">Separado</option>
                                                </select>
                                            </div>
                                            <div class="input_container">
                                                <label for="CPF">CPF</label>
                                                <input type="number" name="CPF" id="CPF">
                                            </div>
                                            <div class="input_container">
                                                <label for="RG">RG</label>
                                                <input type="number" name="RG" id="RG">
                                            </div>
                        
                                        </div>
                        
                                        <div class="container__3">
                        
                                            <div class="input_container">
                                                <label for="escolaridade">Escolaridade</label>
                                                <input type="text" name="escolaridade" id="escolaridade">
                                            </div>
                                            <div class="input_container">
                                                <label for="profissao">Profissão</label>
                                                <input type="text" name="profissao" id="profissao">
                                            </div>
                                            <div class="input_container">
                                                <label for="religiao">Religião</label>
                                                <input type="text" name="religiao" id="religiao">
                                            </div>
                        
                                        </div>
                        
                                        <div class="container__2">
                                            <div class="input_container">
                                                <label for="endereco">Endereço</label>
                                                <input type="text" name="endereco" id="endereco">
                                            </div>
                                            <div class="input_container">
                                                <label for="email">E-mail</label>
                                                <input type="text" name="email" id="email">
                                            </div>
                                        </div>
                                        <div class="container__3">
                                            <div class="input_container">
                                                <label for="escolaridade">Telefone</label>
                                                <input type="text" name="telefone" id="telefone">
                                            </div>
                                            <div class="input_container">
                                                <label for="profissao">Cidade</label>
                                                <input type="text" name="Cidade" id="Cidade">
                                            </div>
                                            <div class="input_container">
                                                <label for="nome">Estado</label>
                                                <input type="text" name="Estado" id="Estado">
                                            </div>
                                        </div>
                                        <div id="last_container" class="input_container">
                                            <label for="nome">Observações</label>
                                            <textarea class="text_area_field" name="observacoes" id="observacoes" cols="30" rows="4"></textarea>
                                        </div>
                                        
                                        <div class="button_accordion_container">
                                            <button id="add_campo">Adicionar Campo</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="info_accordion_form">
                                    <div class="info_accordion_form--header conultas">
                                        <span class="info_accordion_form--header-text">Consultas</span>
                                        <span class="material-icons info_accordion_form--header-icon">expand_more</span>
                                    </div>
                                    <div class="info_accordion_form--body">
                        
                                    </div>
                                </div>
                                <div class="info_accordion_form">
                                    <div class="info_accordion_form--header financeiro">
                                        <span class="info_accordion_form--header-text">Financeiro</span>
                                        <span class="material-icons info_accordion_form--header-icon">expand_more</span>
                                    </div>
                                    <div class="info_accordion_form--body">
                        
                                    </div>
                                </div>
                                <div class="novo_paciente_windown_form_footer">
                                    <button type="submit">Finalizar</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                `;

        const template = document.createElement("template");
        template.innerHTML = html;

        const windownContainer = template.content.querySelector(".novo_paciente_windown_container");
        const btnClose = template.content.querySelector(".novo_paciente_windown_header--btn_close");
        const btnAddCampo = template.content.querySelector("#add_campo");

        const addInfoPessoais = template.content.querySelectorAll('.info_accordion_form--header');

        addInfoPessoais.forEach(header => {
            header.addEventListener('click', e => {


                addInfoPessoais.forEach(h => {
                    if (h !== e.target) {
                        h.classList.remove('active');
                        h.nextElementSibling.style.maxHeight = 0;
                        h.nextElementSibling.classList.remove('active');
                    }
                });

                const addInfoPessoaisBody = e.target.nextElementSibling;

                if (e.target.classList.contains('active')) e.target.classList.remove('active')
                else e.target.classList.add('active');

                if (e.target.classList.contains('active')) {
                    addInfoPessoaisBody.style.maxHeight = addInfoPessoaisBody.scrollHeight + "px";
                    addInfoPessoaisBody.classList.add('active');
                } else {
                    addInfoPessoaisBody.classList.remove('active');
                    addInfoPessoaisBody.style.maxHeight = 0;
                }
            });
        });


        btnAddCampo.addEventListener('click', e => {
            e.preventDefault();
            MaisCampos.open();
        });
        btnClose.addEventListener('click', () => {
            this._close(windownContainer);
        });
        document.body.appendChild(template.content);
        document.body.classList.add('stop-scrolling')
    },

    _close(windownContainer) {
        windownContainer.classList.add('confirm-close');

        windownContainer.addEventListener('animationend', () => {
            document.body.removeChild(windownContainer)
            document.body.classList.remove('stop-scrolling')
        })
    },


}

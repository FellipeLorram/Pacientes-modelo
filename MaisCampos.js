export default {
    open() {
        const html = `
        <div class="more_filds_container">
            <div class="more_filds">
                <div class="more_filds--header">
                    <span class="more_filds_header--text">Escolha o campo</span>
                    <span class="material-icons more_filds_header--btn_close">close</span>
                </div>
                <div class="more_filds--body">
                    <div class="select__container">
                        <div class="select_all">Todos</div>
                        <div class="more_fields--select-content">Diagnóstico/Seqüela</div>
                        <div class="more_fields--select-content">Medicação atual</div>
                        <div class="more_fields--select-content">Médico responsável</div>
                        <div class="more_fields--select-content">Encaminhamento</div>
                        <div class="more_fields--select-content">Co-morbidades</div>
                        <div class="more_fields--select-content">Responsável/acompanhante</div>
                        <div class="more_fields--select-content">Composição familiar</div>
                        <div class="more_fields--select-content">Queixa principal</div>
                    </div>
                    <div class="more_filds_body_footer">
                        <button type="personalizar_campo">Personalizar</button>
                        <button id="confirma">Adicionar</button>
                    </div>
                </div>
            </div>
        </div>
        `
        const template = document.createElement("template");
        template.innerHTML = html;

        const windownContainer = template.content.querySelector(".more_filds_container");
        const selectAll = template.content.querySelector(".select_all");
        const campos = template.content.querySelectorAll(".more_fields--select-content");
        const btnClose = template.content.querySelector(".more_filds_header--btn_close");
        const btnAdd = template.content.querySelector("#confirma");

        campos.forEach(campo => {
            campo.addEventListener('click', e => {
                e.target.classList.toggle('selected');
            });
        });

        selectAll.addEventListener('click', e => {
            e.target.classList.toggle('selected_all');
            if (selectAll.classList.contains('selected_all')) campos.forEach(campo => {
                campo.classList.add('selected');
            });
            else campos.forEach(campo => {
                campo.classList.remove('selected');
            });
        });

        [windownContainer, btnClose].forEach(element => {
            element.addEventListener('click', e => {
                if (e.target == element) {
                    this._close(windownContainer);
                }
            });
        });
        btnAdd.addEventListener('click', () => {
            this._addFields(Array.from(campos).filter(campo => campo.classList.contains('selected')), windownContainer);
        });
        document.body.appendChild(template.content);
    },

    _close(windownContainer) {
        windownContainer.classList.add('confirm-close');

        windownContainer.addEventListener('animationend', () => {
            document.body.removeChild(windownContainer)
            document.body.classList.remove('stop-scrolling')
        })
    },

    _addFields(campos, windownContainer) {

        const fieldsToInsert = campos.map(campo => {
            let contains = false;
            document.querySelectorAll('.form_novo_paciente input').forEach(i => {
                if (i.getAttribute('id') == campo.innerHTML.replace(' ','')) contains = true;
            });
            return !contains ? `
            <div class="input_container">
                <label for="nome">${campo.innerHTML}</label>
                <input type="text" name=${campo.innerHTML.replace(' ','')} id=${campo.innerHTML.replace(' ','')}>
            </div>
            ` : '';
        });

        fieldsToInsert.forEach(field => document.querySelector('.novo_paciente_windown_form_footer').insertAdjacentHTML('beforebegin', field));
        this._close(windownContainer);
    }

}

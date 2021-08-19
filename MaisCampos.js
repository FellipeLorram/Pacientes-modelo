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
                        ${this._availableFields()}
                    </div>
                    <div class="more_filds_body_footer">
                        <button class="personalizar_campo">Personalizar</button>
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
        const customAdd = template.content.querySelector(".personalizar_campo");

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

        const clickFunctionAddFields = () => this._addFields(Array.from(campos).filter(campo => campo.classList.contains('selected')), windownContainer);
        btnAdd.addEventListener('click', clickFunctionAddFields);

        customAdd.addEventListener('click', () => {
            this._customField(windownContainer, btnAdd, clickFunctionAddFields);
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
                if (i.getAttribute('id') == campo.innerHTML.replace(' ', '').replace(',', '')) contains = true;
            });

            if (campo.classList.contains('text_area') && !contains) return `
            <div id="last_container" class="input_container">
                <label for="nome">${campo.innerHTML}</label>
                <textarea class="text_area_field" name=${campo.innerHTML.replace(' ', '').replace(',', '')} id=${campo.innerHTML.replace(' ', '').replace(',', '')} cols="30" rows="4"></textarea>
            </div>
            `

            return !contains ? `
            <div class="input_container">
                <label for="nome">${campo.innerHTML}</label>
                <input type="text" name=${campo.innerHTML.replace(' ', '').replace(',', '')} id=${campo.innerHTML.replace(' ', '').replace(',', '')}>
            </div>
            ` : '';

        });

        fieldsToInsert.forEach(field => document.querySelector('#last_container').insertAdjacentHTML('beforebegin', field));
        this._close(windownContainer);
    },

    _availableFields() {
        const fields = [
            { content: '<div class="more_fields--select-content">Diagnóstico/Seqüela</div>', key: 'Diagnóstico/Seqüela', available: true },
            { content: '<div class="more_fields--select-content">Medicação atual</div>', key: 'Medicaçãoatual', available: true },
            { content: '<div class="more_fields--select-content">Médico responsável</div>', key: 'Médicoresponsável', available: true },
            { content: '<div class="more_fields--select-content">Encaminhamento</div>', key: 'Encaminhamento', available: true },
            { content: '<div class="more_fields--select-content">Co-morbidades</div>', key: 'Co-morbidades', available: true },
            { content: '<div class="more_fields--select-content">Responsável/acompanhante</div>', key: 'Responsável/acompanhante', available: true },
            { content: '<div class="more_fields--select-content">Antecedente familiar</div>', key: 'Antecedentefamiliar', available: true },
            { content: '<div class="more_fields--select-content text_area">Composição familiar</div>', key: 'Composiçãofamiliar', available: true },
            { content: '<div class="more_fields--select-content text_area">Queixa principal</div>', key: 'Queixaprincipal', available: true },
            { content: '<div class="more_fields--select-content text_area">História</div>', key: 'História', available: true },
            { content: '<div class="more_fields--select-content text_area">Tratamentos anteriores/atuais</div>', key: 'Tratamentosanteriores/atuais', available: true },
            { content: '<div class="more_fields--select-content text_area">Internação/cirurgias</div>', key: 'Internação/cirurgias', available: true },
            { content: '<div class="more_fields--select-content text_area">Uso de álcool, cigarro, outros</div>', key: 'lUsodeálcoolcigarrooutros', available: true },
            { content: '<div class="more_fields--select-content text_area">Atividades atuais</div>', key: 'Atividadesatuais', available: true },
            { content: '<div class="more_fields--select-content text_area">Rotina diária</div>', key: 'Rotinadiária', available: true },
        ]

        const available = fields.map(field => {

            document.querySelectorAll('.form_novo_paciente input').forEach(i => {
                if (i.getAttribute('id') == field.key) field.available = false
            });

            document.querySelectorAll('.form_novo_paciente textarea').forEach(i => {
                if (i.getAttribute('id') == field.key) field.available = false
            });

            return field.available ? field.content : ''

        }).join('');


        return available ? available : '<div class="message_no_fields_available">Personalize seu Proximo campo</div>'
    },

    _customField(windownContainer, btnAdd, clickFunctionAddFields) {
        const selectArea = document.querySelector('.select__container');
        selectArea.classList.add('nice_change');
        document.querySelector('.personalizar_campo').style.display = 'none';

        selectArea.style.gap = 0;

        setTimeout(() => {
            selectArea.classList.add('nice_change_continuos');

            selectArea.innerHTML = `
        <div class="input_container">
            <label for="nome">Nome do campo</label>
            <input type="text" name="customField" id="customField">
        </div>
        <div class="select_custom_input_size">
            <div class="select_custom_input_size--body">
                <div class="normal_field selected">Normal</div>    
                <div class="large_field">Grande</div>
            </div>
        </div>
    `;
            const normalFIeld = selectArea.querySelector('.normal_field');
            const largeFIeld = selectArea.querySelector('.large_field');


            [normalFIeld, largeFIeld].forEach(field => {
                field.addEventListener('click', e => {

                    [normalFIeld, largeFIeld].forEach(choice => {
                        choice.classList.remove('selected');
                    });

                    e.target.classList.toggle('selected');
                });
            });


        }, 200);

        btnAdd.removeEventListener('click', clickFunctionAddFields);
        btnAdd.addEventListener('click', () => {
            const fieldLabel = document.querySelector('#customField');

            if (!fieldLabel.value) {
                fieldLabel.classList.add('required_field');
                return
            }

            const newField = document.createElement('div');
            newField.innerHTML = fieldLabel.value


            if (document.querySelector('.selected').classList.contains('normal_field')) return this._addFields([newField], windownContainer)

            newField.classList.add('text_area')
            return this._addFields([newField], windownContainer);

        });
    }
}

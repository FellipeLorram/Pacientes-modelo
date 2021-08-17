export default {
    open() {
        const html = `
        <div class="more_filds_container">
            <div class="more_filds">
                <div class="more_filds--header">
                    <span class="more_filds_header--text">Escolha o campo</span>
                    <span class="material-icons more_filds_header--btn_close">close</span>
                </div>
                <div class="more_filds--body"></div>
            </div>
        </div>
        `
        const template = document.createElement("template");
        template.innerHTML = html;

        document.body.appendChild(template.content);
    }

}
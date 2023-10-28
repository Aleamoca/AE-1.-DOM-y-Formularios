    
document.addEventListener('DOMContentLoaded', function () {
    // Obtener el contenedor
    const formularioContenedor = document.getElementById('formulario-contenedor');

    // Crear los elementos del formulario
    const dniInput = createInput('DNI','text');
    const nombreInput = createInput('Nombre', 'text');
    const apellidosInput = createInput('Apellidos', 'text');
    const direccionInput = createInput('Dirección', 'text');
    const telefonoInput = createInput('Teléfono', 'number');

    // Radio buttons
    const radioButtons = createRadioButtons(['Menú 1', 'Menú 2', 'Menú 3', 'Menú 4']);

    // Checkboxes
    const checkboxes = createCheckboxes([
        'Plan mensual 1',
        'Plan mensual 2',
        'Plan mensual 3',
        'Plan mensual 4',
        'Plan mensual 5'
    ]);

    // Select
    const selectField = createSelect(['Solo Menú', 'Coach + Menú', 'Premiun']);

    // Text Area
    const textarea = createTextarea();
    // Imagenes 
    const imagen1 = createImage('plan.jpg', 'Imagen plan');
    const imagen2 = createImage('menu.jpg', 'Imagen menú');

    // Añadir los elementos al contenedor
    formularioContenedor.appendChild(dniInput);
    formularioContenedor.appendChild(nombreInput);
    formularioContenedor.appendChild(apellidosInput);
    formularioContenedor.appendChild(direccionInput);
    formularioContenedor.appendChild(telefonoInput);
    formularioContenedor.appendChild(radioButtons);
    formularioContenedor.appendChild(checkboxes);
    formularioContenedor.appendChild(selectField);
    formularioContenedor.appendChild(textarea);
    formularioContenedor.appendChild(imagen1);
    formularioContenedor.appendChild(imagen2);
});

    //Funciones   

function createInput(labelText, inputType) {
    const label = document.createElement('label');
    label.textContent = labelText;

    const input = document.createElement('input');
    input.type = inputType;

    const contenedor = document.createElement('div');
    contenedor.appendChild(label);
    contenedor.appendChild(input);

    return contenedor;
}

function createRadioButtons(options) {
    const contenedor = document.createElement('div');

    options.forEach(option => {
        const label = document.createElement('label');
        label.textContent = option;

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'radio-group';

        contenedor.appendChild(label);
        contenedor.appendChild(radio);
    });

    return contenedor;
}

function createCheckboxes(options) {
    const contenedor = document.createElement('div');

    options.forEach(option => {
        const label = document.createElement('label');
        label.textContent = option;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        contenedor.appendChild(label);
        contenedor.appendChild(checkbox);
    });

    return contenedor;
}

function createSelect(options) {
    const select = document.createElement('select');

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });

    return select;
}

function createTextarea() {
    const label = document.createElement('label');
    label.textContent = 'Comentarios';

    const textarea = document.createElement('textarea');

    const contenedor = document.createElement('div');
    contenedor.appendChild(label);
    contenedor.appendChild(textarea);

    return contenedor;
}

function createImage(src, alt) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    
    const contenedor = document.createElement('div');
    contenedor.appendChild(img);

    return contenedor;
}
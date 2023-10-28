document.addEventListener('DOMContentLoaded', function () {
    // Obtener el contenedor
    const formularioPedido = document.getElementById('formulario-pedido');

    // Crear los elementos del formulario
    
    const nombreInput = createInput('Nombre', 'text');
    const direccionInput = createInput('Dirección', 'text');
    const telefonoInput = createInput('Teléfono', 'number');
    const emailInput = createInput('Email', 'text');

    // Radio buttons
    const radioButtons = createRadioButtons(['Pequeña', 'Mediana', 'Grande']);

    // Checkboxes
    const checkboxes = createCheckboxes([
        'Jamón',
        'Queso',
        'Tomate',
        'Aceitunas'
    ]);

     // Añadir los elementos al contenedor
     formularioPedido.appendChild(nombreInput);
     formularioPedido.appendChild(direccionInput);
     formularioPedido.appendChild(telefonoInput);
     formularioPedido.appendChild(emailInput);
     formularioPedido.appendChild(radioButtons);
     formularioPedido.appendChild(checkboxes);
});

// Funciones   

function createInput(labelText, inputType) {
    const label = document.createElement('label');
    label.textContent = labelText;

    const input = document.createElement('input');
    input.type = inputType;

    const pedido = document.createElement('div');
    pedido.appendChild(label);
    pedido.appendChild(input);

    return pedido;
}

function createRadioButtons(options) {
    const pedido = document.createElement('div');

    options.forEach(option => {
        const label = document.createElement('label');
        label.textContent = option;

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'radio-group';

        contenedor.appendChild(label);
        contenedor.appendChild(radio);
    });

    return pedido;
}

function createCheckboxes(options) {
    const pedido = document.createElement('div');

    options.forEach(option => {
        const label = document.createElement('label');
        label.textContent = option;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        pedido.appendChild(label);
        pedido.appendChild(checkbox);
    });

    return pedido;
}


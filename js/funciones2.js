/*
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


*/
//Funciones

document.getElementById("procesarPedidoButton").addEventListener("click", function() {
    calcularPrecio();
});
function calcularPrecio() {
    // Obtener los valores de los elementos del formulario
    var tamano = document.querySelector('input[name="tamano"]:checked');
    var ingredientes = document.querySelectorAll('input[type="checkbox"]:checked');


    // Verificar que se haya seleccionado al menos un tamaño y un ingrediente
    if (!tamano || ingredientes.length === 0) {
        alert("Por favor, elija al menos un tamaño y un ingrediente.");
        return;
    }

    // Calcular el precio
    var precioBase;
    switch (tamano.value) {
        case "pequena":
            precioBase = 5;
            break;
        case "mediana":
            precioBase = 10;
            break;
        case "grande":
            precioBase = 15;
            break;
    }

    var precioIngredientes = ingredientes.length; // Cada ingrediente tiene un costo de 1€

    var precioTotal = precioBase + precioIngredientes;

    // Mostrar el resultado
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Precio Total del Pedido: " + precioTotal + "€";
}

/*

document.addEventListener('DOMContentLoaded', function () {
    var botonProcesar = document.getElementById('procesarPedido');
    botonProcesar.addEventListener('click', function () {
        calcularPrecio();
    });
});

function calcularPrecio() {
    var tamano = document.querySelector('input[name="tamano"]:checked');
    var ingredientes = document.querySelectorAll('input[type="checkbox"]:checked');

    if (tamano === null || ingredientes.length === 0) {
        alert("Debe seleccionar tamaño y al menos un ingrediente.");
        return;
    }

    var precioBase = parseInt(tamano.value);
    var precioIngredientes = Array.from(ingredientes).reduce(function (total, ingrediente) {
        return total + parseInt(ingrediente.value);
    }, 0);

    var precioTotal = precioBase + precioIngredientes;

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Precio total del pedido: " + precioTotal + "€";}*/
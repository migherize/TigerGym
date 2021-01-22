const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll('#formulario input');
console.log("ho",formulario);

const expresiones = {
    cedula: /^\d{7,14}$/, // 7 a 14 numeros.
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{11,14}$/, // 7 a 14 numeros.
    monto: /^\d{1,3}$/, // 1 a 3 numeros.
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "Nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('Nombre').classList.remove('is-danger');
                document.getElementById('Ncheck').classList.remove('fa-exclamation-triangle');

                document.getElementById('Nombre').classList.add('is-success');
                document.getElementById('Ncheck').classList.add('fa-check');
            } else {
                document.getElementById('Nombre').classList.add('is-danger');
                document.getElementById('Ncheck').classList.add('fa-exclamation-triangle');
            }
        break;
        case "Apellido":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('Apellido').classList.remove('is-danger');
                document.getElementById('Acheck').classList.remove('fa-exclamation-triangle');

                document.getElementById('Apellido').classList.add('is-success');
                document.getElementById('Acheck').classList.add('fa-check');
            } else {
                document.getElementById('Apellido').classList.add('is-danger');
                document.getElementById('Acheck').classList.add('fa-exclamation-triangle');
            }
        break;
        case "Cedula":
            console.log("hola");
            if(expresiones.cedula.test(e.target.value)){
                document.getElementById('Cedula').classList.remove('is-danger');
                document.getElementById('Ccheck').classList.remove('fa-exclamation-triangle');

                document.getElementById('Cedula').classList.add('is-success');
                document.getElementById('Ccheck').classList.add('fa-check');
            } else {
                document.getElementById('Cedula').classList.add('is-danger');
                document.getElementById('Ccheck').classList.add('fa-exclamation-triangle');
            }
        break;
        case "Telefono":
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById('Telefono').classList.remove('is-danger');
                document.getElementById('Tcheck').classList.remove('fa-exclamation-triangle');

                document.getElementById('Telefono').classList.add('is-success');
                document.getElementById('Tcheck').classList.add('fa-check');
            } else {
                document.getElementById('Telefono').classList.add('is-danger');
                document.getElementById('Tcheck').classList.add('fa-exclamation-triangle');
            }
        break;
        case "Monto":
            console.log("x");
            if(expresiones.monto.test(e.target.value)){
                document.getElementById('Monto').classList.remove('is-danger');
                document.getElementById('Mcheck').classList.remove('fa-exclamation-triangle');

                document.getElementById('Monto').classList.add('is-success');
                document.getElementById('Mcheck').classList.add('fa-check');
            } else {
                document.getElementById('Monto').classList.add('is-danger');
                document.getElementById('Mcheck').classList.add('fa-exclamation-triangle');
            }
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
        break;
        case "password2":
            validarPassword2();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
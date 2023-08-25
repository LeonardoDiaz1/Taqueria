function modal() {
    Swal.fire({
        html: "<h1 style='font-size: 3rem;' class='titulo-modal'>Snacktural</h1><span class='mas-vendidos'>Nustro Contacto</span><br/><br/><p><i class='ti ti-phone-call'></i> 01 800 024 0384</p><br/><span class='mas-vendidos'>Nuestras Redes Sociales</h3><br/><br/><a style='font-size: 20px; color: #3b5998; cursor: pointer;' class='ti ti-brand-facebook-filled'></a><a style='font-size: 20px; color: #171515; cursor: pointer; pointer; margin: 8px;' class='ti ti-brand-github-filled'></a><a style='font-size: 20px; color: #00acee; cursor: pointer;' class='ti ti-brand-twitter-filled'></a>",
        showDenyButton: true,
        showConfirmButton: false,
        denyButtonText: `Cerrar`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__backOutDown'
        },
    });
};

function respuesta() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mensaje Enviado',
        showConfirmButton: false,
        timer: 1000
    });
};

function login() {
    Swal.fire({
        title: 'Inicio de Sesión',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Usuario">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
        confirmButtonText: 'Ingresar',
        focusConfirm: false,
        preConfirm: () => {
            const login = Swal.getPopup().querySelector('#login').value
            const password = Swal.getPopup().querySelector('#password').value
            if (!login || !password) {
                Swal.showValidationMessage(`Ingresa tu Correo y Contraseña correctamente.`)
            }
            return { login: login, password: password }
        }
    });
};
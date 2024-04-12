let src = ['../images/icons8-eye-96.png', '../images/icons8-closed-eye-96.png'];
let pass = document.querySelectorAll('.password');
let img = document.querySelectorAll('.pass-container img');

function toggle(password, image) {
    if (password.getAttribute('type') == 'password') {
        password.setAttribute('type', 'text');
        image.setAttribute('src', src[1]);
    }
    else {
        password.setAttribute('type', 'password');
        image.setAttribute('src', src[0]);
    }
}

img.forEach((val, index) => {
    val.addEventListener('click', () => {
        toggle(pass[index], val);
    })
})
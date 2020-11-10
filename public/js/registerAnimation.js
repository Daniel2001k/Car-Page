function backFunction() {
    const loginForm= document.getElementById('login-form');
    const signinForm= document.getElementById('signin-form');
    const toBack= document.getElementById('to-back');
    toBack.style.display = 'none';
    loginForm.style.display = 'none';
    signinForm.style.display = 'none';
};
function switchOnLoginForm() {
    const loginForm= document.getElementById('login-form');
    const signinForm= document.getElementById('signin-form');
    const toBack= document.getElementById('to-back');
    toBack.style.display = 'block';
    loginForm.style.display = 'flex';
    signinForm.style.display = 'none';
    toBack.addEventListener('click', backFunction);
    console.log('test');
};
function switchOnSigninForm() {
    const loginForm= document.getElementById('login-form');
    const signinForm= document.getElementById('signin-form');
    const toBack= document.getElementById('to-back');
    toBack.style.display = 'block';
    signinForm.style.display = 'flex';
    loginForm.style.display = 'none';
    toBack.addEventListener('click', backFunction);
    console.log('test');
};


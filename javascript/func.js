
$(window).on("load", function () {
    if (localStorage.getItem('logIn')) {
        $('#loginbtn').css("display", "none");
        $('#bottomlogin').css("display", "none");

    } else {
        $('#logoutbtn').css("display", "none");
        $('#bottomlogout').css("display", "none");
    }


});

function loginCLick() {
    document.getElementById("loginModal").style.display = "block";
}

function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

function gosignup() {
    location.href = "http://127.0.0.1:5501/html/signup.html";
}

function logout() {
    localStorage.removeItem('logIn');
    alert('로그아웃 되었습니다.');
    location.href = 'index.html';
}

function login() {
    const inputId = document.getElementById('loginid');
    const inputPw = document.getElementById('loginpw');
    let success
    if (inputId.value && inputPw.value) {
        if (localStorage.getItem(inputId.value) == inputPw.value) {
            success = true;
        }
        else {
            success = false;
        }
    } else {
        alert('아이디와 비밀번호를 입력해주세요.')
        inputId.value = "";
        inputPw.value = "";
        return;
    }

    if (success) {
        localStorage.setItem('logIn', true);
        inputId.value = "";
        inputPw.value = "";
        alert('로그인을 성공했습니다.');
        location.href = "http://127.0.0.1:5500/index.html";
    } else {
        alert('아이디와 비밀번호를 확인해주세요.')
    }
}
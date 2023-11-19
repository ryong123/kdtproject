


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
    location.href = "/html/signup.html";
}



function logout() {
    let idData = localStorage.getItem('logInId');
    localStorage.removeItem('logIn');
    localStorage.removeItem('logInId');
    swal(`${idData}님`, "로그아웃 되었습니다!", "info")
        .then((value) => {
            if (value) {
                location.href = 'index.html'
            }
        });
    // alert('로그아웃 되었습니다.');
    // location.href = 'index.html';
}

function login() {
    const inputId = document.getElementById('loginid');
    const inputPw = document.getElementById('loginpw');
    let success;
    if (inputId.value && inputPw.value) {
        if (localStorage.getItem(inputId.value) == inputPw.value) {
            success = true;
        }
        else {
            success = false;
        }
    } else {
        swal("입력 오류", "아이디와 비밀번호를 입력해주세요!", "warning");
        // alert('아이디와 비밀번호를 입력해주세요.')
        inputId.value = "";
        inputPw.value = "";
        return;
    }

    if (success) {
        localStorage.setItem('logIn', true);
        localStorage.setItem('logInId', inputId.value);
        swal(`${inputId.value}님`, "로그인 되었습니다!", "success")
            .then((value) => {
                if (value) {
                    location.href = 'index.html'
                }
            });
        inputId.value = "";
        inputPw.value = "";
        // alert('로그인을 성공했습니다.');
    } else {
        swal("입력 오류", "아이디와 비밀번호를 확인해주세요!", "error");
        inputId.value = "";
        inputPw.value = "";
    }
}
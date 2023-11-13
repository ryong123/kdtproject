$(window).on("load", function () {
    if (localStorage.getItem('loggedIn')) {
        $('#loginbtn').css("display", "none")
    }else{
        $('#logoutbtn').css("display", "none")
    }
});

const checkLoggedIn = () => {
    console.log(localStorage.getItem('loggedIn'))
    if (localStorage.getItem('loggedIn')) {
        alert('로그인 유저입니다.')
    } else {
        location.href = 'login.html'
    }
}

const logout = () => {
    if (localStorage.length == 0) {
        alert('현재 로그아웃 상태입니다.')
    } else {
        localStorage.removeItem('loggedIn')
        alert('로그아웃 되었습니다.')
        location.href = 'index.html'
    }
}
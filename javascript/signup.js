
function closeModal() {
    location.href = "/index.html";
}


function signup() {
    let id = document.getElementById('id');
    let pw = document.getElementById('pw');

    if (id.value && pw.value) {
        console.log(id.value, pw.value);
        localStorage.setItem(id.value, pw.value)
        alert('계정이 생성되었습니다.')
        location.href = "/index.html";
    } else {
        alert('아이디와 비밀번호를 입력해주세요.')
        id.value = "";
        pw.value = "";
        return;
    }

}
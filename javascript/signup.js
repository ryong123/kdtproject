
function closeModal() {
    location.href = "http://127.0.0.1:5501/index.html";
}

function signup() {
    let id = document.getElementById('id').value;
    let pw = document.getElementById('pw').value;
    console.log(id, pw);
    localStorage.setItem(id,pw)

    location.href = "http://127.0.0.1:5501/index.html";
}
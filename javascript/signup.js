function closeModal() {
  location.href = "/index.html";
}

function signup() {
  let id = document.getElementById("id");
  let pw = document.getElementById("pw");

  if (id.value && pw.value) {
    console.log(id.value, pw.value);
    localStorage.setItem(id.value, pw.value);
    swal(`${id.value}님`, "계정이 생성되었습니다!", "success").then((value) => {
      if (value) {
        location.href = "/index.html";
      }
    });
  } else {
    swal("입력 오류", "아이디와 비밀번호를 입력해주세요!", "warning");
    id.value = "";
    pw.value = "";
    return;
  }
}

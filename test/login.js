

const inputId = document.getElementById('loginid');
const inputPw = document.getElementById('loginpw');

const id = 'aaaa';
const pw = '1234';



// 로그인 코드
const login = () => {
    if (inputId.value && inputPw.value) {
        // 아이디와 비밀번호가 입력된 경우
        console.log(`id: ${inputId.value}, pw: ${inputPw.value}`)
        // 아이디 값이 저장된 아이디와 같은지 비교
        if (inputId.value == id) {
            // 비밀번호 값이 저장된 비밀번호와 같은지 비교
            if (inputPw.value == pw) {
                // 아이디와 비밀번호가 모두 같다면 세션스토리지에 'loggedIn'이라는 키의 value를 true로 저장
                // localStorage.setItem('키', '값') : 로컬 스토리지에 해당 키와 값을 저장
                localStorage.setItem('loggedIn', true)  
                inputId.value = ''
                inputPw.value = ''
                alert('로그인을 성공했습니다.')
                location.href="http://127.0.0.1:5500/index.html"
            } else {
                inputPw.value = ''
                alert('비밀번호를 확인해주세요.')
            }
        } else {
            inputId.value = ''
            inputPw.value = ''
            alert('아이디를 확인해주세요.')
        }
    } else {
        alert('아이디와 비밀번호를 입력해주세요.')
    }
}
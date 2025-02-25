const  data = {
    nickname : "ming"
}
console.log(data.nickname);
const nickname = document.querySelector(".nickname")

nickname.innerHTML = `${data.nickname}님 환영합니다.`

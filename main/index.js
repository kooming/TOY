const  user = {
    nickname : "ming"
}

const nickname = document.querySelector(".nickname")

nickname.innerHTML = `${user.nickname}님 환영합니다.`

localStorage.getItem("posts", JSON.stringify)
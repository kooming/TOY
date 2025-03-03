const user = {
    nickname: "ming"
};

const nickname = document.querySelector(".nickname");
nickname.innerHTML = `${user.nickname}님 환영합니다.`;


let data = JSON.parse(localStorage.getItem("posts")) || [];

class Comment {
    constructor(title, text) {
        this.nickname = user.nickname;
        this.title = title;
        this.text = text;
        this.date = this.getToday();
    }

    getToday() {
        const date = new Date();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let h = date.getHours();
        let M = date.getMinutes();
        let s = date.getSeconds();

        const str = [date.getFullYear(), (m > 9 ? "" : "0") + m, (d > 9 ? "" : "0") + d + " "].join("-");
        const str2 = [(h > 9 ? "" : "0") + h, (M > 9 ? "" : "0") + M, (s > 9 ? "" : "0") + s].join(":");
        return str + str2;
    }
}


document.querySelector("#add-form").addEventListener("submit", (event) => {
    event.preventDefault(); 

    const title = document.querySelector("#title").value.trim();
    const text = document.querySelector("#content").value.trim();

    if (title === "" || text === "") {
        alert("제목과 내용을 입력해주세요.");
        return;
    } else {
        const newPost = new Comment(title, text);
        data.push(newPost);

        localStorage.setItem("posts", JSON.stringify(data));

        // 입력 필드 초기화
        document.querySelector("#title").value = "";
        document.querySelector("#content").value = "";

        alert("게시글이 추가되었습니다.");
        window.location.href = "../main/index.html"; 
    }
});

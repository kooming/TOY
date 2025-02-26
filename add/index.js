const  user = {
    nickname : "ming"
}

const nickname = document.querySelector(".nickname")

nickname.innerHTML = `${user.nickname}님 환영합니다.`

let data  = JSON.parse(localStorage.getItem("posts")) || [] ;



class Comment {
    constructor(title,text) {
        this.nickname = user.nickname
        this.title = title
        this.text = text;
        this.date = this.getToday();

    }

    getToday(text,text2) {

        const date = new Date();
        let m = date.getMonth() +1;
        let d = date.getDate();
        let h = date.getHours();
        let M = date.getMinutes();
        let s = date.getSeconds();
        
        const str = [date.getFullYear(), (m > 9 ? "" : "0") + m, (d > 9 ? "" : "0") + d +" "].join(text);
        const str2 = [(h > 9 ? "" : "0") +h, (M > 9 ? "" : "0") +M, (s > 9 ? "" : "0")+ s].join(text2);
        // console.log(str2)
        return  str+str2;
    }
}

const button = document.querySelector(".add");

button.onclick = () => {
    const title = document.querySelector(".title-value").value;
    const text = document.querySelector(".text-value").value;
   
    const newPost = new Comment(title,text)
    data.push(newPost);
    
    localStorage.setItem("posts", JSON.stringify(data));
}


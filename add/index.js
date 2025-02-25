const  user = {
    nickname : "ming"
}
const nickname = document.querySelector(".nickname")

nickname.innerHTML = `${data.nickname}님 환영합니다.`

let data  = [] ;

class Comment {
    constructor(content) {
        this.nickname = user.nickname
        this.titleValue = titleValue
        this.textValue = textValue;
        this.date = new Date(); // 글을 작성한 현재 시간.
        this.getToday
    }
    // 값을 조회하겠다
    getToday(text,text2) {
        // 2025,01,21
        // 날짜의 문자열 형태를 커스텀 하는 내용이 자주 사용되니 메서드로 만들어두자
        const date = this.date;
        let m = date.getMonth() +1;
        let d = date.getDate();
        let h = date.getHours();
        let M = date.getMinutes();
        let s = date.getSeconds();
        
        

        // 배열 메서드 join 
        /*[date.getFullYear(), (m > 9 ? "" : "0") + m, (d > 9 ? "" : "0") + d].join(text);  */
        // 반환값이 string 문자열로 형변환
        // , 요소의 구분 구분의 텍스트를 넣어준다 하나의 문자열로 
        // [1, 2, 3]. join("") === '123'
        // [1, 2, 3]. join("*") === '1*2*3'
        /// text === "-" === 2025-01-21
        const str = [date.getFullYear(), (m > 9 ? "" : "0") + m, (d > 9 ? "" : "0") + d +" "].join(text);
        const str2 = [(h > 9 ? "" : "0") +h, (M > 9 ? "" : "0") +M, (s > 9 ? "" : "0")+ s].join(text2);
        // console.log(str2)
        return  str+str2;
    }
}

const button = document.querySelector(".add");

button.onclick = () => {
    const titleValue = document.querySelector(".title-value").value;
    const textValue = document.querySelector(".text-value").value;
    data[index,titleValue,textValue]
}


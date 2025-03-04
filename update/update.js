document.addEventListener("DOMContentLoaded", () => {
    const user = { nickname: "ming" };

    const nickname = document.querySelector(".nickname");
    nickname.innerHTML = `${user.nickname}님 환영합니다.`;

    // `editPost` 가져오기
    const editPost = JSON.parse(localStorage.getItem("editPost"));

    if (editPost) {
        document.getElementById("title").value = editPost.title;
        document.getElementById("content").value = editPost.text;
    }

    // ✅ 현재 시간을 YYYY-MM-DD HH:mm:ss 형식으로 반환하는 함수
    function getToday() {
        const date = new Date();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let h = date.getHours();
        let M = date.getMinutes();
        let s = date.getSeconds();

        const str = [date.getFullYear(), (m > 9 ? "" : "0") + m, (d > 9 ? "" : "0") + d].join("-");
        const str2 = [(h > 9 ? "" : "0") + h, (M > 9 ? "" : "0") + M, (s > 9 ? "" : "0") + s].join(":");
        return str + " " + str2;
    }

    document.getElementById("edit-form").addEventListener("submit", (event) => {
        event.preventDefault();

        const updatedTitle = document.getElementById("title").value.trim();
        const updatedText = document.getElementById("content").value.trim();

        if (updatedTitle === "" || updatedText === "") {
            alert("제목과 내용을 입력해주세요.");
            return;
        }

        let posts = JSON.parse(localStorage.getItem("posts")) || [];

        // 기존 post 배열에서 해당 post 찾기 (고유한 index 값으로 찾기)
        const postIndex = posts.findIndex(post => post.date === editPost.date);

        if (postIndex !== -1) {
            posts[postIndex].title = updatedTitle;
            posts[postIndex].text = updatedText;
            posts[postIndex].date = getToday(); // ✅ 수정될 때 현재 시간으로 업데이트
            localStorage.setItem("posts", JSON.stringify(posts)); // 수정된 데이터 저장
        }

        localStorage.removeItem("editPost"); // 수정 후 editPost 데이터 삭제
        alert("게시글이 수정되었습니다.");
        window.location.href = "../main/index.html"; // 메인화면으로 이동
    });

    document.querySelector(".cancel-btn").addEventListener("click", () => {
        window.location.href = "../particular/index.html";
    });
});

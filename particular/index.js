const  user = {
    nickname : "ming"
}


const nickname = document.querySelector(".nickname")

nickname.innerHTML = `${user.nickname}님 환영합니다.`

// 로컬스토리지에서 선택된 게시글 가져오기
const selectedPost = JSON.parse(localStorage.getItem("selectedPost"));

// 상세 페이지에서 각 요소에 값 설정
const postTitle = document.getElementById("post-title");
const postText = document.getElementById("post-text");
const postDate = document.getElementById("post-date");

// 게시글의 제목, 내용, 작성일 표시
if (selectedPost) {
    postTitle.innerText = selectedPost.title;
    postText.innerText = selectedPost.text;
    postDate.innerText = selectedPost.date;
}

// 삭제 버튼 클릭 시 처리
const deleteButton = document.querySelector(".btn"); // 삭제 버튼
deleteButton.addEventListener("click", () => {
    // 확인 메시지 띄우기
    const isConfirmed = window.confirm("삭제하시겠습니까?");

    if (isConfirmed) {
        // 로컬스토리지에서 선택된 게시글 삭제
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        const postIndex = posts.findIndex(post => post.title === selectedPost.title); // 삭제할 게시글 찾기

        if (postIndex !== -1) {
            posts.splice(postIndex, 1); // 해당 게시글 삭제
            localStorage.setItem("posts", JSON.stringify(posts)); // 업데이트된 게시글 목록 저장
        }

        // 상세 페이지에서 메인 페이지로 이동
        window.location.href = "../main/index.html"; // 메인 페이지로 돌아가기
    } else {
        // 사용자가 취소 버튼을 눌렀을 때 아무 작업도 하지 않음
        console.log("삭제가 취소되었습니다.");
    }
});

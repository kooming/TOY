document.addEventListener("DOMContentLoaded", () => {
    const user = { nickname: "ming" };

    const nicknameElement = document.querySelector(".nickname");
    if (nicknameElement) {
        nicknameElement.innerHTML = `${user.nickname}님 환영합니다.`;
    }

    // ✅ `localStorage`에서 데이터 가져오기
    let selectedPost = JSON.parse(localStorage.getItem("selectedPost"));

    const postContainer = document.querySelector(".post-container");

    if (postContainer && selectedPost) {
        postContainer.innerHTML = `
            <h2>제목: <span class="post-title">${selectedPost.title}</span></h2>
            <p><strong>내용:</strong> <span class="post-text">${selectedPost.text}</span></p>
            <p><strong>작성자:</strong> ${selectedPost.nickname}</p>
            <p><strong>작성일:</strong> ${selectedPost.date}</p>
            <div class="button-container">
                <button class="edit-btn">수정</button>
                <button class="delete-btn">삭제</button>
            </div>
        `;
    }

    const deleteButton = document.querySelector(".delete-btn");
    if (deleteButton) {
        deleteButton.addEventListener("click", () => {
            const isConfirmed = window.confirm("삭제하시겠습니까?");

            if (isConfirmed) {
                const posts = JSON.parse(localStorage.getItem("posts")) || [];
                const postIndex = posts.findIndex(post => post.date === selectedPost.date);

                if (postIndex !== -1) {
                    posts.splice(postIndex, 1);
                    localStorage.setItem("posts", JSON.stringify(posts));
                }

                localStorage.removeItem("selectedPost"); // ✅ 삭제 후 `selectedPost` 제거
                window.location.href = "../main/index.html"; 
            } else {
                window.alert("삭제가 취소되었습니다.");
            }
        });
    }

    // ✅ 수정 버튼 클릭 시, `editPost` 저장 후 수정 페이지 이동
    const editButton = document.querySelector(".edit-btn");
    if (editButton) {
        editButton.addEventListener("click", () => {
            localStorage.setItem("editPost", JSON.stringify(selectedPost)); // 수정할 데이터 저장
            window.location.href = "../update/update.html"; 
        });
    }
});

// ✅ "뒤로 가기" 이벤트 발생 시 `selectedPost` 삭제
window.addEventListener("popstate", () => {
    localStorage.removeItem("selectedPost"); 
});

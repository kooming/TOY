document.addEventListener("DOMContentLoaded", () => {
    const user = {
        nickname: "ming"
    };

    const nicknameElement = document.querySelector(".nickname");
    if (nicknameElement) {
        nicknameElement.innerHTML = `${user.nickname}님 환영합니다.`;
    }

    const selectedPost = JSON.parse(localStorage.getItem("selectedPost"));

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
                const postIndex = posts.findIndex(post => post.title === selectedPost.title);

                if (postIndex !== -1) {
                    posts.splice(postIndex, 1);
                    localStorage.setItem("posts", JSON.stringify(posts));
                }

                window.location.href = "../main/index.html"; 
            } else {
                window.alert("삭제가 취소되었습니다.");
            }
        });
    }

    // 수정 버튼 처리 -> /update/index.html 로 이동
    const editButton = document.querySelector(".edit-btn");
    if (editButton) {
        editButton.addEventListener("click", () => {
            window.location.href = "../update/update.html"; 
        });
    }
});

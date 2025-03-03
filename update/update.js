
document.addEventListener("DOMContentLoaded", () => {
    const user = { nickname: "ming" }; 

    const nickname = document.querySelector(".nickname");
    nickname.innerHTML = `${user.nickname}님 환영합니다.`
    

    const selectedPost = JSON.parse(localStorage.getItem("selectedPost"));

    if (selectedPost) {
        document.getElementById("title").value = selectedPost.title;
        document.getElementById("content").value = selectedPost.text;
    }

    document.getElementById("edit-form").addEventListener("submit", (event) => {
        event.preventDefault();

        selectedPost.title = document.getElementById("title").value;
        selectedPost.text = document.getElementById("content").value;

        localStorage.setItem("selectedPost", JSON.stringify(selectedPost));

        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        const postIndex = posts.findIndex(post => post.title === selectedPost.title);

        if (postIndex !== -1) {
            posts[postIndex] = selectedPost;
            localStorage.setItem("posts", JSON.stringify(posts));
        }

        alert("게시글이 수정되었습니다.");
        window.location.href = "../particular/index.html"; 
    });

        document.querySelector(".cancel-btn").addEventListener("click", () => {
        window.location.href = "../particular/index.html";
    });
});
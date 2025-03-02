const  user = {
    nickname : "ming"
}


const nickname = document.querySelector(".nickname")

nickname.innerHTML = `${user.nickname}님 환영합니다.`

const posts = JSON.parse(localStorage.getItem("posts")) || [] ;

const bodyContent = document.querySelector(".body-content");

const drawing = () => {
    bodyContent.innerHTML = "";

    posts.forEach((post, index) => {

        const postItem = document.createElement("ul");
        postItem.classList.add("border-header");
        postItem.innerHTML = `
            <li>${index + 1}</li>
            <li class="post-title" data-index="${index}">${post.title}</li>
            <li>${post.text}</li>
            <li>${post.date}</li>
        `;  
        
        // 클릭하면 상세 페이지로 이동
        postItem.onclick = () => {
            localStorage.setItem("selectedPost", JSON.stringify(post)); // 선택한 게시글 저장
            window.location.href = "../particular/index.html"; // 상세 페이지로 이동
        };
        
        const postDate = postItem.querySelector(".post-date");
        if (postDate) {
            postDate.onclick = (e) => {
                e.stopPropagation(); // ✅ 이벤트 전파 방지
            };
        }
        
        bodyContent.append(postItem);
        
    });
};

drawing();


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
        
       
            postItem.onclick = () => {
            localStorage.setItem("selectedPost", JSON.stringify(post)); 
            window.location.href = "../particular/index.html"; 
        };
        

        bodyContent.append(postItem);
        
    });
};

drawing();


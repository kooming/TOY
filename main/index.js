const  user = {
    nickname : "ming"
}


const nickname = document.querySelector(".nickname")

nickname.innerHTML = `${user.nickname}님 환영합니다.`

const posts = JSON.parse(localStorage.getItem("posts")) || [] ;

const bodyContent = document.querySelector(".body-content");

const drawing = () => {
    bodyContent.innerHTML = ""

    posts.forEach((post, index) => {
        console.log(`Post ${index}:`, post);

        const postItem = document.createElement("ul");
        postItem.classList.add("border-item");
        postItem.innerHTML = `
                <li>${index + 1}</li>
                <li>${post.title}</li>
                <li>${post.text}</li>
                <li>${post.date}</li>
                `;  
                bodyContent.append(postItem);
            })
    }
        
drawing();


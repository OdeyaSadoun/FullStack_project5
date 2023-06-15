import React, {  useEffect } from 'react';
import Server from './Server';
import ApplicationPage from './ApplicationPage';

const addUserPosts= async () =>{
  const user = JSON.parse(localStorage.getItem('user'));
  const posts =await Server.getPostsByUserId(user.id);
  const comments = await Server.getCommentsByUserId(user.id);
  const htmlPosts = document.createElement("div");
  posts.forEach(currentPost => {
    const post = document.createElement("div");
    post.classList.add("post-container");
    post.setAttribute('id', "post" + String(currentPost.id));
    var postHtml = ` <h1 id=${"title" + String(currentPost.id)} class="post-title" >${currentPost.title}</h1>
                    <div id=${"content" + String(currentPost.id)} class="post-content">
                    <p> ${currentPost.body}</p>
                    <button class="comment-button" id=${"comBtn" + String(currentPost.id)}>
                    Comments
                    </button>
                    <div class="comment-section">  
                    <div  class="post-actions">
                     <ul  id=${"comments" + String(currentPost.id)} class="comment-list" >`;
    
    comments.forEach(com => {
      if(com.postId===currentPost.id){
              postHtml += `<li class="comment-item">
                      <span class="comment-author"> ${com.email}</span>
                      <br>
                      <span class="comment-author">${com.name} </span>
                      <p class="comment-content">${com.body}</p>
                    </li>`   
      }
    });
    postHtml += `</ul> 
              </div>  </div> </div>` ;
    post.innerHTML = postHtml;
    htmlPosts.appendChild(post);
  });

  const postsContainer = document.querySelector("#posts-container");
  postsContainer.replaceChildren(htmlPosts);
  //show comments by button
  posts.forEach(currentPost => {
    const comBtn = document.querySelector("#comBtn" + String(currentPost.id));
    comBtn.addEventListener('click', () => {
      const commentList = document.querySelector("#comments" + String(currentPost.id));
      if (commentList.style.display === "none") {
        commentList.style.display = "block";
      } else {
        commentList.style.display = "none";
      }
    });
    //show post content by button
    const postLink = document.querySelector("#title" + String(currentPost.id));
    postLink.addEventListener('click', () => {
      const content = document.querySelector("#content" + String(currentPost.id));
      const post = document.querySelector("#post" + String(currentPost.id));
      if (content.style.display === "none") {
        content.style.display = "block";
        post.style.backgroundColor = "yellow";
      } else {
        content.style.display = "none";
        post.style.backgroundColor = "#fff";
      }
    });
  });

};
function Posts() {
  useEffect(() => {
    addUserPosts();
  }, []);
  // State and logic for Posts component
  return (
    <><ApplicationPage></ApplicationPage>
    <div id='posts-container'>
    </div></>
  );
}

export default Posts;

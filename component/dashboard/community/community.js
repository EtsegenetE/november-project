document.addEventListener("DOMContentLoaded", () => {
  const postInput = document.getElementById("post-input");
  const postBtn = document.getElementById("post-btn");
  const postsSection = document.getElementById("posts-section");
  const noPostsMsg = document.getElementById("no-posts-msg");

  let posts = [];

  
  postBtn.addEventListener("click", () => {
    const text = postInput.value.trim();
    if (!text) return;

    posts.push({ text });
    postInput.value = "";
    renderPosts();
  });


  function renderPosts() {
    postsSection.innerHTML = "";

    if (posts.length === 0) {
      postsSection.appendChild(noPostsMsg);
      return;
    }

    posts.forEach(post => {
      const postCard = document.createElement("div");
      postCard.classList.add("post-card");
      postCard.innerHTML = `<p>${post.text}</p>`;
      postsSection.appendChild(postCard);
    });
  }

  renderPosts();
});

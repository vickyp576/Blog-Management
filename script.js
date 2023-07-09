
document.addEventListener("DOMContentLoaded", function() {
  let blogForm = document.getElementById("add-blog-form");
  let blogTitleInput = document.getElementById("blog-title");
  let blogContentInput = document.getElementById("blog-content");
  let blogsList = document.getElementById("blogs");

  blogForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let title = blogTitleInput.value;
    let content = blogContentInput.value;

    if (title && content) {
      addBlog(title, content);
      clearInputs();
    }
  });

  function addBlog(title, content) {
    let blogItem = document.createElement("li");
    blogItem.classList.add("blog-item");

    let titleElement = document.createElement("h2");
    titleElement.textContent = title;

    let contentElement = document.createElement("p");
    contentElement.textContent = content;

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
      editBlog(blogItem);
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      deleteBlog(blogItem);
    });

    blogItem.appendChild(titleElement);
    blogItem.appendChild(contentElement);
    blogItem.appendChild(editButton);
    blogItem.appendChild(deleteButton);

    blogsList.appendChild(blogItem);
  }

  function editBlog(blogItem) {
    let titleElement = blogItem.querySelector("h2");
    let contentElement = blogItem.querySelector("p");

    let newTitle = prompt("Enter the new title:", titleElement.textContent);
    let newContent = prompt("Enter the new content:", contentElement.textContent);

    if (newTitle !== null && newContent !== null) {
      titleElement.textContent = newTitle;
      contentElement.textContent = newContent;
    }
  }

  function deleteBlog(blogItem) {
    blogsList.removeChild(blogItem);
  }

  function clearInputs() {
    blogTitleInput.value = "";
    blogContentInput.value = "";
  }
});

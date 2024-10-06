function login(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if (name === "name" && password === "123") {
        alert("Successful login");

        var form = document.getElementById("myform");
        if (form) {
            form.style.display = "none";
        }

        var postdiv = document.getElementById("postdiv");
        if (postdiv) {
            postdiv.style.display = "block";
        }
    } else {
        alert("Unsuccessful login, please try again");
    }
}

function postMessage() {
    var postText = document.getElementById("posttext").value;
    var postImage = document.getElementById("postImage").files[0];  

    if (postText.trim() === "" && !postImage) {
        alert("Please enter a message or select an image.");
        return;
    }

    var postDiv = document.createElement("div");
    postDiv.style.backgroundColor = "white";
    postDiv.style.marginBottom = "10px";
    postDiv.style.padding = "6px";
    postDiv.style.borderRadius = "5px";

    if (postText.trim() !== "") {
        var newPost = document.createElement("p");
        newPost.textContent = postText;
        postDiv.appendChild(newPost);
    }

    if (postImage) {
        let imgElement = document.createElement('img');
        imgElement.src = URL.createObjectURL(postImage);
        imgElement.alt = 'Post Image';
        imgElement.style.width = '500px';  
        imgElement.style.height = 'auto';  
        imgElement.style.marginTop = '10px';
        postDiv.appendChild(imgElement);
    }

    var postDisplay = document.getElementById("postdisplay");
    if (postDisplay) {
        postDisplay.appendChild(postDiv);
    }

    document.getElementById("posttext").value = "";
    document.getElementById("postImage").value = "";  
}

function logout() {
    var postdiv = document.getElementById("postdiv");
    var form = document.getElementById("myform");

    if (postdiv) {
        postdiv.style.display = "none";  
    }
    if (form) {
        form.style.display = "block"; 
    }
    alert("You have successfully logged out");
}
        
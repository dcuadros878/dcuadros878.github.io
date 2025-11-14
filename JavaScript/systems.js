function myFunction() {
  var x = document.getElementById("theImage");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showImage() {
let imageContainer =
document.createElement("div");
imageContainer.className =
                "image-container";
let image =
document.createElement("img");
image.src ="Images/gonnabealright.jpeg";

let closeButton =
document.createElement("button");
closeButton.textContent = "Close";
closeButton.className ="close-btn";
closeButton.onclick =
                function () {
                    document.body.removeChild(
                        imageContainer
                    );
                };

            imageContainer.appendChild(
                closeButton
            );
            imageContainer.appendChild(image);

            document.body.appendChild(
                imageContainer
            );
        }

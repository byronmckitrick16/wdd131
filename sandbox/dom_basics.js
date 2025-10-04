const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.append(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random Image")
// newImage.src = "https://picsum.photos/200";
document.body.append(newImage);
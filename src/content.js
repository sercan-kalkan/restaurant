import odinImage from "./assets/pasta.jpg";


export function loadPage() {
  const content = document.getElementById("content");
  content.innerHTML="";

  const heading = document.createElement("h1");
  heading.textContent = "Welcome!";
  content.appendChild(heading);

  const paragraph = document.createElement("p");
  paragraph.textContent = "Best restaurant in the citey";
    content.appendChild(paragraph);  
 
      const image = document.createElement("img");
  image.src = odinImage;
  content.appendChild(image);
}
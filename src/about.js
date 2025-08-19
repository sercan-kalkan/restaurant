export function aboutUs () {
  const content = document.getElementById("content");
  content.innerHTML = ""; // içeriği temizle

  const paragraph = document.createElement("p");
  paragraph.textContent = "Our Location";
  content.appendChild(paragraph);
  content.appendChild(paragraph);

const iframe = document.createElement("iframe");

iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.61667439164!2d31.2290761!3d40.858339099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d0b02d6925313%3A0x6e04c37505d4a131!2zT2Nha2JhxZ_EsSBkw7xyw7xt!5e0!3m2!1str!2str!4v1755601181014!5m2!1str!2str";
iframe.width = "600";
iframe.height = "450";
iframe.style.border = "0";
iframe.allowFullscreen = true;
iframe.loading = "lazy";
iframe.referrerPolicy = "no-referrer-when-downgrade";

content.appendChild(iframe);

}
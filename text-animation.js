const text = document.getElementById("floating-text");
const letters = text.innerText.split("");

text.innerText = "";

letters.forEach((letter, index) => {
    const span = document.createElement("span");
    span.innerText = letter === " " ? "\u00A0" : letter;
    span.style.animationDelay = `${index * 0.08}s`;
    text.appendChild(span);
});

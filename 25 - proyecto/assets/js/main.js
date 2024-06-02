let emoji = document.querySelector('.emojis__emoji');

let emojis = ["🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜"];


emoji.addEventListener("mouseleave", () => {

    let random = Math.ceil(Math.random() * emojis.length - 1);
    
    emoji.innerHTML = emojis[random];
    
});
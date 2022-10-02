const sounds = ["C3","C3S", "D3","D3S", "E3", "F3","F3S", "G3", "G3S"];

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn", `"${sound}"`);
    
    
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSound();
        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild(btn);
});

function stopSound() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}
document.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const div = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    div.classList.add('bg-purple-500', 'scale-110');

    setTimeout(() => {
        div.classList.remove('bg-purple-500', 'scale-110');
    }, 100)
});
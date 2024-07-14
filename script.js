let score = 0;

// Event listener untuk tombol tap
document.getElementById('tapButton').addEventListener('click', function() {
    score++;
    document.getElementById('score').innerText = 'Score: ' + score;
});

// Inisialisasi permainan
function initGame() {
    document.getElementById('game').innerHTML = '<button id="tapButton">Tap Me!</button>';
    document.getElementById('game').innerHTML += '<div id="score">Score: 0</div>';
}

// Panggil fungsi inisialisasi
initGame();
  

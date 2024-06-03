document.addEventListener('DOMContentLoaded', function() {
    const savedName = localStorage.getItem('birthdayName');
    const savedImage = localStorage.getItem('birthdayImage');

    if (savedName && savedImage) {
        document.getElementById('name').textContent = savedName;
        document.getElementById('cake-image').src = savedImage;
        document.getElementById('controls').style.display = 'none';
        document.getElementById('toggle-button').style.display = 'block';
    }
});

document.getElementById('submit-button').addEventListener('click', function() {
    const name = document.getElementById('name-input').value;
    const imageSrc = document.getElementById('cake-image').src;

    if (name && imageSrc !== 'cake.jpg') {
        document.getElementById('name').textContent = name;
        document.getElementById('controls').style.display = 'none';
        document.getElementById('toggle-button').style.display = 'block';

        localStorage.setItem('birthdayName', name);
        localStorage.setItem('birthdayImage', imageSrc);
    }
});

document.getElementById('cake-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('cake-image').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('toggle-button').addEventListener('click', function() {
    const controls = document.getElementById('controls');
    if (controls.style.display === 'none' || controls.style.display === '') {
        controls.style.display = 'block';
        document.getElementById('toggle-button').style.display = 'none';
    } else {
        controls.style.display = 'none';
    }
});

function createConfetti() {
    confetti({
        particleCount: 2,
        angle: 90,
        spread: 360,
        origin: { x: Math.random(), y: 0 },
        colors: ['#bb0000', '#ffffff']
    });

    requestAnimationFrame(createConfetti);
}

createConfetti();

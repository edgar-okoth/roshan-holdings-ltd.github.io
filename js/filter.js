function filterImages() {
    const selectedCategory = document.getElementById('filterSelect').value;
    const tyres = document.querySelectorAll('.animate-box');


    tyres.forEach((tyre) => {
        if (selectedCategory === "" || tyre.classList.contains(selectedCategory)) {
            tyre.style.display = 'inline';
        } else {
            tyre.style.display = 'none';
        }
        
        
    });
}

function reloadWindow() {
    var button = document.getElementById('resetButton').addEventListener('click', function(){window.location.reload()})
}
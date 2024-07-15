const questionBoxes = document.querySelectorAll('.questionbox');

questionBoxes.forEach(function(box) {
    box.addEventListener("click", function(e) {
        const questionBox = e.currentTarget;
        const contentBox = questionBox.nextElementSibling;
        const plusButton = questionBox.querySelector('.plus');
        const crossButton = questionBox.querySelector('.cross');

        contentBox.classList.toggle('show-text');

        if (contentBox.classList.contains('show-text')) {
            plusButton.style.display = 'none';
            crossButton.style.display = 'inline-block';
        } else {
            plusButton.style.display = 'inline-block';
            crossButton.style.display = 'none';
        }
    });
});

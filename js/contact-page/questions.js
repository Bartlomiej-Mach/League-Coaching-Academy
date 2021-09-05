const questionName = document.querySelectorAll('.question-list--item');
const textAnswer = document.querySelector('.answer-wrapper');

questionName.forEach((event) => {
    event.addEventListener("click", () => {
        if (event.classList.contains("question--active")) {
            event.classList.remove("question--active");
            
        } else {
            event.classList.add("question--active");
        }
    });
});

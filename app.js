const questions = document.querySelectorAll(".question")


questions.forEach(question => {
	const btn = question.querySelector(".question-btn");
	btn.addEventListener("click", () => {
		// 2 loops, 3x3 to check if other items haven't closed then close immediately
		questions.forEach(item => {
			if(item!==question){
				item.classList.remove("show-text");
			}
		});

		// this expression is used to toggle
		question.classList.toggle("show-text");
	})
});
    document.getElementById("main").addEventListener("submit", function (e) { // Add event listener for form submission
        e.preventDefault(); // Prevent form submission
        const nickname = document.getElementById("nickname").value.trim();
        const city = document.getElementById("city").value.trim();
        const time = document.getElementById("time").value.trim();
        if (!nickname) return alert("Введите никнейм!");
        let score = 0;
        const answers = [];
            for (let i = 1; i <= 8; i++) {
                const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                score += parseInt(selected.value); // Суммируем баллы
                answers.push(selected.value); // Сохраняем ответ в виде массива "0" и "1"
            } else {
                answers.push("Not answered");
              }
            }
        // Определяем обратную связь на основе общего балла    
        let feedback = "";
            if (score <= 2) {
                feedback = "Возможно, у вас есть некоторые нарциссические тенденции, но они не доминируют в вашем поведении.";
            } else if (score <= 5) {
                feedback = "В вас могут быть выраженные нарциссические тенденции, которые могут влиять на ваши отношения и поведение.";
            } else {
                feedback = "Возможно, у вас есть выраженный нарциссический стиль поведения, который может негативно влиять на ваши отношения и общее благополучие.";
            }
        // Сохраняем данные в localStorage    
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("city", city);
        localStorage.setItem("time", time);
        localStorage.setItem("score", score);
        localStorage.setItem("feedback", feedback);
        localStorage.setItem("answers", JSON.stringify(answers));
        window.location.href = "results.html";
    });
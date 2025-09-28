        const nickname = localStorage.getItem("nickname");
        const city = localStorage.getItem("city");
        const time = localStorage.getItem("time");
        const score = localStorage.getItem("score");
        const feedback = localStorage.getItem("feedback");
        const answers = JSON.parse(localStorage.getItem("answers"));
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = `
          <div class="bg-white p-6 rounded-lg shadow-md w-116">  
            <p><strong>Никнейм:</strong> ${nickname}</p>
            <p><strong>Город:</strong> ${city || "Не указан"}</p>
            <p><strong>Время в чате:</strong> ${time || "Не указано"}</p>
            <p><strong>Баллы:</strong> ${score} из 8</p>
            <p>${feedback}</p>
            <h2 class="text-2xl mb-4 pt-4">Ваши ответы:</h2>
            <p><strong>Q1 - </strong> Верите ли вы, что вы особенный и уникальный? -> ${answers[0] === "1" ? "Да" : "Нет"}</p>
            <p><strong>Q2 - </strong> Ожидаете ли вы особого отношения к себе? -> ${answers[1] === "1" ? "Да" : "Нет"}</p>
            <p><strong>Q3 - </strong> Часто ли вы используете других людей для достижения своих целей? -> ${answers[2] === "1" ? "Да" : "Нет"}</p>
            <p><strong>Q4 - </strong> Испытываете ли вы трудности с критикой в свой адрес? -> ${answers[3] === "1" ? "Да" : "Нет"}</p>
            <p><strong>Q5 - </strong> Склонны ли вы переоценивать свои достижения и способности? -> ${answers[4] === "1" ? "Да" : "Нет"}</p>
            <p><strong>Q6 - </strong> Часто ли вы завидуете другим людям? -> ${answers[5] === "1" ? "Да" : "Нет"}</p>
            <p><strong>Q7 - </strong> Испытываете ли вы трудности с эмпатией к другим людям? -> ${answers[6] === "1" ? "Да" : "Нет"}</p>
            <p><strong>Q8 - </strong> Склонны ли вы манипулировать другими людьми для достижения своих целей? -> ${answers[7] === "1" ? "Да" : "Нет"}</p>
        </div>    
        `;
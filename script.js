// Переменные
const button = document.querySelector("#button");
const resultOutput = document.getElementById("result");
const errorOutput = document.getElementById("error");
const loader = document.querySelector(".hidden");
// слушатель на кнопку
button.addEventListener("click", fetchData);

function fetchData() {
    const entity = document.getElementById("entity").value;
    const id = document.getElementById("id").value;
    const url = `https://swapi.py4e.com/api/${entity}/${id}/`;

    // Очистка полей выбора
    resultOutput.innerText = "";
    errorOutput.innerText = "";

    loader.classList.remove("hidden");
    // Запрос на Api
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(JSON.stringify(data));
            loader.classList.add("hidden");
            switch (entity) {
                case "films":
                    resultOutput.textContent = `Фильм: ${JSON.stringify(
                        data.title
                    )}, продюссеры: ${JSON.stringify(data.producer)}`;
                    break;
                case "people":
                    resultOutput.textContent = `Герой: ${JSON.stringify(
                        data.name
                    )}, пол ${JSON.stringify(data.gender)}`;
                    break;
                case "planets":
                    resultOutput.textContent = `Планета: ${JSON.stringify(
                        data.name
                    )}, климат ${JSON.stringify(
                        data.climate
                    )}, диаметр ${JSON.stringify(data.diameter)}`;
                    break;
                case "species":
                    resultOutput.textContent = `Сущность: ${JSON.stringify(
                        data.name
                    )}, средний рост ${JSON.stringify(
                        data.average_height
                    )}, продолжительность жизни ${JSON.stringify(
                        data.average_lifespan
                    )}`;
                    break;
                case "starships":
                    resultOutput.textContent = `Звездный корабль: ${JSON.stringify(
                        data.name
                    )}, модель ${JSON.stringify(data.model)}`;
                    break;
                case "vehicles":
                    resultOutput.textContent = `Транспортное средство: ${JSON.stringify(
                        data.name
                    )}, модель ${JSON.stringify(
                        data.model
                    )}, производитель ${JSON.stringify(data.manufacturer)}`;

                    break;
            }
        })

        .catch((error) => {
            errorOutput.textContent =
                "Произошла ошибка, попробуйте еще раз или выберите другой вариант";
            loader.classList.add("hidden");
        });
}

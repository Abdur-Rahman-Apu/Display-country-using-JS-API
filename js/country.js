const loadData = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountry(data))
}


const displayCountry = data => {
    // console.log(data);
    const parent = document.getElementById('container');
    parent.innerHTML = ``;

    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;

    data.forEach(value => {

        if ((searchValue).toLowerCase() === (value.name.common).toLowerCase()) {
            const child = document.createElement('div');

            const currencyValues = Object.values(value.currencies);
            const languageValues = Object.values(value.languages);
            console.log(languageValues);

            child.innerHTML = ` 
            <img class="img-fluid" src="${value.flags.png}"/>
            <h3 class="text-center my-2">${value.name.common}</h3>

            <p><span class="fw-bold">Capital:</span> ${value.capital[0]}</p>
            <p> <span class="fw-bold me-1">Continent:</span>${value.continents[0]}</p>
            <p> <span class="fw-bold me-1">Population:</span>${value.population}</p>
            <p> <span class="fw-bold me-1">Currency:</span>${currencyValues[0].name}</p>
            <p> <span class="fw-bold me-1">Common languages:</span>${languageValues.map(x => x)}</p>
            `;

            parent.appendChild(child);
        }
    });
}
// Craete Card
function createCard(country) {
    return `
    <div class="box">

        <img class="boximg" src="${country.flags.svg}" alt="">

        <div class="info">

            <h3 class="name">${country.name.common}</h3>

            <div class="text">
                 <p>population:</p><span id="population">${country.population}</span>
            </div>

            <div class="text">
                <p>region:</p><span class="regionName">${country.region}</span>
            </div>

            <div class="text">
                <p>capital:</p><span id="capital">${country.capital[0]}</span>
            </div>

        </div>
                    
    </div>
    `
}

// export
export { createCard as cardRow } 
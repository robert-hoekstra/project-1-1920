// render data
function Hulp(data){
    const main = document.querySelector('main');
    console.log("main", main)
    main.innerHTML = `    <main>
    <h1>Hoe maak ik een werkstuk?</h1>
    <p>Een werkstuk is een uitgebreid verslag over een onderwerp. Dat kan van alles zijn! Met een werkstuk schrijf je
        een verslag over verschillende dingen die binnen een onderwerp voorkomen.</p>
    <h2>Onderwerp kiezen</h2>
    <p>Om te beginnen kies je eerst een onderwerp. Het kan zijn dat je een onderwerp van school hebt meegekregen. Maar
        als je zelf een onderwerp kan kiezen dan is het een goed begin om voor je eerste werkstuk een onderwerp te
        kiezen dat bij je past!</p>
    <h2>Onderzoek doen</h2>
    <p>Nadat je een onderwerp hebt gekozen moet je onderzoek doen. Wanneer je onderzoek doet ga je op zoek naar allemaal
        informatie dat over jouw onderwerp gaat. Deze informatie noemen we ook wel bronnen. </p>
    <h2>Bronnen zoeken</h2>
    <p>Bronnen zijn informatiedragers. Een verzameling van goede bronnen zorgt voor een goed onderzoek voor jouw
        werkstuk. Bronnen kunnen bijvoorbeeld boeken zijn. Maar ook foto's, videos en audioberichten zijn bronnen!</p>
    <h2>Schrijven</h2>
    <p>Nu je jouw onderzoek hebt afgerond is het belangerijk om te gaan schrijven! Een werkstuk schrijf je uit op papier
        of op de computer. Denk daarbij aan een goede titel en welke onderwerpen jij wilt behandelen. Dit worden
        namelijk jouw hoofdstukken! Een voorbeeld van een werkstuk kan zijn: <ul id="list">
            <li>Titel: Nederlandse Auto's</li>
            <li>Voorwoord</li>
            <li>Hoofdstuk 1: DAF</li>
            <li>Hoofdstuk 2: Spyker </li>
            <li>Hoofdstuk 3: Donkervoort</li>
            <li>Conclussie</li>
            <li>Bronvermelding</li>
        </ul>
    </p>
    <h2>Bronnenlijst</h2>
    <p>Een bronnenlijst bevat alle informatie die jij hebt gevonden. Je vermeld hier de auteur van de bron en waar je de
        bron hebt gevonden. Je vermeld ook de datum van wanneer je de bron hebt gevonden.</p>
    <h2>Tips</h2>
    <p>
        <ul id="list">
            <li>Kies een onderwerp dat interessant is.</li>
            <li>Bezoek de bibliotheek voor goede bronnen</li>
            <li>Schets eerst de structuur van jouw werkstuk</li>
            <li>Wat zijn de kernwoorden? Schrijf deze op!</li>
            <li>Schrijf elke keer als je een bron hebt gevonden de informatie op voor in je Bronvermelding</li>
        </ul>
    </p>

    <img class="avatar" src="./images/boekje/happy.png" alt="Booky">
    <p>Klaar om een werstuk te gaan maken? Druk op "Nieuw Werkstuk" bovenaan de website!</p>
</main>`
  };

function Data(data) {
    const main = document.querySelector('main');
    const header = document.querySelectorAll('h1')
    const paragraph = document.querySelectorAll('p')
    const results = data.results;
    console.dir(results);
    paragraph[0].innerText = `"Om een goed werkstuk te maken heb je informatie nodig. Informatie haal je uit bronnen. Bronnen kunnen bijvoorbeeld boeken zijn. Maar ook video's op youtube of plaatjes kunnen goede bronnen zijn! Door op een van de boeken te klikken in de lijst kun je direct zien waar je het boek kunt ophalen, super handig!"`
    header[0].innerText = "Kies een interessant boek!";
    main.innerHTML = ""
    main.classList.add("grid")
    results.forEach((item, i) => {
      const html = `
      <a href="${item.detailLink}" target="window">
              <article id="detail">
                <h2>${item.titles[0]}</h2>
                <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                <img src="${
                  item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                }">

                <span class="aantal" style="display:block">Aantal beschikbare exemplaren: ${item.frabl.cnt} </span>
              </article>
        </a>
            `;
      main.insertAdjacentHTML('beforeend', html);
    });
  }



// render data
function Search() {
    const main = document.querySelector('main');
    const header = document.querySelectorAll('h1')
    const div = document.getElementById('instructions')
    if(div !== null){
        div.innerHTML = ""
    }

    console.log(div)
    console.log(header, "ja")
    main.innerHTML = ""
    main.classList.add("grid")
    main.insertAdjacentHTML('beforebegin', `<div id="instructions"><h1>Kies een leuk onderwerp</h1> <br> <div class=flex> <img class="avatar" src="./images/boekje/happy.png" alt="Booky"> <p>"Een onderwerp vormt de basis van jouw werkstuk. Kies een onderwerp die bij jou past. Vind je het bijvoorbeeld leuk om films te kijken met ridders? Kijk dan eens naar geschiedenis!"</p></div></div>`);
    const subjects = ['Geschiedenis', 'Dieren', 'Landen en Steden', 'Sport en Hobby', 'Natuur', 'Bekende Personen', 'Mens & Gezondheid', 'Beroepen', ]



    subjects.forEach((subjects, i) => {
        const html = `
        <a href=#${subjects}>
        <article id="${subjects}">
        <h2>${subjects}</h2>
        </article>`;
        main.insertAdjacentHTML('beforeend', html)

    })
}

  export default {Hulp, Data, Search}
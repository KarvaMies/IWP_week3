import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const municipalityTable = document.getElementById("tbody");

fetchData();

async function fetchData() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const dataPromise = await fetch(url);
  const dataJSON = await dataPromise.json();

  const url2 =
    "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";
  const employmentPromise = await fetch(url2);
  const employmentJSON = await employmentPromise.json();

  let table = [];
  table = dataJSON.dataset.dimension.Alue.category.label;

  let municipalities = [];
  let population = [];
  population = dataJSON.dataset.value;
  let employment = [];
  employment = employmentJSON.dataset.value;

  let amount = 0;
  for (let key in table) {
    municipalities[amount] = table[key];
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    td1.innerText = municipalities[amount];
    td2.innerText = population[amount];
    td3.innerText = employment[amount];
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    municipalityTable.appendChild(tr);
    amount++;
  }
}

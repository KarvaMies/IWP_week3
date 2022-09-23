import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const municipalityTable = document.getElementById("municipality");

fetchData();

async function fetchData() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const dataPromise = await fetch(url);
  const dataJSON = await dataPromise.json();

  //index = dataJSON.dataset.dimension.Alue.category.index
  //console.log(dataJSON.dataset.dimension.Alue.category.label)

  let table = [];
  table = dataJSON.dataset.dimension.Alue.category.label;

  let municipalities = [];

  let amount = 0;
  for (let key in table) {
    municipalities[amount] = table[key];
    amount++;
  }
  //console.log(municipalities);

  let population = [];
  population = dataJSON.dataset.value;
  //console.log(population);

  for (let i = 0; i < amount; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    //console.log("Kaupunki: " + municipalities[i] + "," + population[i]);
    td1.innerText = municipalities[i];
    td2.innerText = population[i];
    tr.appendChild(td1);
    tr.appendChild(td2);

    municipalityTable.appendChild(tr);
  }
}

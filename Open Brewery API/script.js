async function getapi() {
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const users = await data.json();

    let tab="";
    users.forEach((r) => {
      tab += `
      <div class="brewery">
      <p>${r.name}</p>
      <p>${r.brewery_type}</p>
      <p>${r.address_2}</p>
      <p>${r.address_3}</p>
      <p>${r.website_url}</p>
      <p>${r.phone}</p>
      </div>
      `;
    });

    console.log(users);
    document.getElementById("brewery").innerHTML = tab;
}

getapi();

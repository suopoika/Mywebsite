function countCosts() {
  // Hakee syötteet input-kentistä
  const kilometers = parseFloat(document.getElementById("kilometers").value);
  const price = parseFloat(document.getElementById("price").value);
  const consumption = parseFloat(document.getElementById("consumption").value);

  if (isNaN(kilometers) || isNaN(price) || isNaN(consumption)) {
      alert("Please enter valid numbers for kilometers, price, and consumption.");
      return;
  }

  // Laskee kulutuksen
  const cost = (kilometers / 100) * consumption * price;

  // Aseta tulos readonly-input-kenttään
  document.getElementById("cost").value = cost.toFixed(2) + " €";
}
const inputFields = document.querySelectorAll("input[type='text']");
inputFields.forEach((inputField) => {
    inputField.addEventListener("input", function() {
        // Tarkista, onko kentissä tyhjiä arvoja
        const isEmpty = Array.from(inputFields).some((field) => field.value === "");

        // Jos jokin kenttä on tyhjä, nollaa "cost" -kenttä
        if (isEmpty) {
            document.getElementById("cost").value = "";
        }
    });
});






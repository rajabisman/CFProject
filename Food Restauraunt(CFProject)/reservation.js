let availableTables = 10;
const maxTables = 10;

document
  .getElementById("reservation-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    if (availableTables > 0) {
      const name = document.getElementById("name").value;
      const number = document.getElementById("number").value;
      const time = document.getElementById("time").value;

      availableTables--;

      document.getElementById("slip-name").innerText = name;
      document.getElementById("slip-number").innerText = number;
      document.getElementById("slip-time").innerText = time;
      document.getElementById("slip-table").innerText =
        maxTables - availableTables;

      document.getElementById("slip").classList.remove("hidden");
      document.getElementById(
        "available-tables"
      ).innerText = `Available Tables: ${availableTables}`;
    } else {
      alert("No tables available!");
    }

    document.getElementById("reservation-form").reset();
  });

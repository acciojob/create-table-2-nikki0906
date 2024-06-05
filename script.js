document.getElementById('createTableBtn').addEventListener('click', createTable);

function createTable() {
    // Prompt the user for the number of rows and columns
    const rows = prompt("Input number of rows");
    const columns = prompt("Input number of columns");

    // Get the table element
    const table = document.getElementById('myTable');

    // Clear any existing table content
    table.innerHTML = '';

    // Create the table rows and columns
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
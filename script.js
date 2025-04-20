//your JS code here. If required.
let btn = document.getElementById("submit");
let booklist = document.querySelector("#book-list");

btn.addEventListener("click", (e) => {
	e.preventDefault();
    e.preventDefault(); // avoid page reload if in a form

    let t = document.getElementById("title").value.trim();
    let a = document.getElementById("author").value.trim();
    let i = document.getElementById("isbn").value.trim();

    if (t && a && i) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${t}</td>
            <td>${a}</td>
            <td>${i}</td>
            <td><button class="delete">X</button></td>
        `;
        booklist.appendChild(row);

        // Clear the input fields
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    } else {
        alert("Please fill all the fields");
    }
});

// Delete row on clicking X
booklist.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.closest("tr").remove();
    }
});

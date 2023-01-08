let arr = [];

const handleOnSubmit = (event) => {
    event.preventDefault();

    const name = document.querySelector(".input-name").value;
    const mail = document.querySelector(".input-mail").value;
    const salary = Number(document.querySelector(".input-salary").value);
    const city = document.querySelector(".input-city").value;
    const obj = {
        key: arr.length,
        name: name,
        mail: mail,
        salary: salary,
        city: city,
    };
    arr.push(obj);
    renderForm();
};
const renderForm = () => {
    const tableTag = document.querySelector(".render-table");
    tableTag.innerHTML = `
        <table>
        <th>Full name</th>
        <th>Email</th>
        <th>Salary</th>
        <th>City</th>
        <th>Action</th>

    `;

    arr.forEach((element) => {
        tableTag.innerHTML += `
    <tr>
        <td>${element.name}</td>
        <td>${element.mail}</td>       
        <td>${element.salary}</td>       
        <td>${element.city}</td>       
        <td><a onClick="handleDelete(${element.key})">Delete</a></td>
    </tr>
    `;
    });
    tableTag.innerHTML += `</table>`;
};

const handleDelete = (index) => {
    arr.splice(index, 1);
    renderForm();
};

const main = () => {
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", handleOnSubmit);
};
main();

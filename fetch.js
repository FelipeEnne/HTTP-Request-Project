//fetch
//ajax
const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

function getUsers(e) {
  e.preventDefault();

  fetch("users.json")
    .then((resp) => {
      return resp.json();
    })
    .then((users) => {
      let output = "";
      users.forEach((user) => {
        output += `
          <hr>
          <ul>
            <li>id: ${user.id}</li>
            <li>name: ${user.name}</li>
            <li>age: ${user.age}</li>
            <li>email: ${user.email}</li>
          </ul>
          `;
      });
      document.getElementById("users").innerHTML = output;
    });
}

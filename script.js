//ajax

const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

function getUsers(e) {
  e.preventDefault();

  const http = new XMLHttpRequest();

  http.open("GET", "users.json", true);
  http.onload = function () {
    if (this.status === 200) {
      //console.log(this.responseText);

      const users = JSON.parse(this.responseText);

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
    }
  };
  http.send();
}

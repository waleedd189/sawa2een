
const password = "123456";
const driverData = {
  "101": { "يوريا": 11, "فحم لافارج": 15 },
  "102": { "يوريا": 8, "فحم لافارج": 19 }
};

function login() {
  const code = document.getElementById("driverCode").value;
  const pass = document.getElementById("password").value;
  if (pass === password && driverData[code]) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("data-screen").style.display = "block";
    const tbody = document.querySelector("#projectsTable tbody");
    tbody.innerHTML = "";
    Object.entries(driverData[code]).forEach(([project, count]) => {
      const row = `<tr><td>${project}</td><td>${count}</td></tr>`;
      tbody.innerHTML += row;
    });
  } else {
    alert("كود غير صحيح أو كلمة مرور خاطئة");
  }
}

function logout() {
  document.getElementById("login-screen").style.display = "block";
  document.getElementById("data-screen").style.display = "none";
}

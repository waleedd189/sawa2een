
const password = "123456";
function login() {
  const code = document.getElementById("driverCode").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (pass !== password) {
    alert("كلمة مرور خاطئة");
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbxL0hGtrOryVT9kt19sU3g5bEugfvqVNvmWz-8mFee8vAQRQzBU9-BFO5jt9NCa1uwJ/exec")
    .then(res => res.json())
    .then(data => {
      const rows = data.filter(row => row["كود السائق"] == code);
      if (rows.length === 0) {
        alert("كود غير موجود");
        return;
      }

      document.getElementById("login-screen").style.display = "none";
      document.getElementById("data-screen").style.display = "block";

      const tbody = document.querySelector("#projectsTable tbody");
      tbody.innerHTML = "";
      rows.forEach(row => {
        tbody.innerHTML += `<tr><td>${row["اسم المشروع"]}</td><td>${row["عدد النقلات"]}</td></tr>`;
      });
    });
}

function logout() {
  document.getElementById("login-screen").style.display = "block";
  document.getElementById("data-screen").style.display = "none";
}

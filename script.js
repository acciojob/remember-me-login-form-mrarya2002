//your JS code here. If required.
const form = document.querySelector("#form");
      const existingBtn = document.querySelector("#existing");

      // Check if credentials exist in localStorage
      let savedData = JSON.parse(localStorage.getItem("data"));
      if (savedData) {
        existingBtn.style.display = "block";
        existingBtn.addEventListener("click", () => {
          alert("Logged in as " + savedData.name);
        });
      }

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        let name = document.querySelector("#username").value;
        let pass = document.querySelector("#password").value;
        let remember = document.querySelector("#checkbox").checked;

        alert("Logged in as " + name);

        if (remember) {
          localStorage.setItem("data", JSON.stringify({ name, pass }));
        } else {
          localStorage.removeItem("data");
        }
      });
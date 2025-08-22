// script.js

// === Dark / Light Mode Toggle ===
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#theme-toggle");

  // Cek preferensi user sebelumnya
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }

  // Event listener untuk toggle
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});

// === Smooth Scroll for Nav Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const repoInput = document.getElementById("repoInput");
  const fileInput = document.getElementById("fileInput");
  const colabBtn = document.getElementById("colabBtn");

  colabBtn.addEventListener("click", () => {
    const repo = repoInput.value.trim();
    const file = fileInput.value.trim();

    if (repo && file) {
      const url = `https://colab.research.google.com/github/${repo}/blob/main/${file}`;
      window.open(url, "_blank");
    } else {
      alert("Harap isi nama repo dan file notebook!");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("open-vscode");

  if (btn) {
    btn.addEventListener("click", () => {
      const repo = "HarryNurIsnandar/Data-Classification-and-Summarization-Using-IBM-Granite";
      const vscodeDesktop = `vscode://vscode.git/clone?url=https://github.com/${repo}`;
      const vscodeWeb = `https://vscode.dev/github/${repo}`;

      // coba buka VS Code Desktop
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = vscodeDesktop;
      document.body.appendChild(iframe);

      // kalau gagal dalam 2 detik, fallback ke web
      setTimeout(() => {
        window.location.href = vscodeWeb;
      }, 2000);
    });
  }
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const vscodeBtn = document.getElementById("vscodeBtn");

  vscodeBtn.addEventListener("click", () => {
    const repoUrl = "https://github.com/HarryNurIsnandar/Data-Classification-and-Summarization-Using-IBM-Granite";
    
    // Untuk VS Code Desktop (butuh ekstensi GitHub di VS Code)
    const vscodeUrl = `vscode://vscode.git/clone?url=${encodeURIComponent(repoUrl)}`;

    window.location.href = vscodeUrl;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const colabBtn = document.getElementById("colabBtn");

  colabBtn.addEventListener("click", () => {
    const repo = "HarryNurIsnandar/Data-Classification-and-Summarization-Using-IBM-Granite";
    const file = "notebooks/demo.ipynb"; // <-- ganti sesuai nama file notebook yang ada
    const url = `https://colab.research.google.com/github/${repo}/blob/main/${file}`;

    window.open(url, "_blank");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const vscodeBtn = document.getElementById("vscodeBtn");

  vscodeBtn.addEventListener("click", () => {
    const repoUrl = "https://github.com/HarryNurIsnandar/Data-Classification-and-Summarization-Using-IBM-Granite";
    
    // Skema URL untuk buka repo di VS Code Desktop
    const vscodeUrl = `vscode://vscode.git/clone?url=${encodeURIComponent(repoUrl)}`;

    window.location.href = vscodeUrl;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("projectForm");
  const toggleBtn = document.getElementById("toggleFormBtn");
  const projectList = document.getElementById("project-list");

  // tombol buka/tutup form
  toggleBtn.addEventListener("click", () => {
    if (form.style.display === "none") {
      form.style.display = "block";
      toggleBtn.textContent = "✖ Tutup Form";
    } else {
      form.style.display = "none";
      toggleBtn.textContent = "+ Tambah Project";
    }
  });

  // submit project
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const desc = document.getElementById("description").value;
    const repo = document.getElementById("repo").value;

    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <h3>${title} (${year})</h3>
      <p>${desc}</p>
      <a href="${repo}" target="_blank">🔗 Repository</a>
    `;

    projectList.appendChild(card);

    form.reset();
    form.style.display = "none";
    toggleBtn.textContent = "+ Tambah Project";
  });
});

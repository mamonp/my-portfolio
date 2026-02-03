document.getElementById("year").textContent = new Date().getFullYear();

const copyBtn = document.getElementById("copyEmail");
copyBtn.addEventListener("click", async () => {
  const email = "you@example.com"; // change this to your real email
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy email"), 1200);
  } catch {
    alert("Copy failed — copy manually: " + email);
  }
});

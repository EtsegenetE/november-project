// insert email input HTML
fetch("components/inputs/email-input.html")
  .then((res) => {
    if (!res.ok) throw new Error("Email component load failed");
    return res.text();
  })
  .then((html) => {
    document.getElementById("emailComponent").innerHTML = html;
  })
  .catch((err) => {
    console.error(err);
    // fallback: simple input if fetch fails
    document.getElementById("emailComponent").innerHTML = `
      <div class="email-wrapper">
        <label for="emailInput">Email Address *</label>
        <input id="emailInput" type="email" class="email input-field" placeholder="hello@example.com" required />
      </div>`;
  });

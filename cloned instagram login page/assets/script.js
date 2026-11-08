(() => {
  const form   = document.getElementById('loginForm');
  const user   = document.getElementById('username');
  const pass   = document.getElementById('password');
  const btn    = document.getElementById('loginBtn');
  const toggle = document.getElementById('togglePw');
  const msg    = document.getElementById('formMsg');

  // Enable the button only when a username exists and the password has 6+ characters
  const validate = () => {
    btn.disabled = !(user.value.trim() && pass.value.length >= 6);
  };
  user.addEventListener('input', validate);
  pass.addEventListener('input', validate);

  // Show / Hide password
  toggle.addEventListener('click', () => {
    const showing = pass.type === 'text';
    pass.type = showing ? 'password' : 'text';
    toggle.textContent = showing ? 'Show' : 'Hide';
    toggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
    pass.focus();
  });

  // Demo submit: spinner only. Nothing is sent anywhere.
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (btn.disabled) return;
    msg.hidden = true;
    btn.classList.add('loading');
    btn.disabled = true;
    setTimeout(() => {
      btn.classList.remove('loading');
      validate();
      msg.textContent = 'This is a demo page. No data is sent anywhere.';
      msg.hidden = false;
    }, 1200);
  });

  // Placeholder links should not jump to the top of the page
  document.querySelectorAll('a[href="#"]').forEach((a) =>
    a.addEventListener('click', (e) => e.preventDefault())
  );

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();
})();
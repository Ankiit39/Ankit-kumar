// small interactivity
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('cta').addEventListener('click', () => {
  alert('You clicked the CTA button — nice!');
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };
  // in a real site, you'd send data to a server here
  document.getElementById('formMsg').textContent = `Thanks, ${data.name}! Message received.`;
  form.reset();
});

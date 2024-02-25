document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const caption = urlParams.get('caption');
  const rating = urlParams.get('rating');

  document.getElementById('caption').innerText = caption;
  document.getElementById('rating').innerText = `Rating: ${'★'.repeat(parseInt(rating))}${'☆'.repeat(5 - parseInt(rating))} (${rating}/5)`;
});

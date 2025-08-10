// Embeddable loader script
(function() {
  const iframe = document.createElement('iframe');
  iframe.src = 'http://localhost:5173';
  iframe.style.position = 'fixed';
  iframe.style.bottom = '20px';
  iframe.style.right = '20px';
  iframe.style.width = '400px';
  iframe.style.height = '500px';
  iframe.style.border = '1px solid #ccc';
  iframe.style.zIndex = '9999';
  document.body.appendChild(iframe);
})();

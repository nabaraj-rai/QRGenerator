const urlInput = document.getElementById('url-input');
const generateButton = document.getElementById('generate-button');
const qrCodeContainer = document.querySelector('.qr-code-container');
const qrCodeImg = document.getElementById('qr-code');
const colorInput = document.getElementById('color-input');
const backgroundInput = document.getElementById('background-input');
const sizeInput = document.getElementById('size-input');

generateButton.addEventListener('click', generateQRCode);

function generateQRCode() {
    const url = urlInput.value;
    const qr = new QRious({
        value: url,
        size: sizeInput.value,
        foreground: colorInput.value,
        background: backgroundInput.value,
    });

    qrCodeImg.src = qr.toDataURL();
    qrCodeContainer.style.display = 'block';
}

// 
// Toggle Menu
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(function (item) {
      const title = item.querySelector('.accordion-title');
  
      title.addEventListener('click', function () {
        // Toggle the active class to expand/collapse the accordion
        item.classList.toggle('active');
  
        // Toggle the arrow direction
        const arrow = title.querySelector('.arrow');
        arrow.textContent = item.classList.contains('active') ? '▲' : '▼';
  
        // Collapse other accordion items
        accordionItems.forEach(function (otherItem) {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.arrow').textContent = '▼';
          }
        });
      });
    });
  });


function mail(){
    window.location.href = "mailto:contact@frontyweb.com";
}
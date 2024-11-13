document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const linkInput = document.getElementById('linkInput').value;
    const qrCodeImg = document.getElementById('qrCode');
    const qrContainer = document.getElementById('qrContainer');

    // Generate QR code using an external API
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(linkInput)}&size=200x200`;

    qrCodeImg.src = qrApiUrl;
    qrContainer.classList.add('active');
});
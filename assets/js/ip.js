document.addEventListener("DOMContentLoaded", function() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const banner = document.createElement('div');
            banner.style.position = 'fixed';
            banner.style.bottom = '0';
            banner.style.width = '100%';
            banner.style.backgroundColor = '#00333';
            banner.style.color = '#228B22';
            banner.style.textAlign = 'center';
            banner.style.padding = '10px';
            banner.innerHTML = `IP: ${data.ip} | City: ${data.city} | Region: ${data.region} | Country: ${data.country_name}`;
            document.body.appendChild(banner);
        })
        .catch(error => console.error('Error fetching visitor info:', error));
});

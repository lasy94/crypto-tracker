fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        document.getElementById('price').innerText = '$' + data.bitcoin.usd;
    });

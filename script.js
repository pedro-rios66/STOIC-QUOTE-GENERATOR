async function fetchStoicQuote() {
    try {
        const response = await fetch('https://stoic-quotes.com/api/quote');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        document.getElementById('frase').textContent = `${data.text} - ${data.author}`;
    

    } catch (error) {
        console.error("Erro ao buscar frase:", error);
        document.getElementById('phrase').textContent = "Não foi possível carregar a frase. Tente novamente.";
    }
}

document.getElementById('generate-btn').addEventListener('click', fetchStoicQuote);

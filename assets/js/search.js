<script>
  async function fetchSearchResults(query) {
    const apiKey = '92ac7b781e558c0575536670f0bc1b94a3b9f2a6';
    const searchEngineId = '4155ef3ab996249ce';
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${searchEngineId}`;

    const response = await fetch(url);
    const data = await response.json();
    return data.items;
  }

  document.getElementById('search-input').addEventListener('input', async (event) => {
    const query = event.target.value;
    if (query.length > 2) {
      const results = await fetchSearchResults(query);
      const resultsContainer = document.getElementById('results-container');
      resultsContainer.innerHTML = results.map(result => `
        <div>
          <h3><a href="${result.link}">${result.title}</a></h3>
          <p>${result.snippet}</p>
        </div>
      `).join('');
    }
  });
</script>

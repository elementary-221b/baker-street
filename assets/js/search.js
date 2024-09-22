// Floating Search Bar
const searchButton = document.querySelector('.floating-search-bar button');
searchButton.addEventListener('click', () => {
    const query = document.querySelector('.floating-search-bar input').value;
    // Implement search functionality here
    console.log('Searching for:', query);
});

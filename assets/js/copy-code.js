// We use window.onload to ensure EVERYTHING (styles, themes, etc.) is ready
window.onload = function() {
    console.log("Sherlock's Script: The game is afoot. Scanning now...");
    
    // We search for the specific class you found, and any standard code tags
    const suspects = document.querySelectorAll('code.highlighter-rouge, .highlight code, pre code');
    
    console.log("Sherlock's Script: Found " + suspects.length + " code elements.");

    suspects.forEach(function(code, index) {
        // Create the button
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copy';

        // Anchor the button to the parent of the code tag
        const container = code.parentElement;
        container.style.position = 'relative';
        
        button.addEventListener('click', function() {
            navigator.clipboard.writeText(code.innerText).then(function() {
                button.innerText = 'Copied!';
                setTimeout(() => { button.innerText = 'Copy'; }, 2000);
            });
        });

        container.appendChild(button);
        console.log("Sherlock's Script: Button attached to suspect #" + (index + 1));
    });
};

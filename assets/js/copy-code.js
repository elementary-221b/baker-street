window.onload = function() {
    console.log("Sherlock's Script: Scanning for individual code snippets...");
    
    // Target the code tags directly
    const snippets = document.querySelectorAll('code.highlighter-rouge');
    
    console.log("Sherlock's Script: Found " + snippets.length + " snippets.");

    snippets.forEach(function(snippet, index) {
        // 1. Make the snippet a relative container so the button stays inside it
        snippet.style.position = 'relative';
        snippet.style.display = 'inline-block'; // Essential for inline snippets
        snippet.style.paddingRight = '45px';    // Make a small space for the button
        snippet.style.margin = '2px';           // Prevent snippets from touching
        
        // 2. Create the button
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copy';

        // 3. The Logic
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent any paragraph clicks
            const textToCopy = snippet.innerText.replace('Copy', '').trim();
            
            navigator.clipboard.writeText(textToCopy).then(function() {
                button.innerText = '✓';
                button.style.background = '#4CAF50'; // Green for success
                setTimeout(() => { 
                    button.innerText = 'Copy'; 
                    button.style.background = '#ce887b'; // Back to theme color
                }, 1500);
            });
        });

        snippet.appendChild(button);
        console.log("Sherlock's Script: Button attached to snippet #" + (index + 1));
    });
};

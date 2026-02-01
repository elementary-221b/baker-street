window.onload = function() {
    const snippets = document.querySelectorAll('code.highlighter-rouge');
    
    // The SVG Icon for the clipboard
    const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`;
    const successIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

    snippets.forEach(function(snippet) {
        snippet.style.position = 'relative';
        snippet.style.display = 'inline-block';
        snippet.style.paddingRight = '38px'; // Slightly tighter for an icon
        
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerHTML = copyIcon; // Inject the SVG

        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Clean the text to ensure the button text/icon isn't copied
            const textToCopy = snippet.innerText.trim();
            
            navigator.clipboard.writeText(textToCopy).then(function() {
                button.innerHTML = successIcon;
                button.style.backgroundColor = '#4CAF50'; 
                setTimeout(() => { 
                    button.innerHTML = copyIcon;
                    button.style.backgroundColor = '#ce887b';
                }, 1500);
            });
        });

        snippet.appendChild(button);
    });
};

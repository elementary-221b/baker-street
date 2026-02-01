document.addEventListener('DOMContentLoaded', function() {
    // We are now hunting for the specific class identified in the elements tab
    const codeBlocks = document.querySelectorAll('.highlighter-rouge');
    
    console.log("Sherlock's Script: Found " + codeBlocks.length + " code elements.");

    codeBlocks.forEach(function(block, index) {
        // Create the button
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copy';

        button.addEventListener('click', function() {
            // Snatch the text directly from the block
            const textToCopy = block.innerText;

            navigator.clipboard.writeText(textToCopy).then(function() {
                button.innerText = 'Copied!';
                setTimeout(() => { button.innerText = 'Copy'; }, 2000);
            });
        });

        // The 'code' tag needs to be positioned for the button to anchor to it
        block.style.position = 'relative';
        block.style.display = 'inline-block'; // Or 'block' if it's a standalone line
        
        block.appendChild(button);
        console.log("Sherlock's Script: Button attached to block #" + (index + 1));
    });
});

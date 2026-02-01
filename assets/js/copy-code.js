document.addEventListener('DOMContentLoaded', function() {
    console.log("Sherlock's Script: Searching for code blocks...");
    
    const codeBlocks = document.querySelectorAll('pre');
    console.log("Sherlock's Script: Found " + codeBlocks.length + " blocks.");

    codeBlocks.forEach(function(codeBlock, index) {
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copy';
        button.style.border = "2px solid red"; // Temporary bright border for visibility

        button.addEventListener('click', function() {
            const code = codeBlock.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(function() {
                button.innerText = 'Copied!';
                setTimeout(() => { button.innerText = 'Copy'; }, 2000);
            });
        });

        codeBlock.appendChild(button);
        console.log("Sherlock's Script: Button attached to block #" + index);
    });
});

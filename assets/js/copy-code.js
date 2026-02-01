document.querySelectorAll('pre').forEach((codeBlock) => {
    // Create the button
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.innerText = 'Copy';

    // The event: When clicked, move text to clipboard
    button.addEventListener('click', () => {
        const code = codeBlock.querySelector('code').innerText;
        navigator.clipboard.writeText(code).then(() => {
            button.innerText = 'Copied!';
            setTimeout(() => { button.innerText = 'Copy'; }, 2000);
        });
    });

    // Append the button to the pre-block
    codeBlock.appendChild(button);
});

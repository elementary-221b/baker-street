document.addEventListener('DOMContentLoaded', function() {
  // We look for the 'pre' blocks that Jekyll's kramdown creates
  document.querySelectorAll('pre').forEach(function(codeBlock) {
    
    // Create the button
    var button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.innerText = 'Copy';

    // Click event to snatch the text
    button.addEventListener('click', function() {
      var code = codeBlock.querySelector('code').innerText;
      navigator.clipboard.writeText(code).then(function() {
        button.innerText = 'Copied!';
        setTimeout(function() {
          button.innerText = 'Copy';
        }, 2000);
      });
    });

    // Append the button to the pre block
    codeBlock.appendChild(button);
  });
});

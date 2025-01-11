function copyTextOnly() {
    const segments = document.querySelectorAll(
      'ytd-transcript-segment-renderer .segment-text'
    );
    let text = '';
    segments.forEach((segment) => {
      text += segment.textContent + ' ';
    });
  
    navigator.clipboard.writeText(text.trim()).then(
      () => {
        console.log('Text only transcript copied to clipboard!');
        // Optionally display a success message to the user
        alert('Text only transcript copied!');
      },
      (err) => {
        console.error('Failed to copy: ', err);
      }
    );
  }
  
  
  // Find a suitable place to inject the button.
  // This example uses the header of the transcript section.
  const header = document.querySelector('#segments-container #header');
  
  if (header) {
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Text only';
    copyButton.style.backgroundColor = 'green';
    copyButton.style.color = 'white';
    copyButton.style.padding = '10px 20px';
    copyButton.style.border = 'none';
    copyButton.style.borderRadius = '5px';
    copyButton.style.cursor = 'pointer';
    copyButton.style.fontSize = '16px';
    copyButton.addEventListener('click', copyTextOnly);
    header.parentNode?.insertBefore(copyButton, header.nextSibling);
  }
  
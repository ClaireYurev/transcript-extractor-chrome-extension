
document.getElementById('copyText').addEventListener('click', () => {
    chrome.scripting.executeScript({
      target: { tabId: chrome.tabs.getCurrent().id },
      function: () => {
        const segments = document.querySelectorAll(
          'ytd-transcript-segment-renderer .segment-text'
        );
        let text = '';
        segments.forEach((segment) => {
          text += segment.textContent + ' ';
        });
        navigator.clipboard.writeText(text.trim());
      },
    });
  });


document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('feedback');
  const saveButton = document.getElementById('save');

  // Get current tab's URL
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentUrl = tabs[0].url;
    
    // Load existing feedback for this URL
    chrome.storage.local.get([currentUrl], (result) => {
      if (result[currentUrl]) {
        textarea.value = result[currentUrl];
      }
    });

    // Save feedback when button is clicked
    saveButton.addEventListener('click', () => {
      const feedback = textarea.value;
      chrome.storage.local.set({ [currentUrl]: feedback }, () => {
        // Visual feedback for save
        saveButton.textContent = 'Saved!';
        setTimeout(() => {
          saveButton.textContent = 'Save Notes';
        }, 1000);
      });
    });
  });
});
document.getElementById("summarizeBtn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: summarizeContent,
        },
        (result) => {
          document.getElementById("summary").textContent = result[0].result;
        }
      );
    });
  });
  
  function summarizeContent() {
    const text = document.body.innerText;
    const sentences = text.split('. ');
    const summary = sentences.slice(0, 5).join('. ') + '.';
    return summary;
  }
  
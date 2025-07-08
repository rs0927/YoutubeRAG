document.getElementById("ask-btn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url);
  const videoId = url.searchParams.get("v");

  const question = document.getElementById("question").value;

  if (!videoId) {
    document.getElementById("response").textContent = "This is not a YouTube video page.";
    return;
  }

  const apiUrl = `http://localhost:8000/chat?video_id=${videoId}&question=${encodeURIComponent(question)}`;

  document.getElementById("response").textContent = "Fetching answer...";

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    document.getElementById("response").textContent = data.summary || "No response received.";
  } catch (error) {
    document.getElementById("response").textContent = "Error: " + error.message;
  }
});

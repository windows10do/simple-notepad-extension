const noteArea = document.getElementById("noteArea");

// Load saved note
chrome.storage.sync.get("note", (data) => {
  if (data.note) {
    noteArea.value = data.note;
  }
});

// File menu
document.getElementById("fileMenu").addEventListener("change", (e) => {
  if (e.target.value === "new") {
    noteArea.value = "";
  } else if (e.target.value === "save") {
    chrome.storage.sync.set({ note: noteArea.value }, () => {
      alert("Note saved!");
    });
  }
  e.target.selectedIndex = 0;
});

// View menu
document.getElementById("viewMenu").addEventListener("change", (e) => {
  const currentSize = parseFloat(window.getComputedStyle(noteArea).fontSize);
  if (e.target.value === "zoomIn") {
    noteArea.style.fontSize = (currentSize + 2) + "px";
  } else if (e.target.value === "zoomOut") {
    noteArea.style.fontSize = (currentSize - 2) + "px";
  }
  e.target.selectedIndex = 0;
});

// Font Size menu
document.getElementById("fontSizeMenu").addEventListener("change", (e) => {
  const sizeMap = {
    small: "12px",
    medium: "16px",
    large: "20px"
  };
  noteArea.style.fontSize = sizeMap[e.target.value];
  e.target.selectedIndex = 0;
});

// Font Style menu
document.getElementById("fontStyleMenu").addEventListener("change", (e) => {
  noteArea.style.fontFamily = e.target.value;
  e.target.selectedIndex = 0;
});

// About button
document.getElementById("aboutBtn").addEventListener("click", () => {
  alert("Notepad Extension v1.0\nCreated by Saman! Developed by Rayan!");
});

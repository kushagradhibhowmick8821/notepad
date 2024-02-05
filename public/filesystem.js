// filesystem.js
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the existing codeEditor instance created in script.js
  const codeEditor = window.codeEditor;

  // Read file and load into the code editor
  function loadFile() {
    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const content = e.target.result;
        codeEditor.setValue(content);
      };

      reader.readAsText(file);
    }
  }

  // Save content to a file
  function saveFile() {
    const content = codeEditor.getValue();
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "filename.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Save content to local storage
  function saveToLocalStorage() {
    const content = codeEditor.getValue();
    console.log("Saving to local storage:", content);
    localStorage.setItem("savedCode", content);
  }

  // Load content from local storage
  function loadFromLocalStorage() {
    const savedCode = localStorage.getItem("savedCode");
    console.log("Loading from local storage:", savedCode);
    if (savedCode) {
      codeEditor.setValue(savedCode);
    }
  }

  // Attach the functions to the global scope
  window.loadFile = loadFile;
  window.saveFile = saveFile;
  window.saveToLocalStorage = saveToLocalStorage;
  window.loadFromLocalStorage = loadFromLocalStorage;
});

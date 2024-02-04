// script.js
const codeEditor = CodeMirror.fromTextArea(
  document.getElementById("code-editor"),
  {
    lineNumbers: true,
    mode: "javascript",
  }
);

function runCode() {
  const code = codeEditor.getValue();

  try {
    const result = eval(code);
    displayOutput(result);
  } catch (error) {
    displayOutput(`Error: ${error.message}`);
  }
}

function displayOutput(output) {
  const outputContainer = document.getElementById("output-container");
  outputContainer.innerHTML = `<pre>${output}</pre>`;
}

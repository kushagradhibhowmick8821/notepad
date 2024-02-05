document.addEventListener("DOMContentLoaded", function () {
  const codeEditor = CodeMirror.fromTextArea(
    document.getElementById("code-editor"),
    {
      lineNumbers: true,
      theme: "dracula",
      mode: "javascript",
      height: "100vh",
    }
  );

  // Function to format code using js-beautify
  window.formatCode = function () {
    const code = codeEditor.getValue();
    const formattedCode = js_beautify(code, { indent_size: 2 });
    codeEditor.setValue(formattedCode);
  };
  window.codeEditor = codeEditor; // Expose codeEditor to the global scope
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const codeEditor = CodeMirror.fromTextArea(
    document.getElementById("code-editor"),
    {
      lineNumbers: true,
      theme: "dracula",
      mode: "javascript",
    }
  );
});

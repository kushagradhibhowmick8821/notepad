// // script.js
// const codeEditor = CodeMirror.fromTextArea(
//   document.getElementById("code-editor"),
//   {
//     lineNumbers: true,
//     mode: "javascript",
//   }
// );

// function runCode() {
//   const code = codeEditor.getValue();

//   try {
//     // Use eval to execute JavaScript code (use with caution due to security risks)
//     const result = eval(code);

//     // Display the result in the output container
//     displayOutput(result);
//   } catch (error) {
//     // Display any errors in the output container
//     displayOutput(`Error: ${error.message}`);
//   }
// }

// function displayOutput(output) {
//   const outputContainer = document.getElementById("output-container");
//   outputContainer.innerHTML = `<pre>${output}</pre>`;
// }

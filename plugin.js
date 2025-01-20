// Register the plugin with TinyMCE
// The plugin listens for the Ctrl + Shift + Spacebar combination and inserts a non-breaking space
tinymce.PluginManager.add("shortcut-nbsp", function(editor) {
    // Add an event listener for the keydown event
    editor.on("keydown", function(event) {
        // Check if Ctrl, Shift, and Spacebar are pressed simultaneously
        if (event.ctrlKey && event.shiftKey && event.key === " ") {
            event.preventDefault(); // Prevent the default browser action
            editor.execCommand("mceNonBreaking"); // Insert a non-breaking space
        }
    });
});

// Initialize TinyMCE with the custom plugin
tinymce.init({
    selector: "textarea", // Replace this with the appropriate selector for your text area
    plugins: "shortcut-nbsp" // Include the custom plugin
});
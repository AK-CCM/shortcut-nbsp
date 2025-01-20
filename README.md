## Description
This small plugin created by OpenAI's ChatGPT adds a keyboard shortcut to TinyMCE to insert non-breaking spaces (`&nbsp;`) at the cursor position or in a selection with the key combination `Ctrl + Shift + Spacebar` known from Microsoft Word and LibreOffice Writer.

## Installation generel
1. Place the files `plugin.js`, `plugin.min.js` and `plugin.min.js.gz` into the subfolder ```shortcut-nbsp``` of your TinyMCE `plugins` directory.
2. Include the plugin in your TinyMCE initialization:
   ```javascript
   tinymce.init({
       selector: 'textarea',
       plugins: 'shortcut-nbsp',
       toolbar: 'shortcut-nbsp',
   });```

## Installation in Joomla 5
1. Place the files `plugin.js`, `plugin.min.js` and `plugin.min.js.gz` into the subfolder ```shortcut-nbsp``` of the ```/media/plg_editors_tinymce/js/plugins``` directory of your Joomla installation.
2. Login to the Joomla backend, open the settings of the TinyMCE plugin (System > Manage: Plugins > Editor - TinyMCE) and include the plugin at ‘External Plugin URLs’:
    - **Plugin name:** ```shortcut-nbsp```
    - **Path:** ```/media/plg_editors_tinymce/js/plugins/shortcut-nbsp/plugin.min.js.gz``` (or the file plugin.min.js if gzip compression is not supported)

    Don't forget to save and clear the cache (System > Maintenance: Clear Cache).

# InputVisibilityToggle

A simple vanilla JavaScript library to toggle the visibility of an input based on the value of another input (radio buttons, checkboxes, or select elements).

## Features

- Toggle visibility of input elements based on the selected value of radio buttons, checkboxes, or select elements.
- Supports multiple input types in a single page.
- Easy to use and integrate into your project.

## Usage

### 1. Include the Library

First, include the `input-visibility-toggle.js` script in your HTML file:

```html
<script src="input-visibility-toggle.js"></script>
```
### 2. Set Up Your HTML

Create your HTML structure with inputs (radio buttons, checkboxes, or select elements) and the target input you want to show or hide:

```html
<h2>Radio Button Example</h2>
<label><input type="radio" name="exampleRadio" value="showInput"> Show Input</label>
<label><input type="radio" name="exampleRadio" value="hideInput"> Hide Input</label>
<input type="text" id="otherInput" placeholder="Other Input for Radio">

<h2>Checkbox Example</h2>
<label><input type="checkbox" name="exampleCheckbox" value="showInput"> Show Input</label>
<input type="text" id="otherInputCheckbox" placeholder="Other Input for Checkbox">

<h2>Select Example</h2>
<select name="exampleSelect">
    <option value="">Select an option</option>
    <option value="showInput">Show Input</option>
    <option value="hideInput">Hide Input</option>
</select>
<input type="text" id="otherInputSelect" placeholder="Other Input for Select">
```
### 3. Initialize the Library

Call the toggleOtherInput function for each set of inputs you want to toggle:

```html
<script>
    toggleInputVisibility('exampleRadio', 'showInput', 'otherInput');
    toggleInputVisibility('exampleCheckbox', 'showInput', 'otherInputCheckbox');
    toggleInputVisibility('exampleSelect', 'showInput', 'otherInputSelect');
</script>
```

### Full Example

Here’s a complete example HTML file:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Input Example</title>
    <style>
        #otherInput, #otherInputCheckbox, #otherInputSelect {
            display: none;
        }
    </style>
</head>
<body>
    <h1>Toggle Input Example</h1>
    
    <h2>Radio Button Example</h2>
    <label><input type="radio" name="exampleRadio" value="showInput"> Show Input</label>
    <label><input type="radio" name="exampleRadio" value="hideInput"> Hide Input</label>
    <input type="text" id="otherInput" placeholder="Other Input for Radio">

    <h2>Checkbox Example</h2>
    <label><input type="checkbox" name="exampleCheckbox" value="showInput"> Show Input</label>
    <input type="text" id="otherInputCheckbox" placeholder="Other Input for Checkbox">

    <h2>Select Example</h2>
    <select name="exampleSelect">
        <option value="">Select an option</option>
        <option value="showInput">Show Input</option>
        <option value="hideInput">Hide Input</option>
    </select>
    <input type="text" id="otherInputSelect" placeholder="Other Input for Select">
    
    <script src="input-visibility-toggle.js"></script>
    <script>
        // Initialize the toggle functionality
        toggleInputVisibility('exampleRadio', 'showInput', 'otherInput');
        toggleInputVisibility('exampleCheckbox', 'showInput', 'otherInputCheckbox');
        toggleInputVisibility('exampleSelect', 'showInput', 'otherInputSelect');
    </script>
</body>
</html>
```

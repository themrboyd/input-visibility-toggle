/*!
 * InputVisibilityToggle v1.0.0
 * A simple vanilla JavaScript library to toggle the visibility of an input based on the value of another input (radio buttons, checkboxes, or select elements).
 * Author: Boyd
 * License: MIT
 * 
 * Usage:
 * - Include this script in your HTML file.
 * - Call the toggleInputVisibility function with the input name, value to match, and the ID of the input to toggle.
 * Example:
 * toggleInputVisibility('exampleRadio', 'showInput', 'otherInput');
 */

(function(global) {
    function toggleInputVisibility(inputName, inputValue, otherInputId) {
        var inputs = document.querySelectorAll('input[name="' + inputName + '"], select[name="' + inputName + '"]');
        
        function toggleVisibility(event) {
            var selectedValue = event.target.value;
            
            if (event.target.type === 'checkbox') {
                selectedValue = event.target.checked ? inputValue : '';
            }
            
            var otherInput = document.getElementById(otherInputId);
            if (otherInput) {
                otherInput.style.display = (selectedValue === inputValue) ? '' : 'none';
            }
        }

        inputs.forEach(function(input) {
            input.addEventListener('change', toggleVisibility);
        });
    }

    // Expose the function to the global object
    global.toggleInputVisibility = toggleInputVisibility;
})(this);
const myControls = document.querySelectorAll(".controles input")
function activeChange(){
    // next ligne for change value of property on root variables
    // we use 'this' keyword for get that input we changing on it (To learn about 'this', look to "README" file)
    // this.name = property name
    // this.vlue = property value (without measuring unit)
    // this.dataset.sizing = property measuring unit
    document.documentElement.style.setProperty(`--${this.name}`,this.value + this.dataset.sizing)
}
myControls.forEach(input =>input.addEventListener('change',activeChange));
myControls.forEach(input =>input.addEventListener('mousemove',activeChange));

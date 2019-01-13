var inputs = document.querySelectorAll("input");


function update(){
  var suffix = this.dataset.size || "";
  console.log(suffix);
  var prop = '--' + this.name;
  document.documentElement.style.setProperty(prop, this.value + suffix);
}

inputs.forEach(i => i.addEventListener('change', update));
inputs.forEach(i => i.addEventListener('mousemove', update));
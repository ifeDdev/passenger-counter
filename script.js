let firstSection = document.getElementById("body1")
let button = document.getElementById("btn")
let secondSection = document.getElementById("body2")
btn.onclick = function() {
    if(btn.onclick = true) {
        secondSection.style.display = "block",
        firstSection.style.display = "none"
    } else{
        secondSection.style.display = "none",
        firstSection.style.display = "block"

    }
}
                //  //increment//
 let display = document.getElementById("display")
    let count = 0;
  function increment() {
      count = count + 1
      display.textContent = count;
  }
let el_save = document.getElementById("el_save")
  function save() {
      save_el = count;
      el_save.textContent  +=  save_el + " - "
      count = 0;
      display.textContent = 0;

  }
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-100%';
}







const tabs = document.querySelectorAll(".tab")
const panels = document.querySelectorAll(".panel")

// console.log(tabs)
// console.log(panels)

tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
    tabs.forEach((tab) => {
        tab.classList.remove('bor')
    })

    panels.forEach((panel) => {
        panel.classList.add('hidden')
    })

    e.target.classList.add('bor')
    const classString = e.target.getAttribute('data-target')
    document.getElementsByClassName(classString)[0]
        .classList.remove('hidden')
}




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");

        var accPanel = this.nextElementSibling;
        if (accPanel.style.display === "block") {
            accPanel.style.display = "none";
        } else {
            accPanel.style.display = "block";
        }
    });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accPanel = this.nextElementSibling;
    if (accPanel.style.maxHeight) {
      accPanel.style.maxHeight = null;
    } else {
      accPanel.style.maxHeight = accPanel.scrollHeight + "px";
    }
  });
}
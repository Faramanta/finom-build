const menuBtn = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav__list');
const page = document.querySelector('.page');

menuBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  menu.classList.toggle('active');
  page.classList.toggle('is-nav-open');
});



const tabs = document.querySelectorAll('.tabs__item');
const tabsPanel = document.querySelectorAll('.tabs__panel');

for (let i = 0; i < tabs.length; i++) {

  tabs[i].addEventListener('click', function () {

    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove('active');
      tabsPanel[j].classList.remove('active');
    }
    this.classList.add('active');

    const tabID = this.id;
    const panelID = document.getElementById(tabID + '-panel');
    panelID.classList.add('active');
  });
}

const cardTabs = document.querySelectorAll('.card-tabs__tab');
const cardTabsPanel = document.querySelectorAll('.card-tabs__panel');

for (let i = 0; i < cardTabs.length; i++) {

  cardTabs[i].addEventListener('click', function () {

    for (let j = 0; j < cardTabs.length; j++) {
      cardTabs[j].classList.remove('active');
      cardTabsPanel[j].classList.remove('active');
    }
    this.classList.add('active');

    const tabID = this.id;
    const panelID = document.getElementById(tabID + '-panel');
    panelID.classList.add('active');
  });
}

const select = document.querySelector('.dropdown-nav__selected');
const selectText = select.querySelector('.dropdown-nav__txt');
const dropdown = document.querySelector('.dropdown-nav__list');
const dropdownItems = document.querySelectorAll('.dropdown-nav__item');

select.addEventListener('click', function () {
  dropdown.classList.add('open');
});

for (let d = 0; d < cardTabs.length; d++) {
  dropdownItems[d].addEventListener('click', function () {
    const dropdownItemsTxt = this.querySelector('.dropdown-nav__txt').textContent;
    selectText.textContent = dropdownItemsTxt;
    dropdown.classList.remove('open');
  });
}

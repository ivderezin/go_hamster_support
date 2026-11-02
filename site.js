'use strict';
const tabs = [...document.querySelectorAll('[data-device]')];
const panels = [...document.querySelectorAll('.device-panel')];
if (tabs.length) {
  document.querySelector('.device-tabs').setAttribute('role', 'tablist');
  function selectTab(index, focus = false) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].setAttribute('role', 'tabpanel');
      panels[i].tabIndex = 0;
      panels[i].hidden = i !== index;
    });
    if (focus) tabs[index].focus();
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(i));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (i + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (i + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectTab(next, true); }
    });
  });
  selectTab(0);
}

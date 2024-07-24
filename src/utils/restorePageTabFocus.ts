export const restorePageTabFocusModal = () => {
  const allElements = document.querySelectorAll('main *, footer *, header *');

  allElements.forEach(element => element.removeAttribute('tabindex'));
};

export const restorePageTabFocusMobMenu = () => {
  const allElements = document.querySelectorAll('main *, footer *');

  allElements.forEach(element => element.removeAttribute('tabindex'));
};

export const disablePageTabFocusModal = () => {
  const allElements = document.querySelectorAll('main *, footer *, header *');

  allElements.forEach(element => element.setAttribute('tabindex', '-1'));
};

export const disablePageTabFocusMobMenu = () => {
  const allElements = document.querySelectorAll('main *, footer *');

  allElements.forEach(element => element.setAttribute('tabindex', '-1'));
};

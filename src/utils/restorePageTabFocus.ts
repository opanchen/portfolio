export const restorePageTabFocus = () => {
  const allElements = document.querySelectorAll('main *, footer *, header *');

  allElements.forEach(element => element.removeAttribute('tabindex'));
};

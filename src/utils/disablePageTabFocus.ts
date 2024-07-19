export const disablePageTabFocus = () => {
  const allElements = document.querySelectorAll('main *, footer *, header *');

  allElements.forEach(element => element.setAttribute('tabindex', '-1'));
};

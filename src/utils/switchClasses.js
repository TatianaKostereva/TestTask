function switchClasses(event) {
  const el = event.currentTarget;
  const elParent = el.parentNode;
  const commonDiv = elParent.parentNode;
  const childrenOfCommonDiv = commonDiv.querySelectorAll('.unit--select');

  for (let element of childrenOfCommonDiv) {
    if(element.classList.contains('unit--active')) {
      element.classList.remove('unit--active');
    }
  }
  elParent.classList.add('unit--active');
}

export default switchClasses;
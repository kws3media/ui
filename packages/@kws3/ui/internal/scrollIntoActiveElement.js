//@ts-check
export function scrollIntoActiveElement(listElement, activeElelement) {
  if (listElement && activeElelement) {
    const dropdownRect = listElement.getBoundingClientRect();
    const activeElemRect = activeElelement.getBoundingClientRect();
    const overScroll = activeElelement.offsetHeight / 3;

    if (activeElemRect.bottom + overScroll > dropdownRect.bottom) {
      listElement.scrollTop = Math.min(
        activeElelement.offsetTop +
          activeElelement.clientHeight -
          listElement.offsetHeight +
          overScroll,
        listElement.scrollHeight
      );
    } else if (activeElemRect.top - overScroll < dropdownRect.top) {
      listElement.scrollTop = Math.max(
        activeElelement.offsetTop - overScroll,
        0
      );
    }
  }
}

import { ICSSParameter } from 'src/component/Editor/interface';

export const isEditableElement = (target: HTMLElement): boolean => {
  let checkElement = target.parentElement;

  do {
    if (checkElement && checkElement.className.includes('edit-container')) {
      return true;
    }
    checkElement = checkElement.parentElement;
  } while (checkElement)

  return false;
}

export const getAllCSSParameters = (element: HTMLElement): ICSSParameter[] => {
  let computedStyle: CSSStyleDeclaration = window.getComputedStyle(element);
  return [
    {name: 'width', value: computedStyle.width},
    {name: 'height', value: computedStyle.height},
    {name: 'color', value: computedStyle.color},
    {name: 'backgroundColor', value: computedStyle.backgroundColor},
  ];
}
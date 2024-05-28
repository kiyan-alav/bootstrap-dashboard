export const changeElementHtml = function (
  selector: HTMLElement,
  value: string
) {
  selector.textContent = value;
};

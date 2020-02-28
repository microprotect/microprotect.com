export function getElement(screen, tagName, text) {
  return screen.getByText((content, element) => (
    content.includes(text) && element.tagName.toLowerCase() === tagName
  ));
}

// TODO: Delete this
export function temp() {
}

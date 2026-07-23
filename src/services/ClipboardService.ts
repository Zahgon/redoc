const isSupported =
  typeof document !== 'undefined' &&
  document.queryCommandSupported &&
  document.queryCommandSupported('copy');

export class ClipboardService {
  static isSupported(): boolean {
    return isSupported;
  }

  static selectElement(element: any): void {
      throw new Error("STUB");
  }

  static deselect(): void {
      throw new Error("STUB");
  }

  static copySelected(): boolean {
    let result;
    try {
      result = document.execCommand('copy');
    } catch (err) {
      result = false;
    }
    return result;
  }

  static copyElement(element: any): boolean {
      throw new Error("STUB");
  }

  static copyCustom(text: string): boolean {
    const textArea = document.createElement('textarea');
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';

    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = '0';

    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';

    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';

    textArea.value = text;

    document.body.appendChild(textArea);

    textArea.select();

    const res = ClipboardService.copySelected();

    document.body.removeChild(textArea);
    return res;
  }
}

export function editor(file: ImageData) {
  return file.height;
}
export function fromBlob(file: File) {
  const url = file;
  return url;
}
export function open(image: CanvasImageSource, container: HTMLElement) {

  const canvas = document.createElement('canvas');
  const div = document.createElement('div');
  div.setAttribute('height', image.height + 'px');
  div.setAttribute('width', image.width + 'px');
  div.appendChild(canvas);
  container.appendChild(div);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
  ctx.beginPath();
  ctx.moveTo(20, 30);
  ctx.arc(40, 50, 20, 0, 360);
  ctx.stroke();
  return canvas;
}
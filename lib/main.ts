import { creatPortal } from './dom'
import './main.less';
export function editor(file: ImageData) {
  return file.height
}
export function fromBlob(file: File) {
  const url = file
  return url
}
export async function open(image: CanvasImageSource, container: HTMLElement) {
  const canvas = document.createElement('canvas')
  const imageBitmap = await createImageBitmap(image)
  const ctx = canvas.getContext('2d')
  ctx.drawImage(imageBitmap, 0, 0)
  ctx.beginPath()
  // ctx.moveTo(20, 30);
  ctx.arc(20, 30, 20, 0, 2 * Math.PI)
  ctx.stroke()
  const block = creatPortal(canvas)
  container.appendChild(block)
  return canvas
}
export function ps(canvas: HTMLCanvasElement, image: ImageBitmap) {
  const _image = image
  const turnLeft = () => {}
  const turnRight = () => {}
  return { _image: _image, turnLeft, turnRight }
}

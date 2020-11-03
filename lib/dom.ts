export function creatPortal(child) {
  const block = document.createElement('div');
  block.setAttribute('style', 'width: 400px; height: 300px; margin: 0 auto;')
  block.appendChild(child);
  creatOptionsArea(block);
  return block;
}
export function creatOptionsArea(container:HTMLElement) {
  const turnLeftBtn = document.createElement('button');
  const turnRightBtn = document.createElement('button');
  turnLeftBtn.textContent = "turn left";
  turnRightBtn.textContent = "turn right";
  const btnBlock = document.createElement('div');
  btnBlock.append(turnLeftBtn, turnRightBtn);
  container.appendChild(btnBlock);
  return {turnLeftBtn, turnRightBtn};
}

import './style.scss';

let curX: number = 0;
let curY: number = 0;
let tgX: number = 0;
let tgY: number = 0;

document.addEventListener('DOMContentLoaded', () => {
  const inter: HTMLDivElement | null =
    document.querySelector<HTMLDivElement>('.interactive');

  if (!inter) return;

  const move = (): void => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    inter.style.transform = `translate(${Math.round(curX)}px, ${Math.round(
      curY
    )}px)`;
    requestAnimationFrame(() => {
      move();
    });
  };

  window.addEventListener('mousemove', (e: MouseEvent) => {
    tgX = e.clientX;
    tgY = e.clientY;
  });

  move();
});

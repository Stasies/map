let mouseDown = false;
let startX, startY, scrollTop, scrollLeft;
//указываем контейнер, остальной код можо не менять)
const slider = document.querySelector("#bg");

const startDragging = (e) => {
  mouseDown = true;
  //указываем начальную позицию мыши и положение скролла
  startX = e.pageX - slider.offsetLeft;
  startY = e.pageY - slider.offsetTop;
  scrollLeft = slider.scrollLeft;
  scrollTop = slider.scrollTop;
};

const stopDragging = (e) => {
  mouseDown = false;
};

const move = (e) => {
  e.preventDefault();
  if (!mouseDown) {
    //если лкм не зажата, метод не выполняется, элемент не скроллится
    return;
  }
  const x = e.pageX - slider.offsetLeft;
  const y = e.pageY - slider.offsetTop;
  const scrollX = x - startX;
  const scrollY = y - startY;
  slider.scrollLeft = scrollLeft - scrollX;
  slider.scrollTop = scrollTop - scrollY;
};

// Добавляем слушатели событий
slider.addEventListener("mousemove", move, false);
slider.addEventListener("mousedown", startDragging, false);
slider.addEventListener("mouseup", stopDragging, false);
slider.addEventListener("mouseleave", stopDragging, false);

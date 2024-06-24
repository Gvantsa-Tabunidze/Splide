'use strict';

// Slider
const sliderArray = [
  {
    id: 1,
    imageUrl:
      'https://www.maeshoney.com/wp-content/uploads/2021/02/exportacion-de-miel.2jpg-1024x569.jpg',
    title: 'Title 1',
  },
  {
    id: 2,
    imageUrl:
      'https://i0.wp.com/www.honeybeesuite.com/wp-content/uploads/2020/03/Arolium.jpg?fit=810%2C539&ssl=1',
    title: 'Title 2',
  },
  {
    id: 3,
    imageUrl:
      'https://img.freepik.com/free-photo/jar-honey-antique-table-with-fields-flower-background_1268-30585.jpg',
    title: 'Title 3',
  },
  {
    id: 4,
    imageUrl:
      'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/honey-1296x728-header.jpg?w=1155&h=1528',
    title: 'Title 4',
  },
  {
    id: 5,
    imageUrl:
      'https://sedgemoorhoney.co.uk/wp-content/uploads/2022/05/What-Is-Honey.jpg',
    title: 'Title 5',
  },
];

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const sliderContent = document.getElementById('slider-content');
let sliderIndex = 0;

function createDivTag() {
  const div = document.createElement('div');
  div.classList.add('slide-div');
  return div;
}

function createImageTag(item) {
  const img = document.createElement('img');
  img.src = item.imageUrl;
  return img;
}

function createTitle(item) {
  const imageTitle = document.createElement('h2');
  imageTitle.textContent = item.title;
  return imageTitle;
}

// Main function
function setSlide() {
  sliderContent.innerHTML = '';
  const sliderDiv = createDivTag();
  const imageDiv = createImageTag(sliderArray[sliderIndex]);
  const divTitle = createTitle(sliderArray[sliderIndex]);

  sliderDiv.appendChild(imageDiv);
  sliderDiv.appendChild(divTitle);

  sliderContent.appendChild(sliderDiv);
}

setSlide();

function arrowLeftClick() {
  if (sliderIndex <= 0) {
    sliderIndex = sliderArray.length - 1;
    setSlide();
    return;
  }
  sliderIndex--;
  setSlide();
}

function arrowRigthClick() {
  if (sliderIndex >= sliderArray.length - 1) {
    sliderIndex = 0;
    setSlide();
    return;
  }
  sliderIndex++;
  setSlide();
}

arrowLeft.addEventListener('click', arrowLeftClick);

arrowRight.addEventListener('click', arrowRigthClick);

// setInterval ( () => {
//   arrowRigthClick();
// }, 3000);

// 'use strict';


// const refs = {
//     control: document.querySelector('#tabs-1 [data-controls]'), //рут-селектор(корневой)
//     panes: document.querySelector('#tabs-1 [data-panes]'),
// };
// refs.control.addEventListener('click', onControlClick);
   
// function onControlClick(event) {
//      event.preventDefault();

//     // console.log(event.target);


//      //проверка, что это ссылка
//     if (event.target.nodeName !== 'A') {   //имя ноды(имя узла)
//         console.log('Кликнули не вссылку');
//         return;
//     }
//     //проверить, есть ли активный item.Ищим елемент с этим классом 
//     const currentControlItems = refs.control.querySelector('.controls__item--active');
//     //проверка на true, false, проверка, что это обьект
//     if (currentControlItems) {
//         currentControlItems.classList.remove('controls__item--active');

//         const paneIdItem = getPaneId(currentControlItems);
//          //найти панель по этому id (apple, pear, plum);
//     const pane = getPaneById(paneIdItem);
//         //снимаем активность кнопки при переходе на следущую
//         pane.classList.remove('pane--active');
//     }

//     const controlLink = event.target; //текущий Target в событии 
//     controlLink.classList.add('controls__item--active');
    
//     //console.log(CurrentControlItems);
//     // подсветить активную панель, убрать #
// const paneIdItem = getPaneId(controlLink);
// //console.log(paneIdItem);

//     //найти панель по этому id (apple, pear, plum);
//     const pane = getPaneById(paneIdItem);
//     //console.log(pane);
//     pane.classList.add('pane--active');  
// };
// // function getPaneById(paneIdItem) {
// //     // //проверять, если активная панель и снимать у нее
// //     //     const paneIdItem = CurrentControlItems.getAttribute('href').slice(1);
// //     // //найти панель по этому id (apple, pear, plum);
// //     //     const pane = refs.panes.querySelector(`#${paneIdItem}`);
// // }
// function getPaneId(control) {
//     return control.getAttribute('href').slice(1);
// }
// function getPaneById(id) {
//     return refs.panes.querySelector(`#${id}`);
// }


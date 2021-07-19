 'use strict';
// //Плагин - это класс.Можно делать экземпляры. В них хроняться свои свойства и они ссылаются на разные эл.
// //Принцип работы экземпляра класса как плагина, что бы можно было сделать N количества функционала одинакового для разной разметки.Отличаються по rootselector.
class Tabs{                                        //если не передали, то вешаем 'active'
    constructor({rootSelector, activeControlClass = 'active', activePaneClass = 'active', activeDataAtribute = 1, }) {
         //принимает настройки
        this._refs = this._getRefs(rootSelector);
        this._activeControlClass = activeControlClass;
        this._activePaneClass = activePaneClass;
        this._activeDataAtributeIdx = activeDataAtribute - 1;


        this._bindEvents();
        this._setActiveDataAttribute();//получаем ссылку на активный tab
    }

    _getRefs(root) {
        const refs = {};

        refs.controls = document.querySelector(`${root} [data-controls]`);
        refs.panes = document.querySelector(`${root} [data-panes]`);
        
        return refs;
    }

    //Привязать события на кнопки
    _bindEvents() {                                          //нужно привязывать контекст bind в Listener, если мы передаум метод обьекта 
        this._refs.controls.addEventListener('click',
            this._onControlsClick.bind(this),);//копия(_onControlsClick) и привязываем(bind).Привязываем контекст c помощью bind в addEventListener
    //на каждом экземпляре своя функция без bind
    }
    //делаем внутренний метод класса
    _onControlsClick(event) { //тогда без bind  _onControlsClick = (event) => 
        event.preventDefault();
        //    console.log(event.target);
        //проверка, что это ссылка
        if (event.target.nodeName !== 'A') {   //имя ноды(имя узла)
            console.log('Кликнули не в ссылку');
            return;
        }
        this._removeActiveDataAttribute();
        // //находим активный текущий, в зависимости от реализации плагинов
        // //нахождение и очистка текущего controlLink
        // const currentControlItems = this._refs.controls.querySelector(
        //     `.${this._activeControlClass}`,
        // );
        //  if (currentControlItems) {
        //      currentControlItems.classList.remove(this._activeControlClass);
              
        //     const paneIdItem = this._getPaneId(currentControlItems);
        //     // //найти панель по этому id (apple, pear, plum);
        //     // const pane = this._getPaneById(paneIdItem);
        //     // //снимаем активность кнопки при переходе на следущую
        //     // pane.classList.remove(this._activePaneClass);
        //      this._removeElemControl(paneIdItem);
            
        // }
         const controlLink = event.target; //текущий Target в событии 
        controlLink.classList.add(this._activeControlClass);

         const paneIdItem = this._getPaneId(controlLink);
     // console.log(paneIdItem);

        // //найти панель по этому id (apple, pear, plum);
        // const pane = this._getPaneById(paneIdItem);
        // // console.log(pane);
        // pane.classList.add(this._activePaneClass);  
         this._setElemControl(paneIdItem);
      
    }
    _setActiveDataAttribute() {
         //лучше найти все контролы, у них querySelectorAll, там найти все ссылки и
        const controlItems = this._refs.controls.querySelectorAll('a');
        const control = controlItems[this._activeDataAtributeIdx];

        control.classList.add(this._activeControlClass);
        //привязка к разметке
        // const control = this._refs.controls.children[this._activeDataAtributeIdx];

        const paneIdItem = this._getPaneId(control);
     // console.log(paneIdItem);
        this._setElemControl(paneIdItem);
       
        
         
    }
    _removeActiveDataAttribute() {
         //находим активный текущий, в зависимости от реализации плагинов
        //нахождение и очистка текущего controlLink
        const currentControlItems = this._refs.controls.querySelector(
            `.${this._activeControlClass}`,
        );
        if (!currentControlItems) {
            return;
        }
             currentControlItems.classList.remove(this._activeControlClass);
              
            const paneIdItem = this._getPaneId(currentControlItems);
            // //найти панель по этому id (apple, pear, plum);
            // const pane = this._getPaneById(paneIdItem);
            // //снимаем активность кнопки при переходе на следущую
            // pane.classList.remove(this._activePaneClass);
             this._removeElemControl(paneIdItem);
            
        
    }
   
    _setElemControl(paneIdItem) {
         //найти панель по этому id (apple, pear, plum);
        const pane = this._getPaneById(paneIdItem);
        // console.log(pane);
        pane.classList.add(this._activePaneClass);
    }
    //для удаления
    _removeElemControl(paneIdItem) {
                  //найти панель по этому id (apple, pear, plum);
            const pane = this._getPaneById(paneIdItem);
            //снимаем активность кнопки при переходе на следущую
            pane.classList.remove(this._activePaneClass);
    }
    _getPaneId(control) {
        return control.getAttribute('href').slice(1);
    }
    _getPaneById(id) {
        return this._refs.panes.querySelector(`#${id}`);
    }
}
//передаем обьект настроек
//когда мы делаем новый экземпляр вызывается конструктор 4 строка, а когда вызывается конструктор, вызывается getRefs и создаються refs
const tabs1 = new Tabs({
    //чтобы выбрать рефы
    rootSelector: '#tabs-1',
    //плагин
    activeControlClass: 'controls__item--active',
    activePaneClass: 'pane--active',
    //при загрузке какае то из этих tab(яблоко, груша, слива) ддожна быть активна
    activeDataAtribute: 1,
});
console.log(tabs1);

const tabs2 = new Tabs({
    //чтобы выбрать рефы
    rootSelector: '#tabs-2',
     activeControlClass: 'controls__item--active',
    activePaneClass: 'pane--active',
    activeDataAtribute: 2,
});
console.log(tabs2);
//если плагин не разрешает внешние свойства достучаться, то нам не нужна переменная const tabs, а просто активируем через нее, экземпляр зделали и все new Tabsю
//но если плагин модалки(есть close, open), тогда записываем в переменную ссылку на экземпляр
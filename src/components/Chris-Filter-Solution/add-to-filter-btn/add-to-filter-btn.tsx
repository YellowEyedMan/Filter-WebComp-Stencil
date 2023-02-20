
import { Component,  h, State, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'add-to-filter-btn',
  styleUrl: 'add-to-filter-btn.css',
  shadow: true,
})
export class AddToFilterButtonComponent {

    @Event() add2FltrClickEvent: EventEmitter;


handleClick(){
    this.add2FltrClickEvent.emit(true)
}

render() {


    return (
       

      <div class="add-to-filter-btn-wrapper">
        <button onClick={this.handleClick.bind(this)} class="add-to-filter-btn">+</button>
             
      </div>
        
    );
  }
}
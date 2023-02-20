
import { Component,  h, State, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'modal-cancel-btn',
  styleUrl: 'modal-cancel-btn.css',
  shadow: true,
})
export class ModalCancelButtonComponent {

    @Event() cancelClickEvent: EventEmitter


handleClick(){
    this.cancelClickEvent.emit(false)
}

render() {


    return (
       

      <div class="modal-cancel-btn-wrapper">
        <button onClick={this.handleClick.bind(this)} id="modal-cancel-btn">Cancel</button>
             
      </div>
        
    );
  }
}
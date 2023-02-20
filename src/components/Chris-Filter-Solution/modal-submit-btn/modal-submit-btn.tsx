
import { Component,  h, State, Event, EventEmitter, Prop} from '@stencil/core';

@Component({
  tag: 'modal-submit-btn',
  styleUrl: 'modal-submit-btn.css',
  shadow: true,
})
export class ModalSubmitButtonComponent {
  @Prop() myFormLength: number;
    @Event() modalSubmitEvent: EventEmitter;

handleClick(){
  this.modalSubmitEvent.emit(true)
}
render() {
    return (
      <div class="modal-submit-btn-wrapper">
        <button onClick={this.handleClick.bind(this)} id="modal-submit-btn">Submit</button> 
      </div>
    );
  }
}
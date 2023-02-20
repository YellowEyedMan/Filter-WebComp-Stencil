import { Component,  h, Prop, Event, EventEmitter, State, Listen } from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'modal-component.css',
  shadow: true,
})
export class ModalComponent {

  // Props
  @Prop() requested: boolean

  render() {
    console.log(this.requested);
    
    return (
      <div class={this.requested ? "wrapper visible" : "wrapper"}>
        <div class="modal">
          <span class="modal-title">Your New Filter Element: </span>
          <div class="content">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}

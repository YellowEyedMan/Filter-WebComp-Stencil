import { Component, Element, Event, Prop, State, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'add-remove-btn',
  styleUrl: 'add-remove-btn.css',
  shadow: true,
})
export class AddRemoveBtn {
  @Element() el: HTMLElement;
  @Prop() role: string;
  @Prop() boxChecked: boolean

  @State() count: number = 0;

  @Event() addResultEvent: EventEmitter;
  @Event() removeResultEvent: EventEmitter;

  handleClick(){
    let {role} = this;

    if(role === "-"){
      this.removeResultEvent.emit(true)
    } else if(role === "+"){
      this.addResultEvent.emit(true)
      
    }
  }

  setCount(e: Event) {
    e.preventDefault();

    if ((e.target as HTMLInputElement).innerHTML == '+') {
      return (this.count = this.count + 1);
    } else if ((e.target as HTMLInputElement).innerHTML == '-' && this.count > 0) {
      return (this.count = this.count - 1);
    }
  }

  render() {
    return (
      <div class={this.role === "-" ? "add-remove-btn remove-btn" : "add-remove-btn add-btn" } onClick={this.handleClick.bind(this)}>{this.role}
      </div>
    );
  }
}

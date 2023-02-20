import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
    tag: 'add-result-btn',
    styleUrl: 'add-result-btn.css',
    shadow: true,
})

export class AddResultBtn {

    @Event() addResultEvent: EventEmitter;

    handleAddResultClick() {
        this.addResultEvent.emit(true)
    }

  



  render() {
    return <button onClick={this.handleAddResultClick.bind(this)} class="add-result-btn">+</button>
  }
}
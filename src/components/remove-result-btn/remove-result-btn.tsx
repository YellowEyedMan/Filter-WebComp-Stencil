import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
    tag: 'remove-result-btn',
    styleUrl: 'remove-result-btn.css',
    shadow: true,
})

export class RemoveResultBtn {

    @Event() removeResultEvent: EventEmitter;

    handleremoveResultClick() {
        this.removeResultEvent.emit(true)
    }

  



  render() {
    return <button onClick={this.handleremoveResultClick.bind(this)} class="remove-result-btn">Remove Result</button>
  }
}
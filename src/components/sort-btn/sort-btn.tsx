import { Component, h, Event, State, EventEmitter, Prop } from '@stencil/core';

@Component({
    tag: 'sort-btn',
    styleUrl: 'sort-btn.css',
    shadow: true,
  })

  export class SortButton{ 

    @Prop() name: string
    @State() sortChecked: boolean = false

    @Prop() sortOnChange: () => void


  @Event() sortCheckEvent: EventEmitter;

    checkHandler() {
        this.sortChecked = !this.sortChecked
        this.sortCheckEvent.emit({name: this.name, sortChecked: this.sortChecked})
    }
    render() {
        return <div class="my-box-container">
          <input type="checkbox" class="my-box" id='sort-box' onChange={this.checkHandler.bind(this)} />
          <label htmlFor={`sort-box`} class="box-label">
            <p>
            {this.name}
            </p>
          </label>
        </div>
    }
  }
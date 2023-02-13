import { Component, h, State, Event, EventEmitter, Listen, Prop } from '@stencil/core';

@Component({
    tag: 'result-btn',
    styleUrl: 'result-btn.css',
    shadow: true,
  })

  export class ResultButton{ 

    @Prop() name: string
    @State() resultChecked: boolean = false

    @Prop() resultOnChange: () => void

    @Event() resultCheckEvent: EventEmitter;

    @Listen('sortCheckEvent')
  logCheckBoxChecked(event: CustomEvent) {
    const { checked, name } = event.detail;

    console.log(checked, name);

  }

    checkHandler() {
        this.resultChecked = !this.resultChecked
        this.resultCheckEvent.emit({name: this.name, resultChecked: this.resultChecked})
    }
    render() {
        return  <div class="my-box-container">
          <input type="checkbox" class="my-box" id={`${this.name}-box`}  onChange={this.checkHandler.bind(this)} />
          <label htmlFor={`${this.name}-box`} class="box-label">
            <p>
            {this.name}
            </p>
            <add-remove-btn color='red' ></add-remove-btn>
          </label>
        </div>
    }
  }
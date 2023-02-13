import { Component, Element, Listen, Prop, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-checkbox',
  styleUrl: 'my-checkbox.css',
  shadow: true,
})
export class MyCheckbox {
  @Element() myCheckBox: HTMLElement;
  @Prop() name: string
  @Prop() key: number;
  @Prop() role: string;
  @Prop() group: string;
  checkbox!: HTMLInputElement;

  @Prop() onMyChange: (value: string) => void

  @State() checked: boolean = false

  @Event() checkEvent: EventEmitter;

  checkHandler() {
    this.checked = !this.checked
    this.checkEvent.emit({checked: this.checked, name: this.name, group: this.group})

    // console.log(this.name, "this fired from within MyCheckbox")
  }

  render() {
    if(this.role === "sort"){
   return <div class="my-box-container">
          <input type="checkbox" class="my-box" id={`${this.name}-box`} ref={(el) => (this.checkbox = el as HTMLInputElement)} onChange={this.checkHandler.bind(this)} />
          <label htmlFor={`${this.name}-box`} class="box-label">
            <p>
            {this.name}
            </p>
          </label>
        </div>
    }
    if(this.role === "result"){
      
      // console.log(this.checkbox) 
      return  <div class="my-box-container">
          <input type="checkbox" class="my-box" id={`${this.name}-box`} ref={(el) => (this.checkbox = el as HTMLInputElement)} onChange={this.checkHandler.bind(this)} />
          <label htmlFor={`${this.name}-box`} class="box-label">
            <p>
            {this.name}
            </p>
            <add-remove-btn color='red' boxChecked={this.checked} ></add-remove-btn>
          </label>
        </div>
  }
  }


}

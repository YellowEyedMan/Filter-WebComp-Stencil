import { Component, h, Prop, State, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'form-field',
  styleUrl: 'form-field-component.css',
  shadow: true,
})
export class FormFieldComponent {
    @Prop() label: string
    @Prop() key: number

    @State() fieldContent: string
    @State() value: string

    @Event() fieldInput: EventEmitter

    handleFieldInput(e) {
      if(e.target.value !== ""){

        this.fieldContent = e.target.value;
        this.fieldInput.emit({fieldLabel: this.label,fieldContent: this.fieldContent})
      } else if(e.target.value === "") {
        console.log("empty field", this.key)
      }
      }
  render() {
    let {label} = this;
    return (
        <div class="form-field" key={this.key}>
        <p class="form-label">{label} :</p>
        <input class="form-input" type="text" value={this.fieldContent} onChange={(e) => this.handleFieldInput(e)} />
        </div>
    );
  }
}

import { Component, h, State, Listen, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'form-component',
  styleUrl: 'form-component.css',
  shadow: true,
})
export class FormComponent {
  // State
  @State() group: string;
  @State() resultArrToEmit: string[] = [];
  @State() result: string;
  @Event() sendFormInfo: EventEmitter;
  @State() resultFields: string[] = ['Result'];

  @Listen('fieldInput')
  handleFormFieldInput(event: CustomEvent) {
    let { fieldLabel, fieldContent } = event.detail;
    if (fieldLabel === 'Group') {
      this.group = fieldContent;
    } else if (fieldLabel === 'Result') {
      let x = [...this.resultArrToEmit, fieldContent];
      [...this.resultArrToEmit] = new Set(x);
    }
  }
  @Listen('modalSubmitEvent')
  handleModalSubmitInteraction(e: CustomEvent) {
    this.sendFormInfo.emit({ newGroup: this.group, newResults: this.resultArrToEmit });
  }
  @Listen('addResultEvent')
  handleAddResultInteraction(event: CustomEvent) {
    event.preventDefault();

    this.resultFields = [...this.resultFields, 'Result'];
  }
  @Listen('removeResultEvent')
  handleRemoveResultInteraction(event: CustomEvent) {
    event.preventDefault();
    this.resultFields.splice(this.resultFields.lastIndexOf('Result'), 1);

    this.resultFields = [...this.resultFields];
    this.resultArrToEmit.pop();
  }

  render() {
    return (
      <div id="form-container">
        <form class="new-item-form">
          <div class="group-field-container">
            <form-field label="Group"></form-field>
          </div>
          <hr></hr>
          <div class="result-fields-container">
            {this.resultFields.map(item => {
              return <form-field key={this.resultFields.indexOf(item)} label={item}></form-field>;
            })}
          </div>
          <hr></hr>
          <div class="form-field-adjustments">
            <add-remove-btn role="-"></add-remove-btn>
            <add-remove-btn role="+"></add-remove-btn>
          </div>
          <hr></hr>
          <div class="modal-btns-container">
            <modal-cancel-btn></modal-cancel-btn>
            <modal-submit-btn myFormLength={this.resultFields.length}></modal-submit-btn>
          </div>
        </form>
      </div>
    );
  }
}

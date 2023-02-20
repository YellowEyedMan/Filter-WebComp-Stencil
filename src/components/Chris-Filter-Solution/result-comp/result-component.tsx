import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'result-component',
  styleUrl: 'result-component.css',
  shadow: true,
})
export class ResultComponent {
  // props
  @Prop() name?: string;
  @Prop() group: string;

  // state
  @State() isChecked = false;

  // events
  @Event() sendResultInfo: EventEmitter;

  // handler
  handleInputChange() {
    this.isChecked = !this.isChecked;
    this.sendResultInfo.emit({
      name: this.name,
      group: this.group,
      isChecked: this.isChecked,
    });
  }

  render() {
    const { name, group } = this;

    return (
      <div class="result-btn-container" onClick={this.handleInputChange.bind(this)}>
        <input type="checkbox" checked={this.isChecked} />
        <h3>Group: {group}</h3>
        <h3>{name && `Result: ${name}`}</h3>
      </div>
    );
  }
}
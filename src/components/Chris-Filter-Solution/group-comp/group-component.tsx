import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'group-component',
  styleUrl: 'group-component.css',
  shadow: true,
})
export class GroupComponent {
  // props
  @Prop() group: string;

  // state
  @State() isChecked = false;

  // events
  @Event() sendGroupInfo: EventEmitter;

  // handler
  handleInputChange() {
    this.isChecked = !this.isChecked;
    this.sendGroupInfo.emit({
      group: this.group,
      isChecked: this.isChecked,
    });
  }

  render() {
    const { group } = this;

    return (
      <div class="group-btn-container" onClick={this.handleInputChange.bind(this)}>
        <input type="checkbox" checked={this.isChecked} />
        <h3>Group: {group}</h3>
      </div>
    );
  }
}
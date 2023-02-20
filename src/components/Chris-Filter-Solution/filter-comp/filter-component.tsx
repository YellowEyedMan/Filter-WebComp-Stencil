import { Component, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'filter-component',
  styleUrl: 'filter-component.css',
  shadow: true,
})
export class FilterComponent {
  // State
  @State() filterItems: ResultItem[] = [
    {
      id: 1,
      name: 'Bench Press',
      group: 'Chest',
    },
    {
      id: 2,
      name: 'Chest Flies',
      group: 'Chest',
    },
    {
      id: 3,
      name: 'Curls',
      group: 'Biceps',
    },
    {
      id: 4,
      name: 'Chin Ups',
      group: 'Biceps',
    },
    {
      id: 5,
      name: 'Squat',
      group: 'Legs',
    },
    {
      id: 6,
      name: 'Lunge',
      group: 'Legs',
    },
  ];;
  @State() name: string;
  @State() group: string;
  @State() isChecked: boolean;
  @State() selectedGroups: ResultItem[] = [];
  @State() set: ResultItem[] = [];
  @State() modalVisibility: boolean

  // Listen for group info
  @Listen('sendGroupInfo')
  handleGroupInteraction(event: CustomEvent) {
    const { group, isChecked } = event.detail;
    this.group = group;
    this.isChecked = isChecked;

    // When isChecked is true, loop over the filterItems arr and if the current items group is equal to the current group selected, add it to the selectedGroups arr
    if (isChecked) {
      this.filterItems.forEach(item => {
        if (item.group === group && !this.selectedGroups.includes(item)) {
          this.selectedGroups = [...this.selectedGroups, item];
        }
      });
    }
    // If isChecked is false... filter out the selectedGroups arr to return only items that don't have the group that was unselected and filter out the set arr as well to not show any results from the group the was unselected
    else {
      this.selectedGroups = this.selectedGroups.filter(item => item.group !== group);
      this.set = this.set.filter(item => item.group !== group);
    }
  }

  // Listen for result info
  @Listen('sendResultInfo')
  handleResultInteraction(event: CustomEvent) {
    const { name, isChecked } = event.detail;

    if (isChecked) {
      this.filterItems.forEach(item => {
        if (item.name === name) {
          this.set = [...this.set, item];
        }
      });
    } else {
      this.set = this.set.filter(item => item.name !== name);
    }
  }

  // Listen for Form Info
  @Listen('sendFormInfo')
  handleFormInteraction(event: CustomEvent) {
    let {newGroup, newResults} = event.detail;

    function filterItem(arr: ResultItem[], group:string, result: string) {
      this.id = arr.length + 1
      this.name = result
      this.group = group;
    }      
    for(let i = 0; i < newResults.length; i++ ){
      let x = new filterItem(this.filterItems, newGroup, newResults[i])
      this.filterItems = [...this.filterItems, {...x} ]
    }
  }
  // Listen for Add-to-Filter Button
@Listen('add2FltrClickEvent')
handleAddToFilterInteraction(event: CustomEvent){
 this.modalVisibility = event.detail
}

@Listen('cancelClickEvent')
handleCancelClickEvent(event: CustomEvent){
  this.modalVisibility = event.detail
}

@Listen('modalSubmitEvent')
handleModalSubmitEvent(event: CustomEvent){
  this.modalVisibility = !event.detail
}
  render() {
    const { filterItems, selectedGroups, set } = this;

    const uniqueGroups = [...new Map(filterItems.map(item => [item['group'], item])).values()];
    
    return (
      <Host>
        {/* Muscle groups */}
        <div class="section groups">
          <h3>Groups:</h3>
          <div class="btns-container">
            {uniqueGroups.map(item => (
              <group-component group={item.group}></group-component>
            ))}
        <add-to-filter-btn></add-to-filter-btn>
          </div>
        </div>

        {/* results */}
        <div class="section results">
          <h3>Results:</h3>
          <div class="btns-container">
            {selectedGroups.map(item => (
              <result-component key={item.id} name={item.name} group={item.group}></result-component>
            ))}
        <add-to-filter-btn></add-to-filter-btn>
          </div>
        </div>
        {/* Set */}
        <div class="section set">
          <h3>Added To Set:</h3>
          <div>
            {set.map(item => (
              <p>{item.name}</p>
            ))}
          </div>
        </div>
        <my-modal requested={this.modalVisibility} >
        <form-component></form-component>
        </my-modal>
      </Host>
    );
  }
}

// TODO: Move to separate files

type ResultItem = {
  id?: number;
  name: string;
  group: string;
};


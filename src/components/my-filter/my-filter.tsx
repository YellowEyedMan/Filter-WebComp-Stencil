import { Component, h, State, Element, Listen } from '@stencil/core';
import { Fragment } from '@stencil/core';
import ResultItem from '../../types-and-interfaces/filter-content.interface';

@Component({
  tag: 'my-filter',
  styleUrl: 'my-filter.css',
  shadow: true,
})
export class MyFilter {
  @Element() myFilter: HTMLElement;
  @State() filterContent: ResultItem[] = [
    {
      id: 1.1,
      content: {name:'Bench Press', checked: false},
      group: {name:'Chest', checked: false},
    },
    {
      id: 1.2,
      content: {name: 'Chest Flies', checked: false},
      group: {name:'Chest', checked: false},
    },
    {
      id: 2.1,
      content: {name:'Curls', checked: false},
      group: {name:'Biceps', checked: false},
    },
    {
      id: 2.2,
      content: {name:'Chin Ups', checked: false},
      group: {name:'Biceps', checked: false},
    },
  ];

  @State() selectedSort: string[] = [];
  @State() selectedResult: string[] = [];
  @State() cartState: string[] = [];


  

  @Listen('sortCheckEvent')
  logCheckBoxChecked(event: CustomEvent) {
    const { name, sortChecked } = event.detail;
    console.log(name, sortChecked)
  }

  @Listen('resultCheckEvent')
  logResultBoxCheck(event: CustomEvent) {
    let { name, resultChecked } = event.detail;
    console.log(name, resultChecked)
  }

  render() {

    return (
      <div class="filter-container">
        <div class="sort-container">
          <sort-btn name='Chest'></sort-btn>
          <sort-btn name='Biceps'></sort-btn>
          
        </div>
        <hr></hr>
        <div class="result-container">
          {}
        </div>
        <hr></hr>
        <div class="cart-container">
          {}
        </div>
        <hr></hr>
      </div>
    );
  }
}

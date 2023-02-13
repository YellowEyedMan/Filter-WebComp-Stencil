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
  @State() resultContent: ResultItem[] = [
    {
      id: 1.1,
      name: 'Bench Press',
      group: 'Chest',
    },
    {
      id: 1.2,
      name: 'Chest Flies',
      group: 'Chest',
    },
    {
      id: 2.1,
      name: 'Curls',
      group: 'Biceps',
    },
    {
      id: 2.2,
      name: 'Chin Ups',
      group: 'Biceps',
    },
  ];
  
  @State() selectedSort: string[] = []

  @State() cartState: string[] | ResultItem[]  = [];
  @State() isChecked: boolean;

  @Listen('sortCheckEvent')
  logCheckBoxChecked(event: CustomEvent) {
    const { sortChecked, name } = event.detail;
    console.log(sortChecked, name);

    if(sortChecked) {
      // this.selectedSort = [...this.selectedSort, name]
      // console.log('selectedSort, when checked',this.selectedSort)
      let y = this.resultContent.filter(item => {
        return item.group === name
      }) 
      y.forEach(item => {
        this.selectedSort = [...this.selectedSort, item.group]
      })
      let [...remainingDisplayed] = new Set(this.selectedSort)
      
      console.log(remainingDisplayed, 'remaining')
      this.selectedSort = remainingDisplayed
    } 
    if(!sortChecked) {
     let x = this.resultContent.filter(item => {
      return item.group !== name
     })
     console.log(x);

     x.forEach(item => {
      this.selectedSort = [...this.selectedSort, item.group]
     })

     console.log(this.selectedSort)
    }

    
  }

  @Listen('resultCheckEvent')
  logResultBoxCheck(event: CustomEvent) {
    const { name, resultChecked } = event.detail;
    // console.log(resultChecked, name);

    if(resultChecked) {
      this.cartState = [...this.cartState, name]
    }


    
  }
  

  


  render() {
    let sortStrings = [];

    this.resultContent.map(item => {
      sortStrings.push(item.group);
    });

    let [...sortGroups] = new Set(sortStrings);

    // console.log(this.selectedSort, 'selectedSort')
    // console.log(this.cartState, 'cartState')

    return (
      <div class="filter-container">
        <div class="sort-container">
          {sortGroups.map(item => {
            return <sort-btn name={item}></sort-btn>
          })}
        </div>
        <hr></hr>
        <div class="result-container">
          {this.resultContent.map(item => {
            
              return <result-btn name={item.name}></result-btn>
          })}
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


import { Component, Element, Listen, Prop, State, h } from '@stencil/core';

@Component({
    tag: 'add-remove-btn',
    styleUrl: 'add-remove-btn.css',
    shadow: true,
})

export class AddRemoveBtn {
@Element() el:HTMLElement
  @Prop() color: string
  @Prop() boxChecked: boolean

  @State() count: number = 0;

  setCount(e: Event) {
    e.preventDefault();

    if (((e.target as HTMLInputElement).innerHTML) == "+" ){
    return this.count = this.count + 1
     } else if (((e.target as HTMLInputElement).innerHTML) == "-" && this.count > 0) {
    return this.count = this.count - 1
  }
}


  render() {
    // console.log(this.boxChecked)
    if (this.boxChecked) {
        return ( 
         <div class="add-remove-container">
             <button class="add-remove-btn remove-btn" onClick={this.setCount.bind(this)}>-</button>
             <p class='add-remove-btn-text'>{this.count}</p>
             <button class="add-remove-btn add-btn" onClick={this.setCount.bind(this)}>+</button>
         </div>
        )

    } 
    if (!this.boxChecked) {
        return ( 
            <div class="add-remove-container">
                <p class='add-remove-btn-text'>Select</p>
            </div>
           )
    }
  }
}
import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les pâtisseries
import { Pastrie, CHOICE, Paginate } from '../pastrie';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {

  titlePage: string = "Page principale : liste des pâtisseries à gagner";
  pastries: Pastrie[] = [];
  selectedPastrie : Pastrie | null = null;
  onlyPastrie : Pastrie | null = null;

  constructor(private pS: PastrieService) {
   }

  ngOnInit() { 
    this.pS.PastrieServicepaginate(1, 8).subscribe(
      pastries => this.pastries = pastries 
    )
  }

  onSelect(pastrie: Pastrie) {
    this.selectedPastrie = pastrie;
  }

  changeParentPreference($event: any) {
    const choice = this.pastries.find(elem => elem._id == $event.id);
    const customerChoice = $event.str;
    let choiceCounts = this.countTagOccurrence(customerChoice, this.pastries);

    if(choiceCounts < 3 && $event.str == "Priority") {
      if (choice) {
        choice.choice = customerChoice;
      }
    } else if ($event.str == "Unwanted") {
        if (choice) {
          choice.choice = customerChoice;
        }
    }

    console.log(this.pS.checkPriority(1));
  }

  loadPatrie($event: any) {
    if ($event)
      this.pastries = $event;
  }

  countTagOccurrence(value: CHOICE, haystack: Pastrie[]) {
    let count = 0;
    for(let i = 0; i < haystack.length; i++) {
      let subhaystack = haystack[i];
      if (subhaystack.choice == value)
          count++;
    }
    return(count);
  }

  paginate($event : Paginate){
    const { start, end } = $event ;
    console.log($event);
    
    this.pastries = this.pS.paginate(start, end);
  }
}

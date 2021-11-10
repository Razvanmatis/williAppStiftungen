import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steckbrief',
  templateUrl: './steckbrief.component.html',
  styleUrls: ['./steckbrief.component.css']
})
export class SteckbriefComponent implements OnInit {

  checkedWoman = false;
  checkedMan = false;
  checkedDivers = false;
  checked18to25 = false;
  checked26to35 = false;
  checked36to45 = false;
  checked46to55 = false;
  checked56to65 = false;
  checked66to75 = false;

  ngOnInit(): void {

  }

  onAgeClick(_18to25: boolean, _26to35: boolean, _36to45:boolean, _46to55:boolean, _56to65: boolean, _66to75:boolean) {
    if (_18to25) {
      this.checked26to35 = false;
      this.checked36to45 = false;
      this.checked46to55 = false;
      this.checked56to65 = false;
      this.checked66to75 = false;
    } else if (_26to35) {
      this.checked18to25 = false;
      this.checked36to45 = false;
      this.checked46to55 = false;
      this.checked56to65 = false;
      this.checked66to75 = false;
    } else if (_36to45) {
      this.checked18to25 = false;
      this.checked26to35 = false;
      this.checked46to55 = false;
      this.checked56to65 = false;
      this.checked66to75 = false;
    } else if (_46to55) {
      this.checked18to25 = false;
      this.checked26to35 = false;
      this.checked36to45 = false;
      this.checked56to65 = false;
      this.checked66to75 = false;
    } else if (_56to65) {
      this.checked18to25 = false;
      this.checked26to35 = false;
      this.checked36to45 = false;
      this.checked46to55 = false;
      this.checked66to75 = false;
    } else {
      this.checked18to25 = false;
      this.checked26to35 = false;
      this.checked36to45 = false;
      this.checked46to55 = false;
      this.checked56to65 = false;
    }
  }

  onSexClick(woman: boolean, man: boolean, divers: boolean) {
    if (woman) {
      this.checkedMan = false;
      this.checkedDivers = false;
    } else if (man) {
      this.checkedWoman = false;
      this.checkedDivers = false;
    } else {
      this.checkedMan = false;
      this.checkedWoman = false;
    }
  }
}

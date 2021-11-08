import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steckbrief',
  templateUrl: './steckbrief.component.html',
  styleUrls: ['./steckbrief.component.css']
})
export class SteckbriefComponent implements OnInit {

  cars = [
    {
      id: '1',
      name: 'Mazda MX-5 Miata',
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mazda-mx-5-miata-mmp-1-1593459650.jpg?crop=0.781xw:0.739xh;0.109xw,0.0968xh&resize=480:*',
    },
    {
      id: '2',
      name: 'Toyota Supra',
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-chevrolet-corvette-c8-102-1571146873.jpg?crop=0.548xw:0.411xh;0.255xw,0.321xh&resize=980:*',
    },
  ];

  ngOnInit(): void {

  }
}

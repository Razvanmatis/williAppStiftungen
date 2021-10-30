import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  textImpressum = 'Fritz Stiftungsmethode StBG mbH, Herderstraße 42, 90427 Nürnberg';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router, private _snackBar: MatSnackBar, private dialog: MatDialog) {
    this.navLinks = [
        {
            label: 'Über uns',
            link: './ueberUns',
            index: 0
        }, {
            label: 'Kontaktformular',
            link: './kontakformular',
            index: 1
        }, {
            label: 'Stiftungen',
            link: './stiftungen',
            index: 2
        }, {
            label: 'Karriere',
            link: './karriere',
            index: 3
        }
    ];
  }

  public openSnackbar(message: string) {
    this._snackBar.open(message + ' clicked', message, {duration: 3000});
  }

  openDialog(name: string, text: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '650px',
      data: {text: text, name: name}
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}

import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  data = [
    {
      name: 'Vinodh',
      date1: 1789561800,
      date1full: 'Sep 16, 2026 10:30 AM',
      date2: 1789565400,
      date2full: 'Sep 16, 2026 11:30 AM'
    },
    {
      name: 'Rahul',
      date1: 1789561800,
      date1full: 'Sep 16, 2026 10:30 AM',
      date2: 1789572600,
      date2full: 'Sep 16, 2026 01:30 PM'
    },
    {
      name: 'Suresh',
      date1: 1789475400,
      date1full: 'Sep 15, 2026 10:30 AM',
      date2: 1789482600,
      date2full: 'Sep 15, 2026 12:30 PM'
    },
    {
      name: 'Ramesh',
      date1: 1789475400,
      date1full: 'Sep 15, 2026 10:30 AM',
      date2: 1789493400,
      date2full: 'Sep 15, 2026 03:30 PM'
    },
    {
      name: 'Kiran',
      date1: 1789389000,
      date1full: 'Sep 14, 2026 10:30 AM',
      date2: 1789399800,
      date2full: 'Sep 14, 2026 01:30 PM'
    }
  ];
}

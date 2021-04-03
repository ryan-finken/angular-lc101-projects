import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  takeoff(): void {
    const launch: boolean = confirm('Confirm that the shuttle is ready for takeoff.');
    if (launch) {
      this.message = 'Shuttle in flight.';
      this.color = 'blue';
      this.height += 10000;
    }
  }

  land(): void {
    alert('The shuttle is landing. Landing gear engaged.');
    this.message = 'The shuttle has landed.';
    this.color = 'green';
    this.height = 0;
  }

  abort(): void {
    const missionAbort: boolean = confirm('Do you really want to abort the mission?');
    if (missionAbort) {
      this.message = 'Mission aborted.';
      this.color = 'red';
      this.height = 0;
    }
  }

  up(): void {
    this.height += 10000;
  }

  down(): void {
    //
  }

  left(): void {
    //
  }

  right(): void {
    //
  }
}

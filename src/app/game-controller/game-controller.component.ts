import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css'],
})
export class GameControllerComponent implements OnInit {
  @Output() onStartGame = new EventEmitter<number>();
  @Output() onStopGame = new EventEmitter();
  num: number = 0;
  interval;
  constructor() {}

  ngOnInit(): void {}

  gameStarted(e) {
    this.interval = setInterval(() => {
      this.onStartGame.emit(this.num + 1);
      this.num++;
    }, 1000);
  }
  gameStopped(e) {
    clearInterval(this.interval);
  }
}

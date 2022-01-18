import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [];
  title: string = 'first value ever';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  @ViewChild('inputRefWithViewChild') inputRefWithViewChild;

  onServerCreated(serverData) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content,
    });
  }

  logRefVal(inputRef) {
    console.log('log ref', inputRef, inputRef.value);
  }

  logRefVal2() {
    console.log('log ref with viewChild', this.inputRefWithViewChild);
  }

  ngOnChanges(changes) {
    this.title = 'value changed in ngOnChanges';
    console.log('ngOnChanges called!');
    console.log(changes);
    console.log('onChange', this.title);
  }

  ngOnInit() {
    this.title = 'value changed in ngOnInit';
    console.log('ngOnInit called!');
    console.log('onInit', this.title);
  }

  ngDoCheck() {
    this.title = 'value changed in ngDoCheck';
    console.log('ngDoCheck called!');
    console.log('onDoCheck', this.title);
  }

  ngAfterContentInit() {
    this.title = 'value changed in ngAfterContentInit';

    console.log('ngAfterContentInit called!');
    console.log('AfterContentInit', this.title);
  }

  ngAfterContentChecked() {
    this.title = 'value changed in ngAfterContentChecked';

    console.log('ngAfterContentChecked called!');
    console.log('AfterContentChecked', this.title);
  }

  ngAfterViewInit() {
    this.title = 'value changed in ngAfterViewInit';

    console.log('ngAfterViewInit called!');
    console.log('AfterViewChecked', this.title);
  }

  ngAfterViewChecked() {
    this.title = 'value changed in ngAfterViewChecked';

    console.log('ngAfterViewChecked called!');
    console.log('AfterViewChecked', this.title);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
  onStartGame(event: number) {
    console.log(event);
    if (event % 2 === 0) {
      this.evenNumbers.push(event);
    } else {
      this.oddNumbers.push(event);
    }
  }
  onStopGame() {}
}

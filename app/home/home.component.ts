import { Component } from '@angular/core';

import { QueueService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent {
    constructor(private queueService: QueueService) {}
    
    sendMessage1(): void {
        // send message to subscribers via observable subject
        var message = new Object();
        message['text'] = 'This goes to queue1';
        this.queueService.send('queue1', message);
    }

    clearMessage1(): void {
        // clear message
        this.queueService.clear('queue1');
    }

    sendMessage2(): void {
        // send message to subscribers via observable subject
        var message = new Object();
        message['text'] = 'This goes to queue2';
        this.queueService.send('queue2', message);
    }

    clearMessage2(): void {
        // clear message
        this.queueService.clear('queue2');
    }
}
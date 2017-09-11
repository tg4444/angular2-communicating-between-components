import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { QueueService } from './_services/index';

@Component({
    moduleId: module.id,
    selector: 'app2',
    templateUrl: 'app2.component.html'
})

export class App2Component implements OnDestroy {
    message1a: any;
    message2a: any;
    subscription1: Subscription;
    subscription2: Subscription;

    constructor(private queueService: QueueService) {
        // subscribe to home component messages
        this.subscription1 = this.queueService.getQueue('queue1').subscribe(message => { this.message1a = message; });
        this.subscription2 = this.queueService.getQueue('queue2').subscribe(message => { this.message2a = message; });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
    }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class QueueService {
    private queues = new Map<string, Subject<any>>();

    getSubject(queueName: string) {
        var queue = this.queues.get(queueName);
        if (queue == null) {
            queue = new Subject<any>();
            this.queues.set(queueName, queue);
        }
        return queue;
    }

    getQueue(queueName: string): Observable<any> {
        return this.getSubject(queueName).asObservable();
    }

    send(queueName: string, data: Object) {
        this.getSubject(queueName).next(data);
    }

    clear(queueName: string) {
        this.getSubject(queueName).next();
    }

}
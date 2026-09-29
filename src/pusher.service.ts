import { Injectable } from '@nestjs/common';
import Pusher from 'pusher';

@Injectable()
export class PusherService {
    private readonly pusher: Pusher;

    constructor() {
        this.pusher = new Pusher({
            appId: "2198369",
            key: "101cb9bf021e974d5349",
            secret: "f6f9eaf195401f3da1b8",
            cluster: "eu",
            useTLS: true
        });
        
    }

    async trigger (channel: string, event: string, data: any) {
        return this.pusher?.trigger(channel, event, data);
    }
}

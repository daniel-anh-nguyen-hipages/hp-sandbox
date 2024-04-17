import type { Message } from "./type";

import { tradies, tradieChats } from "./data";

/** 
 * Faking a socket connection. This class is used to simulate a socket connection.
 */
class Socket {
    timeoutId: number | null = null;
    callback: ((message: Message) => void) | null = null;

    constructor() {
        this.timeoutId = null;
        this.callback = null;

        this.getRandomMessage = this.getRandomMessage.bind(this);
        this.sendRandomMessage = this.sendRandomMessage.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.disconnect = this.disconnect.bind(this);
    }

    /**
     * Returns a random message from the pool. We're faking a socket here.
     * @returns a random message
     */
    private getRandomMessage(): Message {
        const randomType = Math.floor(Math.random() * 20);
        const randomTradie = tradies[Math.floor(Math.random() * tradies.length)];

        if (randomType % 20 === 0) {
            return {
                type: "join",
                message: "joined successfully",
                user: randomTradie,
            };
        }

        if (randomType % 20 === 1) {
            return {
                type: "leave",
                message: "left",
                user: randomTradie,
            };
        }

        const randomChat = tradieChats[Math.floor(Math.random() * tradieChats.length)];
        return {
            type: "chat",
            message: randomChat,
            user: randomTradie,
        };
    }


    /**
     * Triggers a callback with a random message every 0.5 to 2 seconds.
     * @param callback
     */
    public sendRandomMessage() {
        this.callback?.(this.getRandomMessage());
        // Calculate a new random interval between 0.5 seconds (500 ms) and 2 seconds (2000 ms)
        const nextInterval = Math.random() * (2000 - 500) + 500;

        // Set up the next call
        setTimeout(this.sendRandomMessage, nextInterval);
    }

    public onMessage(callback: (message: Message) => void): void {
        console.log("Connected: Messages will be sent.");

        this.callback = callback;

        if (this.timeoutId !== null) {
            clearTimeout(this.timeoutId);
        }

        // Start the loop
        this.timeoutId = setTimeout(
            () => this.sendRandomMessage(),
            Math.random() * (2000 - 500) + 500
        );
    }

    public disconnect(): void {
        if (this.callback !== null) {
            this.callback = null;
        }

        if (this.timeoutId !== null) {
            clearTimeout(this.timeoutId);
        }

        this.timeoutId = null;
        console.log("Disconnected: No more messages will be sent.");
    }

    public send(body: string): void {
        this.callback?.({ type: "chat", message: body, user: { name: "self", color: "orange" } });
    }
}

export const socket = new Socket();

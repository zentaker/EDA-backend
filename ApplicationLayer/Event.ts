/**
 * Represents an event
 */
export class Event {
    public readonly id: string;
    public readonly createdAt: number;
    public readonly name: string;
    public readonly payload: any;

    /**
     * Create the event instance
     */
    constructor(name: string, payload: any) {
        // This should be replaced with a more robust mechanism
        // In a multi-threaded - high-volume system, two events may have the same ID !!!
        this.id = "ID:" + Date.now();

        this.name = name;
        this.payload = payload;
        this.createdAt = Date.now();
    }
}
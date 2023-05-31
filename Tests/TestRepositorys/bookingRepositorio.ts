import { Booking } from "../../DomainLayer/booking/Booking";


export class BookingRepository {
  private Bookings: Booking[];

  constructor() {
    this.Bookings = [];
  }

  add(Booking: Booking): void {
    this.Bookings.push(Booking);
  }

  public get(reference: number): Booking | null {
    // Loop through the collection
    for (const Booking of this.Bookings) {
        if (Booking.getReference() === reference) {
            return Booking;
        }
    }

    return null;
}
public getAll(): Booking[] {
    return this.Bookings;
  }

  remove(reference: number): boolean {
    // Loop through the collection
    for (const BookingInCollection of this.Bookings) {
      if (BookingInCollection.getReference() === reference) {
        this.Bookings.splice(this.Bookings.indexOf(BookingInCollection), 1);
        return true;
      }
    }
  
    return false;
  }
  
}
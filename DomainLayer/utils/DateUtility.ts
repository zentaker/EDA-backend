export class DateUtility {
    /**
     * Creates the date object in MM-dd-YYYY format
     * @return
     */
    public create(month: number, day: number, year: number): Date {
      const calendar = new Date(year, month-1, day);
      return calendar;
    }
    public createNow(){
      const calendar = new Date;
      return calendar
    }

  
    /**
     * Creates the date object with provided parameters
     * @return
     */
    public createWithTime(month: number, day: number, year: number, hour: number, minute: number): Date {
      const calendar = new Date(year, month-1, day, hour, minute);
      return calendar;
    }
  
    /**
     * Create the string representation in format MM-dd-YYYY
     */
    public formatDate(date: Date): string {
      const sdf = new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
      return sdf.format(date);
    }
    
  }
  
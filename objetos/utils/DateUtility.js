"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtility = void 0;
class DateUtility {
    /**
     * Creates the date object in MM-dd-YYYY format
     * @return
     */
    create(month, day, year) {
        const calendar = new Date(year, month, day);
        return calendar;
    }
    createNow() {
        const calendar = new Date;
        return calendar;
    }
    /**
     * Creates the date object with provided parameters
     * @return
     */
    createWithTime(month, day, year, hour, minute) {
        const calendar = new Date(year, month, day, hour, minute, 0);
        return calendar;
    }
    /**
     * Create the string representation in format MM-dd-YYYY
     */
    formatDate(date) {
        const sdf = new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        return sdf.format(date);
    }
}
exports.DateUtility = DateUtility;

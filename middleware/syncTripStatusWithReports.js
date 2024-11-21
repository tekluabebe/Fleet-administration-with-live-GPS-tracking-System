import Report from "../models/DriverTripReport.js";

const syncTripStatusWithReports = async (next) => {
  if (this.isModified('tripStatus') || this.isNew) {
    const report = await Report.findOne({
      'driverDetail.firstName': this.driverDetail.firstName,
      'driverDetail.licenseNumber': this.driverDetail.licenseNumber,
      'tripRoute.departureDate': this.tripRoute.departureDate,
      'tripRoute.returnDate': this.tripRoute.returnDate
    });


    if (report) {
      this.tripStatus = report.tripStatus;
      console.log('tripStatus:', this.tripStatus);
    }
  }
  next();
};

export default syncTripStatusWithReports;
const mongoose = require("mongoose");

const ApplicationSchema = mongoose.Schema({
  //   _id: mongoose.Schema.Types.ObjectId,
  visaType: { type: String, required: true },
  applicationDate: { type: Date, required: true },
  country: { type: String, requried: true },
  caseOfficerAssigned: { type: Boolean, default: false },
  caseOfficerAssignmentDate: { type: Date, default: Date() },
  askedForMedicalCheck: { type: Boolean, default: false },
  askedForMedicalOn: { type: Date, default: 0 },
  medicalCheckIsDue: { type: Date, default: 0 },
  askedForSupplementaryDocuments: { type: Boolean, default: false },
  supplementaryDocumentDate: { type: Date, default: 0 },
  lastUpdated: { type: Date, default: Date.now }
});

function isApplicantOntrack(applicant, averageWaitingPeriod) {
  let alreadyWaitedMilliseconds = Math.abs(
    Date.parse(applicant.applicationDate) - Date.now()
  );
  alreadyWaitedDays = Math.round(
    alreadyWaitedMilliseconds / (1000 * 3600 * 24)
  );
  return alreadyWaitedDays <= averageWaitingPeriod ? true : false;
}
module.exports = mongoose.model("Application", ApplicationSchema);
module.exports.isApplicantOntrack = isApplicantOntrack;

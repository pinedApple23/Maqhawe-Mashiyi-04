class InternshipApplication {
  constructor(applicantId, jobId) {
    this.type = 'Internship';
    this.applicantId = applicantId;
    this.jobId = jobId;
  }
}

class FullTimeApplication {
  constructor(applicantId, jobId) {
    this.type = 'Full-Time';
    this.applicantId = applicantId;
    this.jobId = jobId;
  }
}

class ApplicationFactory {
  static createApplication(type, applicantId, jobId) {
    switch (type) {
      case 'Internship': return new InternshipApplication(applicantId, jobId);
      case 'Full-Time': return new FullTimeApplication(applicantId, jobId);
      default: throw new Error('Invalid application type');
    }
  }
}

module.exports = { ApplicationFactory };
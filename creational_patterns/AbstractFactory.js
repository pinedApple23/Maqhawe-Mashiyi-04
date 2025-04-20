class ApplicantMenu {
  render() { return 'Applicant Menu'; }
}
class HRMenu {
  render() { return 'HR Menu'; }
}

class ApplicantDashboard {
  render() { return 'Applicant Job Search Dashboard'; }
}
class HRDashboard {
  render() { return 'HR Application Review Dashboard'; }
}

class UIFactory {
  createMenu() {}
  createDashboard() {}
}

class ApplicantUIFactory extends UIFactory {
  createMenu() { return new ApplicantMenu(); }
  createDashboard() { return new ApplicantDashboard(); }
}

class HRUIFactory extends UIFactory {
  createMenu() { return new HRMenu(); }
  createDashboard() { return new HRDashboard(); }
}

module.exports = { ApplicantUIFactory, HRUIFactory };
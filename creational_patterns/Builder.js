class JobPost {
  constructor(builder) {
    this.title = builder.title;
    this.description = builder.description;
    this.location = builder.location;
    this.salary = builder.salary;
    this.benefits = builder.benefits;
  }
}

class JobPostBuilder {
  setTitle(title) { this.title = title; return this; }
  setDescription(description) { this.description = description; return this; }
  setLocation(location) { this.location = location; return this; }
  setSalary(salary) { this.salary = salary; return this; }
  setBenefits(benefits) { this.benefits = benefits; return this; }
  build() { return new JobPost(this); }
}

module.exports = { JobPostBuilder };
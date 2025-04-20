class JobTemplate {
  constructor(title, description, location) {
    this.title = title;
    this.description = description;
    this.location = location;
  }

  clone() {
    return new JobTemplate(this.title, this.description, this.location);
  }
}

module.exports = { JobTemplate };
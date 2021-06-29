const db = require("./db");

const Query = {
    jobs: () => db.jobs.list()
}

const Job = {
    company: (job) => db.companies.get(job.companyId)
}

// CommonJS module system
module.exports = {Query, Job};
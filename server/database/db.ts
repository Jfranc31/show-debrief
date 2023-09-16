import { Sequelize } from "sequelize"

const db = new Sequelize('postgres://localhost:5432/show_debrief') // will use psql environment variables

try {
    db.authenticate();
    console.log("Connection Passed.");
}
catch {
    console.error("Connection Failed.");
}

export default db;
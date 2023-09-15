"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('postgres://localhost:5432/show_debrief'); // will use psql environment variables
try {
    db.authenticate();
    console.log("Connection Passed.");
}
catch (_a) {
    console.error("Connection Failed.");
}
exports.default = db;

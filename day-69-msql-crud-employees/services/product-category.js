import { pool } from "../config/mysql-config.js";

export async function getMaxNo() {
  const [rows] = await pool.query("select max(emp_no) as max from employees");
  return rows[0];
}
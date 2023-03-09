import {pool} from "../config/mysql-config.js"

export default async function getCategories() {
    const [rows] = await pool.query( `   select * from popular_category`);
    
    return rows;

}
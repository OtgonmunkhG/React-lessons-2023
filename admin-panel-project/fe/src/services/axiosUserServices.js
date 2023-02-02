import axios from "axios";

async function fetchAllData(URL, setUsers) {
    const FETCHED_DATA = await axios.get(URL);
    console.log(FETCHED_DATA.data.data)
    setUsers(FETCHED_DATA.data.data)
}

export {fetchAllData}
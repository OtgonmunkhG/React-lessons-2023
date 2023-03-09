import express, { request, response } from "express";
import {
  fireEmployee,
  getEmployees,
  getMaxNo,
  hireEmployee,
  updateEmployee,
} from "../services/employee-services.js";
import {getCategories} from "../services/categoryServices.js"
const apiRouter = express.Router();

apiRouter.get("/popular", async (request, response) => {
    const result = await getCategories();
    response.status(200).send(result)
})
// api_router.get("/employees", async (request, response) => {
//   const result = await getEmployees();
//   console.log(result);

//   response.status(200).send(result);
// });

// api_router.put("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);
//   const result = await updateEmployee(body.empNo, body.lastName, body.gender);
//   console.log(result);
//   response.status(200).send(result);
// });

// api_router.delete("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);
//   const result = await fireEmployee(body.empNo);

//   response.status(200).send(result);
// });

// api_router.post("/employee", async (request, response) => {
//   const { birthDate, firstName, lastName, gender, hireDate } = request.body;
//   const { max } = await getMaxNo();
//   const result = await hireEmployee(
//     max + 1,
//     birthDate,
//     firstName,
//     lastName,
//     gender,
//     hireDate
//   );
//   console.log(max);
//   console.log(result);
//   response.status(200).send({});
// });

export default apiRouter;

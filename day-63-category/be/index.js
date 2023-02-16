console.log("Day - 63 Category CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { response } = require("express");

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());

app
  .route("/category")
  .post((request, response) => {
    const body = request.body;
    const isEdit = body.isEdit;
    console.log(body);

    const categoryData = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });
    const categoryDataObj = JSON.parse(categoryData);

    console.log(isEdit);
    if (isEdit) {
      categoryDataObj.map((category) => {
        if (category.id == body.categoryId) {
          category.name = body.categoryName;
        }

        return category;
      });
    } else {
      const newCategory = {
        id: Date.now().toString(),
        name: body.categoryName,
      };
      categoryDataObj.push(newCategory);
    }

    // categoryDataObj.push(newCategory);

    const writeCategoryData = fs.writeFileSync(
      "./data/categories.json",
      JSON.stringify(categoryDataObj)
    );
    console.log(writeCategoryData);
    if (writeCategoryData) {
      response.json({
        status: "file write erro",
        data: [],
      });
    } else {
    }
    response.json({
      status: "success",
      data: categoryDataObj,
    });
    console.log(typeof categoryData);
  })
  .get((request, response) => {
    const readCategoryData = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    response.json({
      status: "success",
      data: JSON.parse(readCategoryData),
    });
  })
  .delete((request, response) => {
    const body = request.body;

    const savedCategories = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });
    const savedCategoriesObject = JSON.parse(savedCategories);
    const filteredCategories = savedCategoriesObject.filter(
      (category) => category.id != body.categoryId
    );
    console.log(filteredCategories.length);
    fs.writeFileSync(
      "./data/categories.json",
      JSON.stringify(filteredCategories)
    );

    console.log(body);
    response.json({
      status: "success",
      data: filteredCategories,
    });
  })
  .put((request, response) => {
    const body = request.body;
    console.log(body);

    const catId = body.categoryId;

    const savedCategories = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    const savedCategoriesObjArray = JSON.parse(savedCategories);
    const foundCategory = savedCategoriesObjArray.filter(
      (category) => category.id == catId
    )[0];

    response.json({
      status: "success",
      data: foundCategory,
    });
  });

app.get("/search", (request, response) => {
  console.log(request.query);
  const savedCategories = fs.readFileSync("./data/categories.json", {
    encoding: "utf-8",
    flag: "r",
  });

  const savedCategoriesArrayObj = JSON.parse(savedCategories);

  const foundCategory = savedCategoriesArrayObj.filter((category) =>
    category.name.includes(request.query.value)
  );

  response.json({
    status: "success",
    data: foundCategory,
  });
});

app.listen(PORT, (request, response) => {
  console.log(`Server is running in http://localhost:${PORT}`);
});

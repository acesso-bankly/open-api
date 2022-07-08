const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const apiList = require('./apiList')

const app = express();
const port = 3320;
let urls = []

app.use(cors());
app.use("/commons/components", express.static(__dirname + "/commons/components.yaml"));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

apiList.forEach(element => {
  app.use(
    `/${element}/schema`,
    express.static(__dirname + `/apis/v1/${element}/schema.yaml`)
  );
  urls.push({
    url: `/${element}/schema`,
    name: capitalizeFirstLetter(element),
  })
});

const options = {
  explorer: true,
  swaggerOptions: { urls: urls },
};

app.use("/reference", swaggerUi.serve, swaggerUi.setup(null, options));

app.listen(port, () => {
  console.log(`Bankly's Open Api Reference Server listening at http://localhost:${port}`);
});

import { app } from ".";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.config.json';

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333, () => console.log("Server is running!"));

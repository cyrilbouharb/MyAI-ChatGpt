import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
const PORT = process.env.PORT || 5000;
//connectiond and listeneres
connectToDatabase().then(() => {
    app.listen(PORT, () => console.log("Server Open & connected to Database"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map
import app from "./app"
import { startConnection } from "./database"  

startConnection()
app.listen(app.get("port"));
console.log(`Listening on http://localhost:${app.get("port")}`);
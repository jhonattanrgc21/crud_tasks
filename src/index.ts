import App from './app';
import db from './config/database';

// Realiza la conexion con la BD
db();

// Inicializa y ejecuta el servidor
const app = new App();
app.start();
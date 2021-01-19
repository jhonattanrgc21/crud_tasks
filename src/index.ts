// ======================================
//			    Modules
// ======================================
import 'reflect-metadata';
import App from './app.module';
import { createConnection} from 'typeorm';
//import db from './config/database';

// ======================================
//			Connect to DB
// ======================================
createConnection();
//db();

// ======================================
//			    Server
// ======================================
const app = new App();
app.start();
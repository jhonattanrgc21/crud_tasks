// ======================================
//               Modules
// ======================================
import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import {join} from 'path';

// ======================================
//              Routes
// ======================================
import indexRoutes from './routes/index.routes';
import taskRoutes from './routes/tasks.routes';

// ======================================
//          Class Application
// ======================================
export default class Application {

    // ======================================
    //          Atributos
    // ======================================
    app: express.Application;

    // ====================================== 
    //          Metodos
    // ======================================
    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', 4000);
        this.app.set('views', join(__dirname, 'views'));
        this.app.engine('.hbs', exphbs({
            layoutsDir: join(this.app.get('views'), 'layouts'),
            partialsDir: join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs'
        }));
        this.app.set('view engine', '.hbs');
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.static(join(__dirname, 'public')));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(){
        this.app.use(indexRoutes);
        this.app.use('/tasks' ,taskRoutes);
    }

    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port:', this.app.get('port'));
        })
    }
}
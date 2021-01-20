// ======================================
//               Modules
// ======================================
import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import {join} from 'path';
import {ApolloServer} from 'apollo-server-express';
import {buildSchema} from 'type-graphql';

// ======================================
//              Routes
// ======================================
import indexRoutes from './routes/index.routes';
import taskRoutes from './routes/tasks.routes';

// ======================================
//             Application
// ======================================
export default async function App(){
    const app = express();

    // Setting
    app.set('port', 4000);
    app.set('views', join(__dirname, 'views'));
    app.engine('.hbs', exphbs({
        layoutsDir: join(app.get('views'), 'layouts'),
        partialsDir: join(app.get('views'), 'partials'),
        defaultLayout: 'main',
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs');

    const schema = await buildSchema({
        validate: true,
        resolvers: [
            join(__dirname, '/models/**.model.{ts,js}'),
            join(__dirname, '/app/**/**.resolver.{ts,js}'),
        ],
        dateScalarMode: 'timestamp',
     });

     const apolloServer = new ApolloServer({
        schema,
        playground: process.env.NODE_PLAY ? true : false,
        context: ({ req, res }) => ({ req, res }),
    });

    apolloServer.applyMiddleware({app, path: '/v1' });

    // Meddlewares
    app.use(morgan('dev'));
    app.use(express.static(join(__dirname, 'public')));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    // Routes
    app.use(indexRoutes);
    app.use('/tasks' ,taskRoutes);
    return app;
}

// ======================================
//          Class Application
// ======================================
/*export default class Application {

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

    async start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port:', this.app.get('port'));
        })
    }
}*/
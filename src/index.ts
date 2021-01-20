import 'reflect-metadata';
import App from './app.module';
import { createConnection} from 'typeorm';

// ======================================
//			    Constant
// ======================================
const PORT = process.env.NODE_PORT || 4000;

// ======================================
//			    Server
// ======================================
async function main(){
    createConnection();
    const app = await App();
    
    app.listen(PORT, () =>
		console.log(`Application is running on: http://localhost:${PORT}`),
	)
}

main();
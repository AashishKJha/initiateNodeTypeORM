import { createConnection } from 'typeorm';
import DBConfig from './config/db.config';

export default class AppServer {
	static async createDBConnection(dropBeforeSync) {
		try {
			const connection = await createConnection(new DBConfig());
			connection.synchronize(dropBeforeSync);
		} catch (error) {
			console.log(error);
		}
	}
}

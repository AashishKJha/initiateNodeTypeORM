import UserEntity from '../app/entity/User';

export default class DBConfig {
    type = 'mysql';

    host = 'localhost';

    port = 3306;

    username = 'root';

    password = 'Demo@123';

    database = 'mean_db';

    entities = []

    constructor() {
        this.loadEntities();
    }

    loadEntities() {
        this.entities.push(UserEntity);
    }
}

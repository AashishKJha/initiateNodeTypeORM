import { Repository, EntityRepository } from 'typeorm';
import UserEntity from '../entity/User';

@EntityRepository(UserEntity)
class UserRepo extends Repository {
    findByName(name) {
        return this.findOne({ firstName: name });
    }
}

export default UserRepo;

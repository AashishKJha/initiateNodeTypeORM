import { getCustomRepository } from 'typeorm';
import UserRepo from '../repos/user.repo';

class UserService {
    getUsers() {
        const user = getCustomRepository(UserRepo);
        user.find().then((data) => {
            data.forEach((d) => {
                console.log(d);
            });
        });
    }
}
export default UserService;

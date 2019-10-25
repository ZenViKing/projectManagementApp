<<<<<<< HEAD
import { User } from './user.model';
export class Task {
    constructor (
        public name?: string,
        public status?: string,
        public assignedUsers?: Array<User[]>,
        public desc?: string
=======
import {User} from './user.model'
export class Task {
    constructor (
        public name?: string,
        public desc?: string,
        public assignedUsers?: Array<User[]>,
        public status?: string
>>>>>>> 2c43686f4d968db385232f3bfd1e37004cc352b2
    ){}
}
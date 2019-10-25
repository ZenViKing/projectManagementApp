import { User } from './user.model';
export class Task {
    constructor (
        public name?: string,
        public status?: string,
        public assignedUsers?: Array<User[]>,
        public desc?: string
    ){}
}
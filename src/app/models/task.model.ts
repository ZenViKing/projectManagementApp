import {User} from './user.model'
export class Task {
    constructor (
        public name?: string,
        public desc?: string,
        public assignedUsers?: Array<User[]>,
        public status?: string
    ){}
}
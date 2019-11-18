import {User} from './user.model'
export class Task {
    constructor (
        public _id?: number,
        public name?: string,
        public desc?: string,
        public assignedUsers?: Array<User[]>,
        public status?: {type: String, default: 'backlogs'},
        public priority?: string,
        public project?: string
    ){}
}
import { User } from './user.model';

export class Project {
    constructor(
        public _id?: Number,
        public name?: String,
        public date?: Date,
        public deadline?: Date,
        public time?: Number,
        public staff?: Array<User[]>,
        public desc?: String,
        public inProgress?: Boolean
    ) { }
}
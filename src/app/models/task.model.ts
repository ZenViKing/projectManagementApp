export class Task {
    constructor (
        public id: number,
        public name: string,
        public status: boolean,
        public estimatedtime?: number,
        public crew_member?: [string],
        public description?: string
    ){}
}
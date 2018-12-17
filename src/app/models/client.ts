import { User } from "./user";
import { Mentor } from "./mentor";

export class Client extends User {

    carePlan: string;
    mentors: Mentor[];
}
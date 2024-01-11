import { Coach } from "./Coach";

export class GolfCoach implements Coach {
    getDailyWork(): string {
        return "Doing a Golf Exercise";
    }
    
}
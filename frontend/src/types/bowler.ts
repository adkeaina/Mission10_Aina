import { team } from "./team";

export type bowler = {
    bowlerId: number;
    bowlerLastName: string;
    bowlerFirstName: string;
    bowlerMiddleInit: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
    teamId: number;
    bowlerScores: any[];
    team: team;
}
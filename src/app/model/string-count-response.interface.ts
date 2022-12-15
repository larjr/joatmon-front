import { StringCountRequest } from "./string-count-request.interface";

export interface StringCountResponse {
    stringCountRequest: StringCountRequest;
    caracters: number;
    caractersWithoutSpaces: number;
    words: number;
    spaces: number;
    vowels: number;
    numbers: number;
    lines: number;
}

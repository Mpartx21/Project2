import { userFavoriteMovies } from "../userFavoriteMovies/userfavoritemovies";

export interface User {
    userId:number;
    password:string;
    firstName:string;
    lastName:string;
    userName:string;
    userEmail:string;
    userFavoriteMovies:string;
    
}
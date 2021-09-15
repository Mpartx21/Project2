import { User } from "../user/user";

export interface userFavoriteMovies{
    favMovieId:number;
    movieId:string;
    user:User;
}
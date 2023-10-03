import express from "express";                                                                         1.
const router = express.Router(); 

import { getMovies, getMoviesById, createMoives, deleteMovieById, updateMovieById } from "../Service/movies.service.js";

router.get("/", async function(request, response){
  const movies = await getMovies()
  response.send(movies)
  console.log(movies)
});

router.get("/:id", async function(request, response){
  const {id} = request.params;
  console.log(id);
  const Movie = await getMoviesById(id)
  console.log(Movie);
  Movie ? response.send(Movie) : response.status(404).send({message:'Movie Not Found'})
});

router.post("/", async function (request,response){
  const data = request.body;
  console.log(data);
  const result = await createMoives(data)
  response.send(result);
});

router.delete("/:id", async function (request, response){
  const{id} = request.params;
  console.log(id);
  const result = await deleteMovieById(id)
  console.log(result);
  result.deletedCount >= 1
    ? response.send({message: "Movie deleted successfully"})
    : response.status(404).send({message:"Movie not found"});
});

router.put("/:id", async function (request, response){
  const{id} = request.params;
  const data = request.body;
  console.log(data);
  console.log(id);
  const result = await updateMovieById(id, data)
  response.send(result)
});

export default router;



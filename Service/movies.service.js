import { client } from "../index.js";

export async function updateMovieById(id, data) {
  return await client
    .db("test")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
export async function deleteMovieById(id) {
  return await client
    .db("test")
    .collection("movies")
    .deleteOne({ id: id });
}
export async function createMoives(data) {
  return await client
    .db("test")
    .collection("movies")
    .insertMany(data);
}
export async function getMoviesById(id) {
  return await client
    .db('test')
    .collection('movies')
    .findOne({ id: id });
}
export async function getMovies() {
  return await client
    .db("test")
    .collection("movies")
    .find({})
    .toArray();
}

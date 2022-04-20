# MedBikri Assignment

## Live Link:
[Click Here!](https://medbikri-shreyansh-mishra.herokuapp.com/)

## Tasks Implemented:
- async calls to YouTube search API every 10 seconds in the background
- A GET API which returns the stored video data in a paginated response sorted in descending order of published datetime.
- A basic search API to search the stored videos using their title and description.
- Add support for supplying multiple API keys so that if quota is exhausted on one, it automatically uses the next available key. Separate the API keys with '_' in the .env file.

## Endpoints
- `/getAll` to get all stored videos
- `/search/:query` to search the query in stored videos

## Instructions to setup the project:
```
git clone https://github.com/Shreyansh-Mishra/MedBAssignment
cd MedBAssignment
npm install
```

## Running the Project:
```
npm start ./bin/www
```

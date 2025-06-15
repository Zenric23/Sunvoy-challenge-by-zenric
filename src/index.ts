import express from 'express';
import { fetchUser } from './fetchUser';
import { fetchCurrentAuthenticatedUser } from './fetchCurrentAuthenticatedUser';

const app = express();

fetchUser();
fetchCurrentAuthenticatedUser();

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});

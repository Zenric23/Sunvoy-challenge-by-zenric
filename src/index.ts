import express from 'express';
import { fetchUser } from './fetchUser';

const app = express();

fetchUser();

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});

import axios from 'axios';
import secrets from './discogs-secrets';

export const key = secrets.key;
export const secret = secrets.secret;
export const token = secrets.token;

export default axios.create({
  baseURL: 'https://api.discogs.com',
  headers: {
    Authorization: `Authorization: Discogs token=${token}`,
  },
});

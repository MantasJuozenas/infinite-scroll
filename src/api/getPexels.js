import { createClient } from 'pexels';
const client = createClient('kYuUow2fymwpnMsRcKiERonS961oXZuHzATQr2gKI5vf7ThDtrZCOcmx');
const query = 'Nature';

export const getApiCall = async (page, per_page) => {
  const resp = await client.photos.search({ query, per_page: per_page, page: page });
  return resp;
};

/** Module import */
import express from 'express';
import axios from 'axios';

/** App */
const router = express.Router();
router.get('/', async () => {
  const url = '';
  const data = {};
  await axios({
    url: url,
    method: 'POST',
    data: data,
    responseType: 'stream'
  }).then((response) => {
    const stream = response.data;

    stream.on('data', (chunks) => {
      console.log("Recived chunk:", chunks.toString());
    });

    stream.on('error', (error) => {
      console.log('Stream error: ', error.message);
    });

    stream.on('end', () => {
      console.log('Stream ended');
    });

  }).catch((error) => {
    console.log(error.message);
  });
});

export default router;

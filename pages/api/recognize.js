// pages/api/recognize.js
import client from '../../../lib/visionClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { imageUrl } = req.body;

    try {
      const [result] = await client.labelDetection(imageUrl);
      const labels = result.labelAnnotations;
      res.status(200).json(labels);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error recognizing image' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

//  const response = await fetch('https://vision.googleapis.com/v1/images:annotate?key=', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           requests: [
//             {
//               image: {
//                 content: reader.result.split(',')[1],
//               },
//               features: [
//                 {
//                   type: 'LABEL_DETECTION',
//                   maxResults: 5,
//                 },
//               ],
//             },
//           ],
//         }),
//       });
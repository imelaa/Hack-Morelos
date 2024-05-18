// components/ImageUploader.js
import { useState } from 'react';
import ReactDOM from 'react-dom'; // Add this line

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [labels, setLabels] = useState([]);
  const [name, setName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const response = await fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAFLGhfR8Wu7c3Nv7uBfTTcJbbe1HBwhRs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requests: [
            {
              image: {
                content: reader.result.split(',')[1],
              },
              features: [
                {
                  type: 'LABEL_DETECTION',
                  maxResults: 5,
                },
              ],
            },
          ],
        }),
      });

      const data = await response.json();
      const labels = data.responses[0].labelAnnotations;
      const name = labels[2].description;
      console.log(name);
      console.log(labels);
      setName(name);
      setLabels(labels);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" className='text-color-6'>Upload and Recognize</button>
      </form>
      <ul>
        {Array.isArray(labels) && labels.map((label, index) => (
          <li className='text-color-6' key={index}>{label.description}</li>
        ))}
      </ul>
    </div>
  );
};


export default ImageUploader;

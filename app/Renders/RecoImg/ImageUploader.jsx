import { useState } from 'react';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [labels, setLabels] = useState([]);
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setError(null); // Clear any previous errors
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setError('Please select a file before submitting.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
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

        if (!response.ok) {
          throw new Error('Failed to fetch labels from API');
        }

        const data = await response.json();
        if (!data.responses || !data.responses[0] || !data.responses[0].labelAnnotations) {
          throw new Error('No labels found in the response');
        }

        const labels = data.responses[0].labelAnnotations;
        const name = labels.length > 2 ? labels[2].description : 'N/A';
        setName(name);
        setLabels(labels);
      } catch (error) {
        setError('Error recognizing image labels: ' + error.message);
        setLabels([]);
        setName('');
      }
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="mb-50 mr-50">
        <label htmlFor="fileInput" className="flex flex-col items-center bg-customGreen text-white font-bold py-2 px-2 rounded-3xl w-80 m-2 h-70 mx-2 transition-transform duration-300 transform hover:scale-110">
          Choose File
        </label>
        <input id="fileInput" type="file" className="hidden" onChange={handleFileChange} />
      </div>
      <div className="mb-50 mr-15">
        <button type="submit" className="flex flex-col items-center bg-customGreen text-white font-bold py-2 px-2 rounded-3xl w-80 m-2 h-70 mx-2 transition-transform duration-300 transform hover:scale-110" onClick={handleSubmit}>
          LEER!!
        </button>
      </div>
      {error && <p className='error-message'>{error}</p>}
      <div className="mb-80">
        <ul>
          {Array.isArray(labels) && labels.map((label, index) => (
            <li className='text-color-6' key={index}>{label.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageUploader;

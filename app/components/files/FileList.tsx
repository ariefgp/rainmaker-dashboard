import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    const response = await axios.get('/api/files');
    setFiles(response.data);
  };

  const handleDelete = async (id: any) => {
    await axios.delete(`/api/files/${id}`);
    fetchFiles();  // Refresh the list after deletion
  };

  return (
    <div>
      <h2>Files</h2>
      <ul>
        {files.map((file: any) => (
          <li key={file.id}>
            {file.name}
            <button onClick={() => handleDelete(file.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileForm = ({ file = {}, onSubmit }: any) => {
    const [name, setName] = useState('');

    useEffect(() => {
        if (file.id) {
            setName(file.name);
        }
    }, [file]);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);

        if (file.id) {
            await axios.put(`/api/files/${file.id}`, formData);
        } else {
            await axios.post('/api/files', formData);
        }
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="File Name"
            />
            <button type="submit">{file.id ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default FileForm;

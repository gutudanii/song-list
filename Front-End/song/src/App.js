import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

import 'bootstrap/dist/css/bootstrap.min.css';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const FormContainer = styled.div`
  width: 400px;
  box-shadow: 0 0 5px silver;
  background-color: white;
  padding: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
`;

const MediaListContainer = styled.div`
  margin-top: 2rem;
`;

const MediaListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f8f9fa;
`;

const TableHeadCell = styled.th`
  padding: 0.75rem;
  font-weight: bold;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f8f9fa;
  }
`;

const TableCell = styled.td`
  padding: 0.75rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

function App() {
  const [mediaList, setMediaList] = useState([]);
  const [media, setMedia] = useState({
    id: null,
    name: '',
    description: '',
    author: '',
    releasedDate: '',
    type: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchMediaList();
  }, []);

  const fetchMediaList = () => {
    axios
      .get('http://localhost:8080/api/songs')
      .then((response) => {
        setMediaList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching media list:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedia((prevMedia) => ({ ...prevMedia, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (media.id) {
      // Update media
      axios
        .put(`http://localhost:8080/api/songs/${media.id}`, media)
        .then((response) => {
          console.log('Media updated successfully:', response.data);
          setSuccessMessage('Media updated successfully!');
          fetchMediaList();
          resetMedia();
        })
        .catch((error) => {
          console.error('Error updating media:', error);
        });
    } else {
      axios
        .post('http://localhost:8080/api/songs', media)
        .then((response) => {
          console.log('Media added successfully:', response.data);
          setSuccessMessage('Media added successfully!');
          fetchMediaList();
          resetMedia();
        })
        .catch((error) => {
          console.error('Error adding media:', error);
        });
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/songs/${id}`)
      .then(() => {
        console.log('Media deleted successfully');
        setSuccessMessage('Media deleted successfully!');
        fetchMediaList();
      })
      .catch((error) => {
        console.error('Error deleting media:', error);
      });
  };

  const handleEdit = (media) => {
    setMedia(media);
  };

  const resetMedia = () => {
    setMedia({
      id: null,
      name: '',
      description: '',
      author: '',
      releasedDate: '',
      type: '',
    });
  };

  return (
    <CenteredContainer>
      <h1>Add Song</h1>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <FormGroup>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput
              type="text"
              id="name"
              name="name"
              value={media.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="description">Description</StyledLabel>
            <StyledTextarea
              id="description"
              name="description"
              value={media.description}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="author">Author</StyledLabel>
            <StyledInput
              type="text"
              id="author"
              name="author"
              value={media.author}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="releasedDate">Released Date</StyledLabel>
            <StyledInput
              type="date"
              id="releasedDate"
              name="releasedDate"
              value={media.releasedDate}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="type">Type</StyledLabel>
            <StyledInput
              type="text"
              id="type"
              name="type"
              value={media.type}
              onChange={handleChange}
            />
          </FormGroup>
          <StyledButton type="submit" className="btn btn-primary">
            {media.id ? 'Update Song' : 'Add Song'}
          </StyledButton>
        </StyledForm>
      </FormContainer>

      <MediaListContainer>
        <h1>Media List</h1>
        <MediaListTable className="table table-striped">
          <TableHead>
            <tr>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Description</TableHeadCell>
              <TableHeadCell>Author</TableHeadCell>
              <TableHeadCell>Released Date</TableHeadCell>
              <TableHeadCell>Type</TableHeadCell>
              <TableHeadCell>Action</TableHeadCell>
            </tr>
          </TableHead>
          <TableBody>
            {mediaList.map((media) => (
              <TableRow key={media.id}>
                <TableCell>{media.name}</TableCell>
                <TableCell>{media.description}</TableCell>
                <TableCell>{media.author}</TableCell>
                <TableCell>{media.releasedDate}</TableCell>
                <TableCell>{media.type}</TableCell>
                <TableCell>
                  <ActionButton
                    className="btn btn-danger"
                    onClick={() => handleDelete(media.id)}
                  >
                    Delete
                  </ActionButton>
                  <ActionButton
                    className="btn btn-primary"
                    onClick={() => handleEdit(media)}
                  >
                    Edit
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MediaListTable>
      </MediaListContainer>
    </CenteredContainer>
  );
}

export default App;

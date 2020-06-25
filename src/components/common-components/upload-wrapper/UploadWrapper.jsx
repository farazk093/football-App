import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColumnWrapper from '../wrappers/column-wrapper/ColumnWrapper';

const Container = styled(ColumnWrapper)`
  position: relative;
  justify-content: center;
  align-items: center;
`;

const FileInput = styled.input`
  outline: none;
  border: none;
  background: transparent;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
`;

const UploadWrapper = ({ onDrop, children }) => {
  return (
    <Container>
      <FileInput
        multiple
        onChange={(e) => {
          onDrop(e.target.files);
          e.currentTarget.value = null;
        }}
        type="file"
      />
      {children}
    </Container>
  );
};

UploadWrapper.propTypes = {
  onDrop: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default UploadWrapper;

import React, {useState, useEffect} from 'react';
import Form, {ApiInfo} from "./Form";
import Report from "./Report";
import styled from "styled-components";
import {fetchDocument, FileData, ImageData, fetchImages} from "./api";

const Container = styled.div`
  padding: 1em;
`;

function App() {
  const [apiInfo, setApiInfo] = useState<ApiInfo>(null);
  const [fileData, setFileData] = useState<FileData>(null);
  const [error, setError] = useState<string|null>(null);
  const [loading, setLoading] = useState<"LOADING_DOCUMENT" | "LOADING_IMAGES" | "NONE">("NONE");
  const [imageData, setImageData] = useState<ImageData>(null);

  function handleApiInfoChange(apiInfo:ApiInfo) {
    setApiInfo(apiInfo);
  }

  const fileID: string | null = apiInfo && apiInfo.fileID;
  const personalToken: string | null = apiInfo && apiInfo.personalToken;

  useEffect(() => {
    if(fileID && personalToken) {
      setLoading("LOADING_DOCUMENT");
      setFileData(null);
      setImageData(null);
      setError(null);
      fetchDocument(fileID, personalToken)
      .then((fileData) => {
        setFileData(fileData);
        setLoading("LOADING_IMAGES");
        const componentIds = fileData ? Object.keys(fileData.components) : [];
        return fetchImages(fileID, personalToken, componentIds);
      })
      .then(images => {
        setImageData(images);
        setLoading("NONE");
      })
      .catch((e) => {
        setError(e.message);
        setLoading("NONE");
      });
    } else {
      setLoading("NONE");
      setFileData(null);
      setImageData(null);
    }
  }, [fileID, personalToken]);

  return (
    <Container>
      <Form onSubmit={handleApiInfoChange} />
      { {"NONE" : null, "LOADING_DOCUMENT": "Loading document...", "LOADING_IMAGES": "Loading images..."}[loading] }
      {error ? error : null}
      {fileData ? <Report fileData={fileData} imageData={imageData} /> : null}
    </Container>
  );
}

export default App;

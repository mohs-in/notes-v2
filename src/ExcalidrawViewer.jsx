import { Excalidraw } from "@excalidraw/excalidraw";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

// --- Configuration Constants ---
// The base URL for your GitHub Raw content
const GITHUB_BASE_URL = "https://raw.githubusercontent.com/mohs-in/notes-v2/main/src/";

// /**
//  * Scalable component to load any Excalidraw file from a GitHub repo.
//  * @param {object} props - The component props.
//  * @param {string} props.filePath - The path to the file (e.g., 'notes/Streams.excalidraw').
//  */
export default function ExcalidrawViewer({ filePath }) {
  const [initialData, setInitialData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Construct the full, dynamic URL
  const dynamicUrl = `${GITHUB_BASE_URL}${filePath}`;

  // Reset state and fetch new data whenever the filePath prop changes
  useEffect(() => {
    // Reset state for the new file load
    setIsLoading(true);
    setError(null);
    setInitialData(null);

    async function fetchExcalidrawData() {
      try {
        const response = await fetch(dynamicUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setInitialData(data);
      } catch (e) {
        console.error(`Failed to load Excalidraw data from ${dynamicUrl}:`, e);
        setError(`Failed to load diagram: ${filePath}. Check the URL.`);
      } finally {
        setIsLoading(false);
      }
    }

    if (filePath) {
      fetchExcalidrawData();
    } else {
      setIsLoading(false);
      setError("No file path provided.");
    }

  }, [filePath, dynamicUrl]); // Dependency array: Re-run effect when filePath changes

  if (isLoading) {
    return <div style={{ textAlign: "center", padding: "50px" }}>Loading file: **{filePath}**...</div>;
  }

  if (error) {
    return <div style={{ textAlign: "center", color: "red", padding: "50px" }}>Error: {error}</div>;
  }
  
  // Display the component only when data is ready
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Excalidraw: {filePath}</h1>
      <div style={{ height: "500px" }}>
        <Excalidraw
          initialData={initialData}
          // The onChange handler still doesn't save back to GitHub directly
          onChange={() => {}}
        />
      </div>
    </>
  );
}

ExcalidrawViewer.propTypes = {
    filePath: PropTypes.string.isRequired, 
};
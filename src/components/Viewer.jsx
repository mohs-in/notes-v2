import { Excalidraw } from '@excalidraw/excalidraw';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const GITHUB_BASE_URL =
  'https://raw.githubusercontent.com/mohs-in/notes-v2/main/';

export default function ExcalidrawViewer({ filePath }) {
  const [initialData, setInitialData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dynamicUrl = `${GITHUB_BASE_URL}${filePath}`;

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setInitialData(null);

    async function fetchExcalidrawData() {
      try {
        const response = await fetch(dynamicUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rawText = await response.text();
        const data = JSON.parse(rawText);
        const { elements, appState: fetchedAppState } = data;
        const customAppState = {
          ...fetchedAppState,
          theme: 'dark',
          zoom: {
            value: 0.5,
          },
        };
        setInitialData({
          elements,
          appState: customAppState,
        });
      } catch (e) {
        console.error(`Failed to load Excalidraw data from ${dynamicUrl}:`, e);
        setError(`Failed to load Canvas: ${filePath}. Check the URL.`);
      } finally {
        setIsLoading(false);
      }
    }

    if (filePath) {
      fetchExcalidrawData();
    } else {
      setIsLoading(false);
      setError('No file path provided.');
    }
  }, [filePath, dynamicUrl]);

  if (isLoading) {
    return (
      <div className='text-center p-12 text-gray-400'>
        <div className='animate-spin inline-block w-6 h-6 border-4 border-t-4 border-indigo-500 border-gray-700 rounded-full mb-4'></div>
        <p>
          Loading file: <strong>{filePath}</strong>...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-center p-12 text-red-500 bg-red-900/20 border border-red-700 rounded-lg'>
        <p className='font-semibold mb-2'>Canvas Load Error</p>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <div style={{ height: '100%' }}>
        <Excalidraw initialData={initialData} />
      </div>
    </>
  );
}

ExcalidrawViewer.propTypes = {
  filePath: PropTypes.string.isRequired,
};

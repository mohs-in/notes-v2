import { useState, useEffect } from 'react';
import Header from './components/Header';
import data from './utils/data';
import Skill from './components/Skill';
import Footer from './components/Footer';
import ExcalidrawViewer from './components/Viewer';
import { useGitHubContents } from './utils/fetchNotes';
import { BsFullscreen, BsFullscreenExit } from 'react-icons/bs';

function App() {
  const {
    files: availableNotes,
    isLoading: isNotesLoading,
    error: notesError,
  } = useGitHubContents();
  const [selectedFilePath, setSelectedFilePath] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (
      !isNotesLoading &&
      availableNotes.length > 0 &&
      selectedFilePath === null
    ) {
      setSelectedFilePath('Default.excalidraw');
    }
  }, [isNotesLoading, availableNotes, selectedFilePath]);

  const handleFileChange = (event) => {
    setSelectedFilePath(event.target.value);
  };

  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  // Consistent Loading/Error States
  if (isNotesLoading) {
    return (
      <div className='min-h-screen bg-[#0D1117] text-white text-center p-20'>
        Loading available notes list...
      </div>
    );
  }

  if (notesError || availableNotes.length === 0) {
    return (
      <div className='min-h-screen bg-[#0D1117] text-red-500 text-center p-20'>
        Error loading notes or folder is empty: {notesError}
      </div>
    );
  }

  if (!selectedFilePath) {
    return (
      <div className='min-h-screen bg-[#0D1117] text-white text-center p-20'>
        No files found to display.
      </div>
    );
  }

  const skills = data.map((skill) => <Skill key={skill.id} {...skill} />);

  return (
    <div
      className={`flex flex-col bg-[#0D1117] font-sans ${isFullScreen ? 'h-screen overflow-hidden' : 'min-h-screen'}`}
    >
      {!isFullScreen && <Header />}

      {!isFullScreen && (
        <section className='py-8 px-4 md:px-8 w-full max-w-7xl mx-auto'>
          <h2 className='text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2'>
            Skills & Technologies
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {skills}
          </div>
        </section>
      )}

      <div
        className={`p-4 md:p-8 ${isFullScreen ? 'fixed inset-0 z-50 bg-[#0D1117]' : 'w-full max-w-7xl mx-auto'}`}
      >
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 p-4 bg-[#161B22] rounded-t-lg border-b border-gray-700'>
          <h2
            className={`text-2xl font-semibold ${isFullScreen ? 'text-white' : 'text-white'} mb-3 sm:mb-0`}
          >
            <span className='text-indigo-400 mr-2'>Board:</span>{' '}
            {selectedFilePath
              .replace('src/notes/', '')
              .replace('.excalidraw', '')}
          </h2>

          <div className='flex items-center space-x-4'>
            {!isFullScreen && (
              <div className='flex items-center'>
                <label
                  htmlFor='file-select'
                  className='text-gray-400 mr-3 text-sm hidden sm:inline'
                >
                  Select Board:
                </label>
                <select
                  id='file-select'
                  value={selectedFilePath}
                  onChange={handleFileChange}
                  className='p-2 border border-gray-700 rounded-lg text-white bg-gray-800 focus:ring-indigo-500 focus:border-indigo-500 transition'
                >
                  {availableNotes.map((fullPath) => (
                    <option key={fullPath} value={fullPath}>
                      {fullPath
                        .replace('src/notes/', '')
                        .replace('.excalidraw', '')}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              onClick={toggleFullScreen}
              className={`flex items-center px-3 py-1.5 rounded-lg font-bold transition duration-200 ${isFullScreen ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
              aria-label={
                isFullScreen ? 'Exit Full Screen' : 'View Full Screen'
              }
            >
              {isFullScreen ? (
                <BsFullscreenExit className='w-5 h-5 mr-1' />
              ) : (
                <BsFullscreen className='w-5 h-5 mr-1' />
              )}
              <span className='hidden sm:inline'>
                {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
              </span>
            </button>
          </div>
        </div>

        <div
          className={`rounded-b-lg shadow-xl ${isFullScreen ? 'h-[calc(100vh-80px)]' : 'h-[550px]'}`}
        >
          <ExcalidrawViewer
            filePath={selectedFilePath}
            isFullScreen={isFullScreen}
          />
        </div>
      </div>

      {!isFullScreen && <Footer />}
    </div>
  );
}

export default App;

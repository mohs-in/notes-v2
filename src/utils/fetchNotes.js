import { useState, useEffect } from 'react';

const REPO_OWNER = 'mohs-in';
const REPO_NAME = 'notes-v2';
const CONTENT_PATH = 'src/notes';

const GITHUB_API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${CONTENT_PATH}`;

export function useGitHubContents() {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContents() {
      try {
        const response = await fetch(GITHUB_API_URL);

        if (!response.ok) {
          throw new Error(`GitHub API HTTP error! Status: ${response.status}`);
        }

        const contents = await response.json();

        const filePaths = contents
          .filter(
            (item) => item.type === 'file' && item.name.endsWith('.excalidraw')
          )
          .map((item) => item.path);

        setFiles(filePaths);
      } catch (e) {
        console.error('Failed to fetch GitHub contents:', e);
        setError('Failed to load file list from GitHub API.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchContents();
  }, []);

  return { files, isLoading, error };
}

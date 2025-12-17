#  Mohsin's Notes Archive


##  Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* Node.js (LTS recommended)
* npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mohs-in/notes-v2.git
    cd mohsin-notes-archive
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

The application will typically be available at http://localhost:5173/.


***

##  Available Scripts

Please check package.json for available scripts.
***

##  Content Structure

This application relies on a specific file structure to fetch and display notes:

1.  **Boards:** Excalidraw files (`.excalidraw`) are fetched from the remote GitHub location defined by the `GITHUB_BASE_URL` constant.
2.  **Skill Data:** The list of skills and their high-level metadata (used by the `<Skill />` component) is defined in a local data file (e.g., `src/utils/data.js`).

***

##  Made my  **me :)**

[Website](https://mohs-in.github.io/portfolio/)

***

##  License

This project is licensed under the **ISC License**.

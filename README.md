# SRM DCC Placement Portal

## Overview

The **SRM Directorate of Career Centre (DCC) Placement Portal** is a modern, responsive web application designed to streamline the placement process for students. It provides an intuitive interface for students to browse visiting companies, view recruitment details, and access placement statistics.

Built with performance and user experience in mind, the portal features a clean, professional design aligned with SRM's branding, offering real-time filtering and search capabilities.

## Features

- **Company Dashboard**: Browse a comprehensive list of companies visiting for campus recruitment.
- **Advanced Search & Filtering**: Quickly find companies by name, industry, or role. Filter by categories (e.g., Dream, Super Dream, Marquee).
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Modern UI/UX**: Features a premium interface with glassmorphism effects, smooth animations, and a focus on content density.
- **Data Visualization**: (Planned) Visual insights into placement statistics and trends.

## Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) (v18)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **State Management**: React Hooks & Context

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd PlacementPortal
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will typically handle requests at `http://localhost:8080` (or the port shown in your terminal).

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate the static assets in the `dist` directory. You can preview the production build locally using:

```bash
npm run preview
```

## Project Structure

```
d:\PlacementPortal\
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/      # Reusable UI components
│   ├── data/           # Mock data and types
│   ├── pages/          # Application views/routes
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Entry point
├── index.html          # HTML entry point
├── package.json        # Project metadata and dependencies
├── tailwind.config.ts  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## Contributing

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

This project is proprietary software of the Directorate of Career Centre, SRM Institute of Science and Technology.

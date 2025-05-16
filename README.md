# 1414ers - Colorado 14ers Hiking Guide

A web application for exploring and reviewing Colorado's 14,000-foot mountains (14ers).

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd 1414ers
```

2. Install dependencies:
```bash
npm install
```

3. Install additional required packages:
```bash
npm install react-router-dom@5
```

## Running the Application

The application consists of two parts:
- Frontend (React app) running on port 3001
- Backend (JSON Server) running on port 3000

### Start Both Servers (Recommended)

To start both servers simultaneously:
```bash
npm start
```

This will:
- Start the React frontend on http://localhost:3001
- Start the JSON Server backend on http://localhost:3000

### Available Endpoints

- Mountains: http://localhost:3000/mountains
- Reviews: http://localhost:3000/reviews

## Features

- Browse Colorado 14ers
- View detailed mountain information
- Read and write reviews
- Search functionality
- Star rating system

## Project Structure

```
└── App
    ├── Home
    ├── Info
    ├── NavBar
    ├── Review
    ├── MountainCard
    └── MountainList
```

## Troubleshooting

If you encounter any issues:

1. Make sure no other applications are using ports 3000 or 3001
2. Try stopping all running servers (Ctrl + C) and restart
3. Check that all dependencies are installed correctly
4. Ensure the db.json file is present in the root directory

## Development

- Frontend code is in the `src` directory
- Database is stored in `db.json`
- Styling is in individual component CSS files

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

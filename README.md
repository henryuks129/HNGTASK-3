# Image Galleria Web Application

## Overview of the Project

## Description

This project is a fully functional and responsive image gallery that allows authenticated users to showcase and interact with a collection of images. Users can log in, drag and drop images, search for images by tags, and enjoy a seamless and visually appealing experience.

## Table of Contents

- [Requirements for this Application](#Requirements)
- [Image Display](#Image-Dispaly)
- [API Integration](#api-integration)
- [Error Handling](#error-handling)
- [Getting Started](#getting-started)
- [Deployment](#deployment)

## Requirements for this Application

- Create a web application that allows users to view different photos.
- Simple Authentication
- Users can log in with the following credentials:(Username: user@example.com ,Password: 1Password)
- Authentication form fields have should have a proper validation setup and error messages to handle the form errors.

## Image Display

Display a visually appealing grid layout that showcases a collection of images.
Add a tag to each image for easy identification.
Ensure consistent spacing and sizing of images for a polished appearance.
Loading State
Implement a loading state for when images are not ready for display.
Display a skeleton loader or loading spinner when loading is true to indicate ongoing data retrieval.
Search Functionality
Include a search field that allows users to filter the image list based on tags associated with the images.
Enhance the user experience by enabling quick access to specific images.
Drag-and-Drop
Implement the ability for authenticated users to drag and drop images within the gallery.
Ensure smooth and intuitive drag-and-drop interactions.
Provide visual cues and animations to enhance user feedback during the process.
Responsive Design
Ensure that the gallery is responsive and functions seamlessly on various devices, including desktop screens, mobile phones, and tablets.
Design Flexibility
While adhering to the above requirements, exercise creative freedom to design a unique and visually appealing user interface.
Acceptance Criteria
Functional Authentication: A fully functional authentication process is in place.
Drag-and-Drop Feature: A fully functional drag-and-drop feature is implemented.
Responsiveness: The design is responsive across various desktop screens, including mobile and tablet screens.
User Experience: The design is intuitive, appealing, and encourages easy navigation and operation without lagging.
Image Display: All images have consistent spacing and sizing for a polished appearance.

## API Intergration

- The api used for this application was created locally in a DB.jsx file and it contains the images used for this application, the title and the tags. 
## Technologies Used

- React
- Vite
- CSS (for styling and animations)
- React DnD (for drag-and-drop functionality)

## Authentication (Firebase)

- Authentication has been setup using Firebase as our backend service provider. This means we don't need to worry about setting up any server side code. We
- Authentication using Firebase Auth API was used as it provides an out of box solution which makes development easier without having to build our own auth system from scratch
- Authentication was done using Firebase Auth which provides several features such as email/password sign ups, password resets etc...

## Installation

- Clone this repository to your local machine:

- Git bash
- Copy code
- git clone (https://github.com/henryuks129/HNGTASK-3.git) into a new folder that you have created using (mkdir "directory-name") in your git bash

Change to the project directory:

bash
Copy code
cd drag-and-drop-image-gallery
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your web browser and navigate to http://localhost:3000 to access the application.

Usage
Log in using the following credentials:

Username: user@example.com
Password: 1Password
Explore the image gallery, drag and drop images, use the search functionality to filter images by tags, and enjoy the responsive design.

Acknowledgments
This project is based on a coding challenge and is intended for educational purposes.
Special thanks to the creators and contributors of Vite, React, React DnD, and the chosen authentication solution.
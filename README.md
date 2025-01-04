# alimehmet.github.io

## Project Overview

This project is a personal website for Mehmet Ali Ongan, showcasing his portfolio, contact information, and other relevant details. The website is built using HTML, CSS, JavaScript and various libraries and frameworks such as Bootstrap and jQuery. It also includes a Docker setup for easy deployment and development.

## Project Structure

The project has the following structure:

## Files and Directories

- **about.html**: Contains the "About Me" page.
- **contact.html**: Contains the "Contact" page with a contact form.
- **docker-compose.yml**: Docker Compose configuration file.
- **Dockerfile**: Dockerfile for building the Jekyll site.
- **Gemfile**: Specifies the Ruby gems required for the project.
- **Gemfile.lock**: Lock file for the Ruby gems.
- **img/**: Directory containing images used in the website.
- **index.html**: The main homepage of the website.
- **nginx.conf**: Nginx configuration file.
- **pdfFromHTML.js**: JavaScript file for generating PDFs from HTML content.
- **portfolio1.html**, **portfolio2.html**, **portfolio3.html**: Portfolio project pages.
- **scripts.js**: JavaScript file containing custom scripts for the website.
- **stil.css**: Custom CSS file for styling the website.
- **.gitattributes**: Git attributes file.
- **.gitignore**: Git ignore file.
- **.jekyll-cache/**: Directory for Jekyll cache.

## Dependencies

The project uses the following dependencies:

- **Bootstrap**: For responsive design and styling.
- **jQuery**: For DOM manipulation and AJAX requests.
- **Font Awesome**: For icons.
- **jsPDF**: For generating PDFs from HTML content.
- **Jekyll**: For building the static site.
- **Nginx**: For serving the site.

## Docker Setup

The project includes a Docker setup for easy deployment and development. The `docker-compose.yml` file defines two services:

- **jekyll**: Builds the Jekyll site.
- **nginx**: Serves the site using Nginx.

To build and run the project using Docker, use the following commands:

```sh
docker-compose build
docker-compose up
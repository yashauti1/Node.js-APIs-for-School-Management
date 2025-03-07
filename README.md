School Management API
This project is a Node.js + Express.js API for managing school data with MySQL. It allows users to add schools and retrieve a sorted list of schools based on proximity to a given location.

Features
✅ Add new schools with name, address, latitude, and longitude.
✅ Retrieve a sorted list of schools based on the user’s location.
✅ Input validation to ensure correct data entry.
✅ Hosted on Render/Railway for public access.
✅ Postman collection for easy testing.

1️⃣ Installation
Prerequisites
Node.js installed
MySQL Database setup
Clone the Repository
sh
Copy
Edit
git clone https://github.com/YOUR_GITHUB_USERNAME/school-management-api.git
cd school-management-api
Install Dependencies
sh
Copy
Edit
npm install
Setup Environment Variables
Create a .env file in the root folder and add the following:

env
Copy
Edit
DB_HOST=your_remote_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
DB_PORT=3306
PORT=5000
2️⃣ Running the API Locally
Start the Server
sh
Copy
Edit
npm run dev
The API will be running at:
👉 http://localhost:5000/

3️⃣ API Endpoints
➤ Add a School
Endpoint: /addSchool
Method: POST
Request Body:
json
Copy
Edit
{
  "name": "ABC School",
  "address": "123 Street, City",
  "latitude": 12.3456,
  "longitude": 78.9101
}
Response:
json
Copy
Edit
{
  "message": "School added successfully"
}
➤ List Schools (Sorted by Distance)
Endpoint: /listSchools
Method: GET
Query Parameters:
ini
Copy
Edit
latitude=12.34
longitude=56.78
Response Example:
json
Copy
Edit
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "123 Street, City",
    "latitude": 12.3456,
    "longitude": 78.9101
  }
]
4️⃣ Deployment
Deploy on Render (Recommended)
Push your code to GitHub
Go to Render and create a new Web Service
Connect your GitHub Repository
Set the Start Command:
sh
Copy
Edit
npm install && npm start
Add environment variables (.env) in Render
Click Deploy 🚀
5️⃣ Postman Collection
A Postman collection is provided for testing.

👉 Download the Collection: Postman Collection Link (Replace with actual link)

6️⃣ Technologies Used
Node.js
Express.js
MySQL
dotenv (for environment variables)
nodemon (for development)
7️⃣ Contribution
Want to improve this project? Feel free to fork and submit a PR! 🤝


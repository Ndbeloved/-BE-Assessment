# BE Assessment Project

This repository contains the backend assessment project designed to demonstrate the implementation of a RESTful API using **Node.js**, **Express**, and **MongoDB**. The application includes functionality to manage "Causes" with CRUD operations and validation.

## Features

- **Create Cause**: Add a new cause event to the database.
- **Read Causes**: Retrieve a list of all causes or a single cause by ID.
- **Update Cause**: Modify details of an existing cause.
- **Delete Cause**: Remove a cause from the database.
- **Validation**: Includes input validation to ensure data integrity.
- **Error Handling**: Comprehensive error handling for API responses.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for data persistence.
- **Mongoose**: ODM library for MongoDB.

## Prerequisites

To run this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) (optional, if running in containers)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Ndbeloved/-BE-Assessment.git
   cd -BE-Assessment






## API Endpoints

### Base URL: `/api/v1/causes`

| Method | Endpoint         | Description                  |
|--------|------------------|------------------------------|
| POST   | `/`              | Create a new cause          |
| GET    | `/`              | Get all causes              |
| GET    | `/:id`           | Get a single cause by ID    |
| PATCH  | `/:id`           | Update a cause by ID        |
| DELETE | `/:id`           | Delete a cause by ID        |

---

### Example Requests and Responses

#### **1. Create Cause**
**Request**:
    ```http
    POST /api/v1/causes
    Content-Type: application/json

**Payload**:

    ``json
    {
        "title": "Support Education",
        "description": "Helping children access quality education",
        "targetAmount": 5000
    }`

**Response**:

    ``json
    {
    "success": true,
    "data": {
            "_id": "60c5ba1943fdc516e030121f",
            "title": "Support Education",
            "description": "Helping children access quality education",
            "targetAmount": 5000,
            "createdAt": "2025-01-10T12:00:00.000Z"
        }
    }`

#### **2. Get All Causes**

**Request**:

    ```http
    GET /api/v1/causes
    
Response:

json
Copy code
{
  "success": true,
  "data": [
    {
      "_id": "60c5ba1943fdc516e030121f",
      "title": "Support Education",
      "description": "Helping children access quality education",
      "targetAmount": 5000,
      "createdAt": "2025-01-10T12:00:00.000Z"
    },
    {
      "_id": "60c5bc4b43fdc516e0301220",
      "title": "Plant More Trees",
      "description": "Reforestation in urban areas",
      "targetAmount": 3000,
      "createdAt": "2025-01-10T12:30:00.000Z"
    }
  ]
}
3. Get Cause by ID
Request:

http
Copy code
GET /api/v1/causes/60c5ba1943fdc516e030121f
Response:

json
Copy code
{
  "success": true,
  "data": {
    "_id": "60c5ba1943fdc516e030121f",
    "title": "Support Education",
    "description": "Helping children access quality education",
    "targetAmount": 5000,
    "createdAt": "2025-01-10T12:00:00.000Z"
  }
}
4. Update Cause
Request:

http
Copy code
PATCH /api/v1/causes/60c5ba1943fdc516e030121f
Content-Type: application/json
Payload:

json
Copy code
{
  "title": "Support Education and Health",
  "targetAmount": 6000
}
Response:

json
Copy code
{
  "success": true,
  "data": {
    "_id": "60c5ba1943fdc516e030121f",
    "title": "Support Education and Health",
    "description": "Helping children access quality education",
    "targetAmount": 6000,
    "createdAt": "2025-01-10T12:00:00.000Z"
  }
}
5. Delete Cause
Request:

http
Copy code
DELETE /api/v1/causes/60c5ba1943fdc516e030121f
Response:

json
Copy code
{
  "success": true,
  "message": "Cause deleted successfully"
} 
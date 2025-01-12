
# Backend Engineer Assessment

This repository contains the implementation of a RESTful API to manage social causes and contributions.

## Objective

The goal of this project is to build an API that supports CRUD operations for social causes and allows users to contribute to those causes.

---

## Endpoints

### Causes

- **POST /causes**: Create a new cause.
  - **Request Body**:
    ```json
    {
      "title": "Cause Title",
      "description": "Cause Description",
      "image_url": "https://example.com/image.jpg"
    }
    ```
  - **Response**:
    ```json
    {
      "id": "unique-cause-id",
      "title": "Cause Title",
      "description": "Cause Description",
      "image_url": "https://example.com/image.jpg"
    }
    ```

- **GET /causes**: Retrieve all causes.
  - **Response**:
    ```json
    {
    "success": true,
    "data": [
      {
        "_id": "60c5ba1943fdc516e030121f",
        "title": "Support Education",
        "description": "Helping children access quality education",
        "image_url": "https://example_image.png"
      },
      {
        "_id": "60c5bc4b43fdc516e0301220",
        "title": "Plant More Trees",
        "description": "Reforestation in urban areas",
        "image_url": "https:''example_image2"
      }
    ]
  }
  ```

- **GET /causes/:id**: Retrieve a specific cause by ID.
  - **Response**:
    ```json
    {
      "id": "unique-cause-id",
      "title": "Cause Title",
      "description": "Cause Description",
      "image_url": "https://example.com/image.jpg"
    }
    ```

- **PUT /causes/:id**: Update a specific cause by ID.
  - **Request Body**:
    ```json
    {
      "title": "Updated Cause Title",
      "description": "Updated Cause Description",
      "image_url": "https://example.com/updated-image.jpg"
    }
    ```
  - **Response**:
    ```json
    {
      "id": "unique-cause-id",
      "title": "Updated Cause Title",
      "description": "Updated Cause Description",
      "imageUrl": "https://example.com/updated-image.jpg"
    }
    ```

- **DELETE /causes/:id**: Delete a specific cause by ID.
  - **Response**:
    ```json
    {
      "message": "Cause deleted successfully"
    }
    ```

### Contributions

- **POST /causes/:id/contribute**: Accept contributions to a cause.
  - **Request Body**:
    ```json
    {
      "name": "Contributor Name",
      "email": "contributor@example.com",
      "amount": 100
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Contribution added successfully",
      "data": {
        "name": "Contributor Name",
        "email": "contributor@example.com",
        "amount": 100
      }
    }
    ```

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Ndbeloved/-BE-assessment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd -BE-assessment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Tools and Technologies

- Node.js
- Express.js
- MongoDB (via Mongoose)

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For further inquiries, contact [Erastus Beloved](mailto:belovederastus@gmail.com).

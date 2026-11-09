# Product Inventory REST API

## Description

A RESTful Product Inventory API built for a small electronics shop to manage its product inventory. It allows the shop owner to perform CRUD operations, search and filter products, monitor low-stock items, and calculate the total inventory value.

## Features

- View all products
- View a single product
- Add a new product
- Update a product
- Delete a product
- Search products by name
- Filter products by category
- Find products below a certain price
- Display low-stock products
- Calculate total inventory value
- Input validation
- Proper error handling
- Meaningful HTTP status codes

## Technologies Used

- Node.js
- Express.js
- Postman (API testing)

## Project Structure
```text
product-inventory-api/
│── package.json
│── app.js
│
├── routes/
│ └── productRoutes.js
│
├── controllers/
│ └── productController.js
│
├── data/
│ └── products.js
│
└── README.md
```

## Installation
```bash
git clone YOUR_REPOSITORY_URL
cd product-inventory-api
npm install
```
## Running the Server

Start the server using:

```bash
npm start 
``` 
or 
```bash
npm run dev
```
## API Endpoints

| Method |	Endpoint |	Description |
|---|---|---|
| GET |	/products |	Get all products |
| GET | /products/:id |	Get a product by ID |
| POST | /products |	Create a product |
| PUT | /products/:id |	Update a product |
| DELETE |	/products/:id |	Delete a product |
| GET |	/products/search?name=phone |	Search by name |
| GET |	/products/category/:category |	Filter by category |
| GET |	/products/price/:maxPrice |	Find products below a price |
| GET |	/products/low-stock |	Get products with quantity below 5 |
| GET |	/products/value |	Calculate total inventory value |

## Request Validation

- Name must be a nonempty string.
- Price must be a positive number.
- Quantity must be a number greater than or equal to zero.
- Category must be a nonempty string.
- Request body must not be empty.

## Testing

The API was tested using Postman.

The following scenarios were tested:
- Retrieving all products and a single product.
- Creating, updating, and deleting products.
- Searching and filtering products.
- Checking low-stock products and inventory value.
- Testing invalid input and nonexistent product IDs.
- Verifying appropriate HTTP status codes.


# HOSPITAL MANAGEMENT APP (BACKEND) - Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
4. [Render URL]
5. [Installation](#installation)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Database Schema](#database-schema)

## Technologies Used
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## Installation

Step-by-step instructions on how to get a development environment running.

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the necessary environment variables.
   ```env
   PORT=5000
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   STRIPE_SECRET_KEY=your-stripe-secret-key
   PORT = 4000
   FRONTEND_URL_ONE = http://localhost:5173
   FRONTEND_URL_TWO =  http://localhost:5174
   JWT_EXPIRES=7d
   CLOUDINARY_CLOUD_NAME= hhhhhhh
   CLOUDINARY_API_KEY=	000000000000
   CLOUDINARY_API_SECRET= 45bkjchhclijsiljsjco
   COOKIE_EXPIRE=7
   ```

4. **Run the development server:**
   ```sh
   npm start
   ```

## Usage

Provide instructions and examples for using the project.

1. **Start the server:**
   ```sh
   npm start
   ```

2. **API Base URL:**
   ```sh
   http://localhost:5000/api
   ```

## API Endpoints

### User Authentication Endpoints-  Login and Register(SignUp)

- **POST https://backendurl/api/v1/user/patient/register** - Register
- **POST https://backendurl/api/v1/user/login** -Login by Patient
- **POST https://backendurl/api/v1/user/admin/addnew** - Add new Admin
- **POST https://backendurl/api/v1/user/doctor/addnew** -  Add new Doctors
- **GET https://backendurl/api/v1/user/doctors** -List all Doctors
- **GET https://backendurl/api/v1/user/patient/me** - Login by Patient
- **GET https://backendurl/api/v1/user/admin/me** -Login by Admin
- **GET https://backendurl/api/v1/user/patient/logout** -Patient logout
- **GET https://backendurl/api/v1/user/admin/logout** -Admin Logout
  
### Message Endpoints

- **POST https://backendurl/api/v1/message/send** - Send Message
- **GET https://backendurl/api/v1/message/getall** -getall Messages
- 
### Appontment  Endpoints

- **POST https://backendurl/api/v1/appointment/post** - Place Appointment
- **GET https://backendurl/api/v1/appointment/getall** - getting all Appoitment
- **PUT https://backendurlm/api/v1/appointment/update/:id** - Update Patient Appointment
- **DELETE https://backendurl/api/v1/appointment/delete/:id** - Delete Patient appointment

## Database Schema

### User Model
```json

{
  "firstName": "String",
  "lastName": "String",
  "email": "String",
  "phone": "String",
  "nic": "String",
  "dob": "Date",
  "gender": "String",
  "password": "String",
  "role": "String",
  "doctorDepartment": "String",
  "docAvatar": {
    "public_id": "String",
    "url": "String"
  }
}


```
### Message Model
```json
{
  "firstName": "String",
  "lastName": "String",
  "email": "String",
  "phone": "String",
  "message": "String"
}

```

### Appointment Model
```json
{
  "firstName": "String",
  "lastName": "String",
  "email": "String",
  "phone": "String",
  "nic": "String",
  "dob": "Date",
  "gender": "String",
  "appointment_date": "String",
  "department": "String",
  "doctor": {
    "firstName": "String",
    "lastName": "String"
  },
  "hasVisited": "Boolean",
  "address": "String",
  "doctorId": "mongoose.Schema.ObjectId",
  "patientId": "mongoose.Schema.ObjectId",
  "status": "String"
}

```




# HOSPITAL MANAGEMENT APP (BACKEND) - Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
4. [Render URL]
5. [Installation](#installation)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Database Schema](#database-schema)

## Technologies Used
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## Installation

Step-by-step instructions on how to get a development environment running.

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the necessary environment variables.
   ```env
   PORT=5000
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   STRIPE_SECRET_KEY=your-stripe-secret-key
   PORT = 4000
   FRONTEND_URL_ONE = http://localhost:5173
   FRONTEND_URL_TWO =  http://localhost:5174
   JWT_EXPIRES=7d
   CLOUDINARY_CLOUD_NAME= hhhhhhh
   CLOUDINARY_API_KEY=	000000000000
   CLOUDINARY_API_SECRET= 45bkjchhclijsiljsjco
   COOKIE_EXPIRE=7
   ```

4. **Run the development server:**
   ```sh
   npm start
   ```

## Usage

Provide instructions and examples for using the project.

1. **Start the server:**
   ```sh
   npm start
   ```

2. **API Base URL:**
   ```sh
   http://localhost:5000/api
   ```

## API Endpoints

### User Authentication Endpoints-  Login and Register(SignUp)

- **POST https://backendurl/api/v1/user/patient/register** - Register
- **POST https://backendurl/api/v1/user/login** -Login by Patient
- **POST https://backendurl/api/v1/user/admin/addnew** - Add new Admin
- **POST https://backendurl/api/v1/user/doctor/addnew** -  Add new Doctors
- **GET https://backendurl/api/v1/user/doctors** -List all Doctors
- **GET https://backendurl/api/v1/user/patient/me** - Login by Patient
- **GET https://backendurl/api/v1/user/admin/me** -Login by Admin
- **GET https://backendurl/api/v1/user/patient/logout** -Patient logout
- **GET https://backendurl/api/v1/user/admin/logout** -Admin Logout
  
### Message Endpoints

- **POST https://backendurl/api/v1/message/send** - Send Message
- **GET https://backendurl/api/v1/message/getall** -getall Messages
- 
### Appontment  Endpoints

- **POST https://backendurl/api/v1/appointment/post** - Place Appointment
- **GET https://backendurl/api/v1/appointment/getall** - getting all Appoitment
- **PUT https://backendurlm/api/v1/appointment/update/:id** - Update Patient Appointment
- **DELETE https://backendurl/api/v1/appointment/delete/:id** - Delete Patient appointment

## Database Schema

### User Model
```json

{
  "firstName": "String",
  "lastName": "String",
  "email": "String",
  "phone": "String",
  "nic": "String",
  "dob": "Date",
  "gender": "String",
  "password": "String",
  "role": "String",
  "doctorDepartment": "String",
  "docAvatar": {
    "public_id": "String",
    "url": "String"
  }
}


```
### Message Model
```json
{
  "firstName": "String",
  "lastName": "String",
  "email": "String",
  "phone": "String",
  "message": "String"
}

```

### Appointment Model
```json
{
  "firstName": "String",
  "lastName": "String",
  "email": "String",
  "phone": "String",
  "nic": "String",
  "dob": "Date",
  "gender": "String",
  "appointment_date": "String",
  "department": "String",
  "doctor": {
    "firstName": "String",
    "lastName": "String"
  },
  "hasVisited": "Boolean",
  "address": "String",
  "doctorId": "mongoose.Schema.ObjectId",
  "patientId": "mongoose.Schema.ObjectId",
  "status": "String"
}

```





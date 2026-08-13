# ⚙️ Oblivio API

> REST API responsible for the backend of the Oblivio ecosystem.

The **Oblivio API** is the backend service that connects the mobile application, web application and database.

It is responsible for managing caregivers, patients, medications, allergies, relationships between caregivers and patients, authentication and QR Code scan information.

The API was developed as part of the **Oblivio TCC**, with the backend and database being primarily developed independently by me within a five-person academic team.

---

## 🧠 About

The API was designed to centralize the business logic and data management of the Oblivio system.

Through the API, the applications can:

* 👤 Register and manage caregivers
* 🧑‍🦽 Register and manage patients
* 💊 Manage medications
* ⚠️ Manage allergies
* 👥 Establish relationships between caregivers and patients
* 🔐 Authenticate caregivers
* 📱 Register QR Code scan information
* 🔎 Retrieve related patient and caregiver information

---

## 🏗️ Architecture

The API follows a layered structure separating HTTP handling from business logic and database access.

```text
Client
  │
  ▼
Routes
  │
  ▼
Controllers
  │
  ▼
Use Cases
  │
  ▼
Prisma
  │
  ▼
PostgreSQL
```

### Main layers

**Routes**

Define the available HTTP endpoints and connect requests to their respective controllers.

**Controllers**

Handle HTTP requests and responses.

**Use Cases**

Contain the application's business logic.

**Prisma**

Provides database access and manages the application's relationship with PostgreSQL.

**PostgreSQL**

Stores the application's persistent data.

---

## 🛠️ Technologies

| Technology | Purpose                   |
| ---------- | ------------------------- |
| TypeScript | Main programming language |
| Node.js    | Runtime environment       |
| Express    | HTTP server and routing   |
| Prisma     | ORM and database access   |
| PostgreSQL | Relational database       |
| JWT        | Caregiver authentication  |
| Vercel     | API deployment            |

---

## 🗄️ Database

The database was modeled using a relational structure with PostgreSQL and Prisma.

### Main entities

```text
Cuidador
    │
    ├── Paciente
    │      ├── Alergias
    │      ├── Remedios
    │      └── PulseiraScan
    │
    ├── CaregiverPac
    │
    └── PulseiraScan
```

### Main models

* `Cuidador`
* `Paciente`
* `CaregiverPac`
* `Alergias`
* `Remedio`
* `PulseiraScan`

The system also uses enums for patient blood types and caregiver access levels.

---

## 👥 Caregiver & Patient Relationships

A patient is automatically associated with the caregiver who initially registers them.

The system also supports additional caregiver relationships through the `CaregiverPac` model.

This allows a patient to be associated with multiple caregivers while maintaining different levels of responsibility and access.

This structure was designed to support scenarios such as:

* Parents caring for children
* Multiple family members
* Temporary caregivers
* Babysitters
* Travel situations

---

# 🔐 Authentication

Caregivers can authenticate through the API using their email and password.

```http
POST /cuidador/login
```

The authentication flow verifies the caregiver's credentials and generates a **JWT token**.

```text
Email + Password
       │
       ▼
Find caregiver
       │
       ▼
Validate credentials
       │
       ▼
Generate JWT
       │
       ▼
Return caregiver + token
```

The generated token expires after one hour.

---

# 🔌 API Routes

> The API is currently deployed and can be accessed through Vercel.

**Base URL:**

`https://oblivio-api.vercel.app`

---

## 👤 Caregiver

### List caregivers

```http
GET /cuidador/list
```

Returns the registered caregivers.

### Create caregiver

```http
POST /cuidador/cad
```

Registers a new caregiver.

### Login

```http
POST /cuidador/login
```

Authenticates a caregiver and returns a JWT token.

### Update caregiver

```http
PUT /cuidador/update/:id
```

Updates caregiver information.

### Delete caregiver

```http
DELETE /cuidador/delete/:id
```

Removes a caregiver.

---

## 🧑‍🦽 Patient

### List patients

```http
GET /paciente/list
```

Returns registered patients.

### Create patient

```http
POST /paciente/cad
```

Registers a new patient.

### Update patient

```http
PUT /paciente/update/:id
```

Updates patient information.

### Delete patient

```http
DELETE /paciente/delete/:id
```

Removes a patient.

---

## 🔗 Caregiver ↔ Patient

### List caregivers associated with a patient

```http
GET /caregiverpacs/...
```

Returns caregiver relationships associated with patients.

### List patients associated with a caregiver

```http
GET /caregiverpacs/...
```

Returns patients associated with a caregiver.

---

## ⚠️ Allergies

### List allergies

```http
GET /alergia/list
```

Returns registered allergies.

### Create allergy

```http
POST /alergia/cad
```

Registers an allergy associated with a patient.

### List allergies by patient

```http
GET /alergia/...
```

Returns allergies associated with a specific patient.

---

## 💊 Medications

### List medications

```http
GET /remedio/list
```

Returns registered medications.

### Create medication

```http
POST /remedio/cad
```

Registers medication information associated with a patient.

### List medications by patient

```http
GET /remedio/...
```

Returns medications associated with a specific patient.

---

## 📍 QR Code Scans

The `PulseiraScan` entity stores information related to QR Code scans performed through the patient's Oblivio wristband.

Each scan can be associated with:

* Patient
* Caregiver
* Location

This information is used as part of the system's emergency assistance flow.

---

# 📦 Project Structure

The backend is organized around routes, controllers and use cases.

```text
src/
│
├── modules/
│   ├── cuidador/
│   ├── paciente/
│   ├── alergia/
│   ├── remedio/
│   └── ...
│
├── errors/
│
└── ...
```

Each feature is organized into its own module, separating the responsibilities of controllers and use cases.

---

# 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/DanielBConcordia/oblivio-api.git
```

Install dependencies:

```bash
npm install
```

Create an `.env` file with the required database configuration:

```env
DATABASE_URL="your_database_url"
DIRECT_URL="your_direct_database_url"
```

Run the development server:

```bash
npm run dev
```

---

# ☁️ Deployment

The API is deployed using **Vercel**.

🌐 **Production:**

https://oblivio-api.vercel.app

---

# 👨‍💻 My Contribution

Oblivio was developed by a five-person academic team.

I was primarily responsible for the **backend and database**, including:

* API architecture
* REST endpoints
* Controllers
* Use cases
* Prisma integration
* PostgreSQL database modeling
* Entity relationships
* CRUD operations
* Authentication
* JWT implementation
* Relational queries
* API deployment

The backend was developed independently by me within the team project.

---

# 🎓 Academic Context

The Oblivio API was developed as part of the **TCC — Trabalho de Conclusão de Curso** for the Analysis and Systems Development program.

The project was created to solve a real-world problem involving the safety and assistance of people who may become lost or require specialized care.

---

## 🌱 Future Improvements

Possible improvements to the API include:

* 🔐 Password hashing
* 🔑 Environment-based JWT secrets
* 🛡️ Improved authentication and authorization
* ✅ Stronger request validation
* 🚨 Centralized error handling
* 📚 Complete API documentation
* 🧪 Automated tests
* 📊 Improved logging and monitoring

---

> **Oblivio API — the bridge between the people who care and the people who need help.**

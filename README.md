# Real Estate Platform Backend

A production-ready backend for a real estate platform built with NestJS, Prisma, and PostgreSQL.

## Features

- **Developers Management**: CRUD operations for real estate developers
- **Projects Management**: CRUD operations for real estate projects with developer relationships
- **Apartments Management**: CRUD operations for apartments with project relationships
- **Leads Management**: CRUD operations for customer leads with apartment relationships
- **Data Validation**: Comprehensive DTO validation using class-validator
- **Database Relations**: Proper foreign key relationships and cascading
- **CORS Support**: Cross-origin resource sharing enabled
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: NestJS v11
- **ORM**: Prisma v5
- **Database**: PostgreSQL
- **Validation**: class-validator & class-transformer
- **Language**: TypeScript

## Database Schema

The application uses 4 main models:

1. **Developer**
   - id: Int (Primary Key)
   - name: String
   - createdAt: DateTime

2. **Project**
   - id: Int (Primary Key)
   - name: String
   - location: String
   - deliveryDate: String
   - developerId: Int (Foreign Key)

3. **Apartment**
   - id: Int (Primary Key)
   - projectId: Int (Foreign Key)
   - price: Float
   - rooms: Int
   - area: Float
   - floor: Int

4. **Lead**
   - id: Int (Primary Key)
   - name: String
   - phone: String (Uzbekistan phone validation)
   - apartmentId: Int (Foreign Key)
   - createdAt: DateTime

## API Documentation

The API documentation is available via Swagger UI at:
**http://localhost:3002/api**

The Swagger documentation provides:

- Interactive API testing interface
- Complete endpoint documentation
- Request/response examples
- Schema definitions for all DTOs
- Authentication information (if applicable)

### Accessing Swagger UI

1. Start the server: `npm run start:dev`
2. Open your browser and navigate to: `http://localhost:3002/api`
3. Explore the API endpoints organized by tags:
   - **developers**: Developer management
   - **projects**: Project management
   - **apartments**: Apartment management
   - **leads**: Lead management

## API Endpoints

### Developers

- `GET /developers` - Get all developers
- `POST /developers` - Create a new developer

### Projects

- `GET /projects` - Get all projects with developer and apartments
- `GET /projects/:id` - Get a specific project by ID
- `POST /projects` - Create a new project

### Apartments

- `GET /apartments` - Get all apartments with project and leads
- `POST /apartments` - Create a new apartment

### Leads

- `GET /leads` - Get all leads with apartment details
- `POST /leads` - Create a new lead

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### 1. Clone and Install Dependencies

```bash
cd backend
npm install
```

### 2. Database Setup

Make sure PostgreSQL is running and create a database for the project.

### 3. Environment Configuration

Create a `.env` file in the backend directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/real_estate_db"
PORT=3002
```

### 4. Database Migration

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init
```

### 5. Start the Application

```bash
# Development mode with hot reload
npm run start:dev

# Production build and run
npm run build
npm run start:prod

# Or build and start in one command
npm run build && npm run start
```

The server will start on `http://localhost:3002`

## Testing the API

You can test the API using tools like Postman, curl, or the provided PowerShell commands:

### Create a Developer

```powershell
Invoke-WebRequest -Uri http://localhost:3002/developers -Method POST -ContentType 'application/json' -Body '{"name":"Test Developer"}'
```

### Create a Project

```powershell
Invoke-WebRequest -Uri http://localhost:3002/projects -Method POST -ContentType 'application/json' -Body '{"name":"Test Project","location":"Test City","deliveryDate":"2025-12-31","developerId":1}'
```

### Create an Apartment

```powershell
Invoke-WebRequest -Uri http://localhost:3002/apartments -Method POST -ContentType 'application/json' -Body '{"projectId":1,"price":100000,"rooms":3,"area":75.5,"floor":5}'
```

### Create a Lead

```powershell
Invoke-WebRequest -Uri http://localhost:3002/leads -Method POST -ContentType 'application/json' -Body '{"name":"Test Lead","phone":"998901234567","apartmentId":1}'
```

## Project Structure

```
backend/
├── src/
│   ├── app.module.ts          # Root application module
│   ├── main.ts                # Application entry point
│   ├── prisma.service.ts      # Prisma database service
│   ├── developers/            # Developers module
│   │   ├── developers.controller.ts
│   │   ├── developers.service.ts
│   │   ├── developers.module.ts
│   │   └── dto/
│   │       ├── create-developer.dto.ts
│   ├── projects/              # Projects module
│   │   ├── projects.controller.ts
│   │   ├── projects.service.ts
│   │   ├── projects.module.ts
│   │   └── dto/
│   │       ├── create-project.dto.ts
│   ├── apartments/            # Apartments module
│   │   ├── apartments.controller.ts
│   │   ├── apartments.service.ts
│   │   ├── apartments.module.ts
│   │   └── dto/
│   │       ├── create-apartment.dto.ts
│   ├── leads/                 # Leads module
│   │   ├── leads.controller.ts
│   │   ├── leads.service.ts
│   │   ├── leads.module.ts
│   │   └── dto/
│   │       ├── create-lead.dto.ts
│   └── prisma/                # Database schema
│       └── schema.prisma
├── package.json
├── tsconfig.json
└── README.md
```

## Validation Rules

- **Developer**: Name is required and must be a string
- **Project**: Name, location, deliveryDate, and developerId are required
- **Apartment**: projectId, price, rooms, area, and floor are required
- **Lead**: Name, phone (Uzbekistan format validation), and apartmentId are required

## Development Notes

- The application uses webpack for compilation due to decorator support requirements
- All endpoints include proper error handling and validation
- Database relationships are eagerly loaded in responses
- CORS is enabled for frontend integration
- The application runs on port 3002 by default

5. Start the development server:

```bash
npm run start:dev
```

The API will be available at `http://localhost:3001`

## API Endpoints

### Developers

- `POST /developers` - Create a developer
- `GET /developers` - List all developers

### Projects

- `POST /projects` - Create a project
- `GET /projects` - List all projects
- `GET /projects/:id` - Get project by ID

### Apartments

- `POST /apartments` - Create an apartment
- `GET /apartments?projectId=1` - List apartments (optional project filter)

### Leads

- `POST /leads` - Create a lead

## Project Structure

```
src/
├── app.module.ts
├── main.ts
├── prisma.service.ts
├── developers/
│   ├── developers.controller.ts
│   ├── developers.module.ts
│   ├── developers.service.ts
│   └── dto/
│       └── create-developer.dto.ts
├── projects/
│   ├── projects.controller.ts
│   ├── projects.module.ts
│   ├── projects.service.ts
│   └── dto/
│       └── create-project.dto.ts
├── apartments/
│   ├── apartments.controller.ts
│   ├── apartments.module.ts
│   ├── apartments.service.ts
│   └── dto/
│       └── create-apartment.dto.ts
└── leads/
    ├── leads.controller.ts
    ├── leads.module.ts
    ├── leads.service.ts
    └── dto/
        └── create-lead.dto.ts
```

## Database Schema

- **Developer**: id, name, createdAt
- **Project**: id, name, location, deliveryDate, developerId
- **Apartment**: id, projectId, price, rooms, area, floor
- **Lead**: id, name, phone, apartmentId, createdAt

## Validation

All endpoints use class-validator for input validation:

- Required fields validation
- Type checking
- Phone number format validation for leads

## Development

- `npm run start:dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Production Deployment

1. Build the application:

```bash
npm run build
```

2. Start the production server:

```bash
npm run start:prod
```

Make sure to set the `DATABASE_URL` environment variable in your production environment.

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

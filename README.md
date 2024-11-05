# Todo Application Backend

A RESTful API backend for a Todo application built with Node.js, Express, and MongoDB.

## Features

- User authentication (register, login, logout)
- JWT-based authorization
- CRUD operations for todo tasks
- Secure cookie handling
- Error handling middleware
- MongoDB integration
- CORS support

## Prerequisites

- Node.js >= 18.x
- MongoDB
- npm or yarn

## Environment Variables

Create a `config/config.env` file with the following variables:

```env
PORT=3000
MONGO_URI=
JWT_SECRET=

NODE_ENV=Development

FRONTEND_URL=
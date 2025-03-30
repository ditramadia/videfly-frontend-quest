# Project Overview

**Project Name:** Videfly Frontend Quest <br/>
**Description:** Videfly responsive landing page <br/>
**Deployment Platform:** Vercel <br/>

## Tech Stack

- **Environment:** Node.js v22
- **Framework:** Next.js v15 (App Router)
- **Styling:** Tailwind CSS v4
- **Bundler:** Turbopack (custom configuration with SVGR)

## Project Structure

```
/src
  /app          # Next.js app directory
  /components   # Reusable UI components
  /data         # Static data
  /styles       # Tailwind CSS styles
  /types        # TypeScript types
```

## Installation and Setup

1. Clone the repository

   ```
   git clone https://github.com/ditramadia/videfly-frontend-quest.git
   cd videfly-frontend-quest
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Start developement server
   ```
   npm run dev
   ```

## Development Approaches

### 1. Framework

Next.js was chosen for this project due to its powerful features, including:

- Server-Side Rendering (SSR) & Static Site Generation (SSG): Improve performance and SEO
- Built-in Routing: Simplifies navigation without additional libraries
- Optimized Performance: Uses image optimization

### 2. Theme Styling

- Tailwind CSS v4 was used for styling, allowing for a utility-first approach that enhances maintainability
- Custom Tailwind configuration was set up for project-specific styles and consistent theming

### 3. Responsiveness

- Mobile-first design approach ensures a seamless user experience on all devices
- Flexbox & Grid Layouts: Used to create adaptive and efficient layouts
- Media Queries: Utilized Tailwind's responsive utilities to handle various screen sizes

### 4. Animation

- Framer Motion provides smooth and declarative animations with easy-to-use motion components
- Lottie enables lightweight vector animations using JSON files, reducing dependency on complex JavaScript animation
- Drawback of Animations:

  - Increased Load Time due to additional client processes
  - Search engine may not fully process JavaScript-based animations, potentially impacting SEO rankings

### 5. Form Validation Using Zod

- Zod provides a simple, declarative schema validation for TypeScript
- Forms in the application are validated using Zod to ensure data integrity and improve user experience

### 6. Optimized Images

- Next Image provides automatic optimization, lazy loading, and responsive image support
- WebP is used as the primary image format for better compression and faster load times

### 7. Code Quality with Prettier and ESLint

- Prettier is used for code formatting, ensuring consistent style across the project
- ESLint enforces coding standards, detects errors, and maintains best practices

## Future Enhancements

- Implement state management using Redux
- Optimize Turbopack bundling for performance improvements
- Add unit and end-to-end testing using Jest or Cypress
- Integrate with API for dynamic data
- Lazy loading animations, reducing animation complexity, and optimizing JSON files

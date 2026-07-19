# Antigravity IDE Implementation Prompt

## Project

Build a **React + Vite** web application. **Do NOT integrate Firebase
yet.** Implement **UI only** based on the attached reference
screenshots.

## Tech Stack

-   React 18+
-   Vite
-   React Router DOM
-   Tailwind CSS
-   Lucide React icons

## Pages

### 1. Student Registration (`/`)

Recreate the registration page exactly: - Top navigation - Left
information panel - Registration form - Footer - Responsive layout

The form should contain: - Full Name - Phone Number - Primary Program
(Dropdown placeholder) - MDC Paper (Dropdown placeholder) - Minor 1
(Dropdown placeholder) - Minor 2 (Dropdown placeholder) - Cancel
button - Submit Registration button

Use static placeholder data.

------------------------------------------------------------------------

### 2. Admin Login

Route: `/admin-page`

When user visits `/admin-page`, always show the login UI first.

Fields: - Admin ID - Password - Remember Me - Forgot Password (UI only)

After clicking **Secure Login**, perform a fake login:

``` js
navigate("/admin-page/dashboard")
```

No authentication yet.

------------------------------------------------------------------------

### 3. Admin Dashboard

Route: `/admin-page/dashboard`

UI only.

Include: - Left sidebar - Top navbar - Reports title - Export card -
Compliance card - System Status card - Export button

Dropdown contains dummy course list.

------------------------------------------------------------------------

# Folder Structure

``` text
src/
 components/
   Navbar.jsx
   Footer.jsx
   Sidebar.jsx
   Card.jsx
   FormInput.jsx
   SelectInput.jsx
 pages/
   StudentRegistration.jsx
   AdminLogin.jsx
   AdminDashboard.jsx
 layouts/
   AdminLayout.jsx
 router/
   AppRouter.jsx
 assets/
 App.jsx
 main.jsx
```

# Routing

``` jsx
/
 -> StudentRegistration

/admin-page
 -> AdminLogin

/admin-page/dashboard
 -> AdminDashboard
```

# UI Requirements

-   Pixel close to screenshots
-   White cards
-   Light gray background
-   Blue primary color
-   Rounded corners
-   Soft shadows
-   Desktop first
-   Mobile responsive

# Components

Create reusable components for: - Button - Input - Select - Section
Card - Sidebar Item - Navbar - Footer

# Dummy Data

``` js
programs=[
"B.Tech Computer Science",
"B.Tech IT",
"B.Com",
"BBA"
]

mdcPapers=[
"Paper 1",
"Paper 2",
"Paper 3"
]

minor1=[
"AI",
"Cyber Security",
"Data Science"
]

minor2=[
"Finance",
"Psychology",
"Economics"
]
```

# State

Use React state only.

No Firebase.

No API.

No Context.

# Next Phase

Keep code ready for future integration: - Firebase Authentication -
Firestore - Dynamic dropdowns - CRUD - Validation

Do not implement any backend logic now.

Focus entirely on matching the supplied UI.

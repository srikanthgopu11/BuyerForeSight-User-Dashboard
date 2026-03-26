# User Directory Dashboard

A modern, responsive React-based User Directory application that allows users to browse, search, and sort through a list of team members.


**Live Link:** [User Directory Dashboard](https://srikanth-gopu-user-dashboard.netlify.app/) 🚀

---

## 🚀 Live Features

- **User Grid:** Displays users in a clean, card-based layout featuring names, emails, phones, and company information.
- **Real-time Search:** Filter users instantly by Name or Email address.
- **Smart Sorting:** Sort the directory by Name or Company name (Ascending/Descending).
- **Detailed Profiles:** Dynamic routing to a dedicated User Detail page showing full profile information (Address, Website, Company, etc.).
- **Responsive Design:** Optimized for all screen sizes using pure CSS.

## 🛠️ Tech Stack

- **React.js** (Functional Components & Hooks)
- **React Router Dom** (Navigation & Routing)
- **Lucide React** (Modern iconography)
- **CSS3** (Custom modular styling)
- **JSONPlaceholder API** (External data source)

## 📁 Project Structure

```text
src/
├── components/
│   ├── SearchSortBar.js      # Search input and sort toggle buttons
│   ├── SearchSortBar.css     # Styling for controls
│   ├── UserCard.js           # Individual user summary card
│   └── UserCard.css          # Styling for the grid cards
├── pages/
│   ├── Dashboard.js          # Main landing page with data logic
│   ├── Dashboard.css         # Grid layout styling
│   ├── UserDetail.js         # Detailed user profile page
│   └── UserDetail.css        # Profile sheet styling
├── App.js                    # Route configuration
├── App.css                   # Global app-wide styles
└── index.js                  # Application entry point

⚙️ Installation & Setup

Follow these steps to run the project locally on your machine:

Navigate to the project folder:

cd user-directory

Install dependencies:

npm install

Start the development server:

npm start

📡 API Reference
The application consumes data from the JSONPlaceholder API:
All users: https://jsonplaceholder.typicode.com/users
Single user: https://jsonplaceholder.typicode.com/users/{id}

💡 Technical Implementation Details

Search Logic: Implemented using a client-side .filter() method on the user state, ensuring instant results without extra API calls.

Sorting Logic: Uses the .sort() method with localeCompare to handle alphabetical sorting for both top-level strings (Name) and nested objects (Company Name).

State Management: Utilizes React's useState for handling data, loading states, and search/sort configurations, and useEffect for data fetching.

Routing: Implemented dynamic path parameters (/user/:id) to fetch and display specific user data on the Detail Page.

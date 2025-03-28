# Milestone 1: Project Setup & Planning
## Objectives:
	* Set up the development environment
	* Finalize feature list and roles
	* Define database schema and project folder structure
## Action Points:
    •  Create shared GitHub repository
    •  Set up Express backend with basic routing
    •  Connect MongoDB using Mongoose
    •  Define UI wireframes using Figma/pen & paper
    •  Assign feature responsibilities to group members


# Milestone 2: User Authentication System
## Objectives:
    • Implement login/signup system
    • Secure routes using JWT tokens
## Action Points:
    •  Create user model in MongoDB (name, email, password)
    •  Add password hashing using bcryptjs
    •  Build backend routes for login
    •  Build frontend login/signup forms with error handling


# Milestone 3: Budget & Transaction Management
## Objectives:
    • Add income/expense records
    • View transactions with categories and date filtering
## Action Points:
    •  Design MongoDB model for transactions (type, amount, category, date, userId)
    •  Implement API routes:
        ◦ POST /transactions/add
        ◦ GET /transactions
        ◦ DELETE /transactions/:id
    •  Build React components to:
        ◦ Add a new transaction (form)
        ◦ List transactions in table format
        ◦ Delete transactions
    •  Allow filtering by category or date

# Milestone 4: Budget Analytics & Visualization
 ## Objectives:
    • Show budget summaries and charts
 ## Action Points:
    •  Calculate totals: income, expenses, balance
    •  Generate category-wise spending breakdown
    •  Use Chart.js or Recharts to visualize:
        ◦ Pie chart (spending by category)
        ◦ Bar/Line chart (expenses over time)
    •  Display charts in a responsive dashboard

# Milestone 5: UI Styling & User Experience
## Objectives:
    • Improve look and feel using modern UI frameworks
## Action Points:
    •  Choose a design library (e.g., Material-UI, Tailwind CSS)
    •  Style forms, buttons, tables, and charts
    •  Make layout responsive for mobile and tablet views (optional)

 
# Milestone 6: Testing & Deployment
## Objectives:
    • Ensure code is bug-free and deploy the app
## Action Points:
    •  Test edge cases (empty input, invalid values, etc.)
    •  Final integration testing (React ↔ Express ↔ MongoDB)
    •  Submit final report/documentation

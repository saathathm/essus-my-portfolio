export default function MySkills() {
  return (
    <section className="services" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <div className="services-container">
        <div className="services-box">
          <i className="fab fa-react"></i>
          <h3>Frontend (React.js)</h3>
          <p>
            <span>
              <br />● Redux - State Management
              <br />
              <br />● Axios - API Handling
              <br />
              <br />● Styling - TailwindCss, Bootstrap
              <br />
              <br />● useState, useEffect, useSelector, useContext
              <br />
              <br />● Components, Props, State
              <br />
              <br />● Handling navigation and dynamic routes
            </span>
          </p>
        </div>
        <div className="services-box">
          <i className="fab fa-node-js"></i>
          <h3>Backend (Node.js)</h3>
          <p>
            <span>
              <br />● JWT - Authentication & Authorization
              <br />
              <br />● MVC Structure
              <br />
              <br />● Multer for handling file uploads
              <br />
              <br />● CORS
              <br />
              <br />● bcrypt for password hashing
              <br />
              <br />● Routing
              <br />
              <br />● Middleware
              <br />
              <br />● Error Handling
            </span>
          </p>
        </div>
        <div className="services-box">
          <i className="fas fa-database"></i>
          <h3>Database (SQL & NoSQL)</h3>
          <p>
            <br />
            <span style={{ fontWeight: "700" }}>1. MongoDB (NoSQL):</span>
          </p>
          <p>
            <span style={{ marginLeft: "20px" }}>● Collections, Documents</span>
            <br />
            <br />
            <span style={{ marginLeft: "20px" }}>● Schema design</span>
            <br />
            <br />
            <span style={{ marginLeft: "20px" }}>● Model relationships</span>
          </p>
          <p>
            <br />
            <span style={{ fontWeight: "700" }}>2. MySQL (SQL):</span>
          </p>
          <p>
            <span style={{ marginLeft: "20px" }}>● Tables, Relations</span>
            <br />
            <br />
            <span style={{ marginLeft: "20px" }}>● Joins, Indexing</span>
            <br />
            <br />
            <span style={{ marginLeft: "20px" }}>● Query Optimization</span>
          </p>
        </div>
        <div className="services-box">
          <i className="fas fa-laptop-code"></i>
          <h3>Full Stack Concepts</h3>
          <p>
            <br />
            <span style={{ fontWeight: "700" }}>1. VERSION CONTROL: </span>
          </p>
          <p>
            <span style={{ marginLeft: "20px" }}>● Git, GitHub</span>
          </p>
          <p>
            <br />
            <span style={{ fontWeight: "700" }}>3. API & TESTING: </span>
          </p>
          <p>
            <span style={{ marginLeft: "20px" }}>● API Integration</span>
            <br />
            <br />
            <span style={{ marginLeft: "20px" }}>● Postman, Status codes</span>
          </p>
          <p>
            <br />
            <span style={{ fontWeight: "700" }}>4. DEPLOYMENT: </span>
          </p>
          <p>
            <span style={{ marginLeft: "20px" }}>● Cloudflare, Vercel</span>
          </p>
        </div>
      </div>
    </section>
  );
}

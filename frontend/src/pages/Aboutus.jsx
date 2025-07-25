// App.js
import React from "react";
// import  boostrap"bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Dashboard = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar */}
      <div
        className="bg-primary text-white p-3"
        style={{ width: "250px", background: "#40196d" }}
      >
        <h4 className="mb-4">School Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              <i className="bi bi-house-door"></i> Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              <i className="bi bi-info-circle"></i> About Us
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              <i className="bi bi-people"></i> Students
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              <i className="bi bi-gear"></i> Settings
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light" style={{ padding: "20px" }}>
        {/* Top Navbar */}
        <div
          className="bg-white rounded shadow-sm d-flex justify-content-between align-items-center p-3 mb-4"
        >
          <h5 className="mb-0">Welcome to Dashboard</h5>
          <i className="bi bi-person-circle fs-4 text-primary"></i>
        </div>

        {/* Cards */}
        <div className="row g-3">
          <div className="col-md-4">
            <div
              className="card border-0 shadow-sm"
              style={{ transition: "transform 0.3s ease", cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div className="card-body text-center">
                <i className="bi bi-person-fill fs-1 text-primary"></i>
                <h6 className="mt-2">Students</h6>
                <p className="text-muted">120 Registered</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card border-0 shadow-sm"
              style={{ transition: "transform 0.3s ease", cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div className="card-body text-center">
                <i className="bi bi-book-fill fs-1 text-success"></i>
                <h6 className="mt-2">Courses</h6>
                <p className="text-muted">35 Available</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card border-0 shadow-sm"
              style={{ transition: "transform 0.3s ease", cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div className="card-body text-center">
                <i className="bi bi-calendar-event fs-1 text-danger"></i>
                <h6 className="mt-2">Events</h6>
                <p className="text-muted">5 Upcoming</p>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <div className="mt-5">
          <img
            src="https://www.rca.ac.rw/img/rca/home2.jpg"
            alt="school-banner"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import clientData from "../data/clientdata.js";
import Heading from "./Heading.jsx";

function ClientCard() {
  return (
    <>
      <div className="mt-8 ">
        <Heading text="Our Rising Clients" variant="style2" />
      </div>

      <div style={styles.clientsSection}>
        {clientData.map((client, index) => {
          const isLastCard = index === clientData.length - 1; // Check if it's the last card
          return (
            <div
              key={client.id}
              style={{
                ...styles.clientCard,
                height: isLastCard ? "400px" : "auto",
              }}
            >
              <div className="px-4">
                <img
                  src={`/clients/${client.image}`}
                  alt={client.companyName}
                  style={styles.clientImage}
                />
              </div>
              {!isLastCard && (
                <>
                  <h3 style={styles.companyName}>{client.companyName}</h3>
                  <p style={styles.servicesTitle}>Services:</p>
                  <ul style={styles.servicesList}>
                    {client.services.map((service, idx) => (
                      <li key={idx} style={styles.serviceItem}>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.viewProject}
                  >
                    View Project
                  </a>
                </>
              )}
              {isLastCard && (
                <p style={{ fontSize: "18px" }}>
                  This spot is reserved for You and Your Brand; let's build your
                  success story together. 🚀
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ClientCard;

const styles = {
  clientsSection: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)", // Create 6 equal columns
    justifyItems: "center",
    textAlign:"center",
    marginTop:"45px",
    margin: "30px",
    gap: "20px", // Add spacing between cards
  },
  clientCard: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center content horizontally
    fontFamily: "'Outfit', sans-serif",
    border: "1px solid black",
    maxWidth: "210px", // Set a maximum width for the card to make it smaller
    width: "100%",
    transition: "all 0.3s ease", // Optional: Add smooth animation for height changes
  },
  clientImage: {
    width: "200px",
    height: "120px",
    objectFit: "contain",
    marginBottom: "20px",
    paddingBottom:"8px",
    borderBottom: "2px solid #D8A25E",
  },
  companyName: {
    fontWeight: "400",
    fontSize: "18px",
    margin: "10px 0",
    color: "#000",
    fontFamily: "'Outfit', sans-serif",
  },
  servicesTitle: {
    fontWeight: "700",
    fontSize: "16px",
    color: "#000",
    fontFamily: "'Outfit', sans-serif",
  },
  servicesList: {
    listStyle: "none",
    fontSize: "16px",
    padding: 0,
    margin: "0 0 10px",
    fontFamily: "'Outfit', sans-serif",
  },
  serviceItem: {
    fontSize: "14px",
    color: "#000",
    fontFamily: "'Outfit', sans-serif",
  },
  viewProject: {
    fontWeight: "700",
    fontSize: "16px",
    color: "#0C8CE9",
    textDecoration: "none",
    fontFamily: "'Outfit', sans-serif",
    marginTop: "auto",
  },
};

import React from "react";
import clientData from "../data/clientdata.js";

function ClientCard() {
  return (
    <div style={styles.scrollerWrapper}>
      <div style={styles.scrollerTrack}>
        {clientData.concat(clientData).map((client, index) => {
          const isLastCard = index === clientData.length * 2 - 1;

          return (
            <div
              key={index}
              style={{
                ...styles.clientCard,
                height: isLastCard ? "380px" : "auto",
              }}
            >
              <div style={styles.imageWrapper}>
                <img
                  src={`/clients/${client.image}`}
                  alt={client.companyName}
                  style={styles.clientImage}
                />
              </div>

              {!isLastCard ? (
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
              ) : (
                <p style={styles.lastCardText}>
                  This spot is reserved for You and Your Brand; let's build your
                  success story together. 🚀
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ClientCard;

const styles = {
  scrollerWrapper: {
    overflow: "hidden",
    width: "100%",
    padding: "20px 0",
  },
  scrollerTrack: {
    display: "flex",
    gap: "20px",
    animation: "scrollRight 40s linear infinite",
    width: "max-content",
  },
  clientCard: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "'Outfit', sans-serif",
    border: "1px solid black",
    width: "210px",
    flexShrink: 0,
    transition: "all 0.3s ease",
    textAlign: "center",
  },
  imageWrapper: {
    padding: "0 10px",
    width: "100%",
  },
  clientImage: {
    width: "100%",
    height: "120px",
    objectFit: "contain",
    marginBottom: "20px",
    paddingBottom: "8px",
    borderBottom: "2px solid #D8A25E",
  },
  companyName: {
    fontWeight: "400",
    fontSize: "18px",
    margin: "10px 0",
    color: "#000",
  },
  servicesTitle: {
    fontWeight: "700",
    fontSize: "16px",
    color: "#000",
  },
  servicesList: {
    listStyle: "none",
    fontSize: "16px",
    padding: 0,
    margin: "0 0 10px",
  },
  serviceItem: {
    fontSize: "14px",
    color: "#000",
  },
  viewProject: {
    fontWeight: "700",
    fontSize: "16px",
    color: "#0C8CE9",
    textDecoration: "none",
    marginTop: "auto",
  },
  lastCardText: {
    fontSize: "18px",
    lineHeight: "1.6",
    textAlign: "center",
  },
};
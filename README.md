# patient-monitoring-system
Developed a comprehensive system for continuous remote monitoring of chronic disease patients. The solution should integrate wearable devices, mobile apps, and cloud-based analytics to track vital signs and provide real-time alerts to healthcare providers.


# 🩺 Remote Patient Monitoring System (RPM)

A full-stack web application for **continuous remote monitoring of chronic disease patients**, designed as a hackathon-ready prototype that demonstrates real-world healthcare system architecture.

This project simulates wearable device data, processes patient vitals in real time, stores them in a cloud database, and provides a foundation for alerts and clinical decision support.

---

## 🚀 Problem Statement

Chronic disease patients require continuous monitoring to prevent medical emergencies. Traditional in-person checkups are insufficient for real-time health tracking.

This system addresses the problem by enabling:
- Remote collection of vital signs
- Cloud-based storage and analytics
- Real-time data access for healthcare providers

---

## 💡 Solution Overview

The **Remote Patient Monitoring System** is built with a modular full-stack architecture:

- **Frontend**: Web dashboard for patients and healthcare providers
- **Backend**: REST API for data ingestion and processing
- **Database**: Cloud-connected NoSQL database for vitals storage
- **Simulation**: Wearable device data is simulated for demo purposes

The architecture is scalable and production-aligned.

---

## 🧩 Key Features

- 📊 Simulated wearable device data (heart rate, SpO₂, temperature)
- ☁️ Cloud database integration (MongoDB)
- 🔁 Real-time data flow from frontend to backend
- 🚨 Threshold-based alert logic (extensible)
- 🧠 Clean separation of frontend and backend
- 🔐 CORS-enabled API architecture

---

## 🏗️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)
- Live Server (for local development)

### Backend
- Node.js
- Express.js

### Database
- MongoDB (MongoDB Atlas – cloud)

---

## 📁 Project Structure


---

## ⚙️ How It Works

1. User interacts with the frontend dashboard
2. Simulated wearable data is generated
3. Data is sent to the backend via REST API
4. Backend processes and stores vitals in MongoDB
5. Backend returns confirmation and alert status
6. Frontend displays response in real time

---

## ▶️ How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/remote-patient-monitoring.git
cd patient-monitoring-system



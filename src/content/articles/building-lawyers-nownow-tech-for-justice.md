---
title: "Building Lawyers NowNow: Technology for Human Rights & Prison Reform"
date: "2019-11-12"
description: "How we architected the Lawyers NowNow CSR app to connect marginalized citizens with pro-bono legal support across Nigeria."
tags: ["Mobile", "React Native", "Social Impact", "Human Rights"]
readTime: "7 min read"
---

Have you ever wondered how technology can step directly onto the front lines to defend human rights, combat police misconduct, and free innocent citizens trapped in legal limbo? In late 2018 into 2019, while serving as IT Manager at the Headfort Foundation for Justice, that was the exact mission we set out to accomplish 😄!

Across Nigeria, low-income individuals facing unlawful arrest or prolonged pre-trial detention often spent months or years in prison simply because they could not afford legal representation or contact a lawyer in time. Traditional legal intervention relied on manual phone calls, physical paper documentation, and fragmented referral networks.

To change this narrative, we designed and built **Lawyers NowNow** — a free mobile platform engineered to match citizens and victims' families in real time with accredited pro-bono defense lawyers across the country.

---

### Core Architectural Challenges & Objectives

Building civic tech for marginalized communities meant our platform had to work flawlessly under harsh operational constraints:

- **Low-Bandwidth Mobile Dispatch**: Designed to run reliably on 2G and low-tier 3G cellular networks with offline request caching.
- **Real-Time Geolocation Matching**: Automated spatial pairing of urgent legal aid requests with nearby available volunteer attorneys.
- **Encrypted Evidence Vault**: Secure cloud storage for incident documentation, photos, and legal filings.
- **Cross-Platform Accessibility**: Built using React Native so users across both Android and iOS devices could request help instantly.

And guess what? **IT WAS BUILT TO BE 100% FREE FOR CITIZENS** 😄! Let's walk through how we architected the dispatch engine step by step.

---

### NOW, LET'S GET INTO IT!

#### Step 1: Design an Offline-First Mobile Experience
In high-stress emergency situations, mobile network connections can drop. We implemented an offline-first state machine using Redux Persist and SQLite. When a user taps "Request Emergency Lawyer", the payload is timestamped and saved locally before attempting network dispatch.

EASY YEAH 😄!

#### Step 2: Implement Real-Time Geolocation Matching
To dispatch a volunteer attorney to a police station or magistrate court, the server calculates spatial proximity using the Haversine formula across active lawyer geolocation coordinates:

```javascript
// Dispatcher Geo-Matching Logic
async function findNearbyLawyers(userCoordinates, radiusKm = 15) {
  const activeLawyers = await db.collection('lawyers')
    .where('isAvailable', '==', true)
    .get();

  return activeLawyers.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(lawyer => {
      const distance = calculateHaversineDistance(
        userCoordinates.latitude,
        userCoordinates.longitude,
        lawyer.location.latitude,
        lawyer.location.longitude
      );
      return distance <= radiusKm;
    })
    .sort((a, b) => a.distance - b.distance);
}
```

#### Step 3: Secure Evidence Upload & Encryption
Incident details, voice recordings, and arrest documentation are encrypted client-side using AES-256 before being transmitted to our secure AWS S3 storage buckets with strict IAM access policies.

#### Step 4: Pro-Bono Lawyer Notification & Case Tracking
Once matched, nearby registered attorneys receive high-priority push notifications with incident details, court locations, and direct contact options. Attorneys can accept cases, update legal intervention statuses, and log release records directly from their mobile dashboards.

Viola! A seamless legal aid dispatch workflow operating right from a smartphone!

---

### Measured Social Impact & Recognition

- **Thousands Released**: Provided thousands of indigent citizens with free legal representation, securing the release of hundreds of unlawfully detained inmates.
- **Civic Tech Awards**: Recognized with multiple national human rights and social innovation awards across Nigeria.
- **Scalable Model**: Created a blueprint for how technology can bridge the justice gap in developing nations.

Technology is at its finest when it protects human dignity. If you're building civic technology or social impact apps, always prioritize low-bandwidth resilience and user safety from day one!

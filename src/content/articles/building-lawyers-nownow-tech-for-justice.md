---
title: "Building Lawyers NowNow: Technology for Human Rights & Prison Reform"
date: "2019-11-12"
description: "How we architected the Lawyers NowNow CSR app to connect marginalized citizens with pro-bono legal support across Nigeria."
tags: ["Mobile", "React Native", "Social Impact", "Human Rights"]
readTime: "5 min read"
---

In late 2018 into 2019, while serving as IT Manager at the Headfort Foundation for Justice, our core mission was addressing police brutality, unlawful detainments, and prison reform across Nigeria. 

Access to legal assistance for low-income citizens was severely constrained by manual processes and lack of emergency reporting tools. To solve this, we designed and built **Lawyers NowNow** — a free mobile platform for instant legal aid dispatch.

### Core Architectural Objectives

1. **Low-Bandwidth Mobile Dispatch**: Designed to operate reliably across 2G/3G cellular networks with offline request caching.
2. **Real-Time Geolocation Matching**: Automated pairing of users with nearby accredited pro-bono defense lawyers.
3. **Encrypted Evidence Vault**: Secure serverless storage for incident reporting and documentation.

```js
// Dispatcher Geo-Matching Logic
async function findNearbyLawyers(userCoordinates, radiusKm = 15) {
  const activeLawyers = await db.collection('lawyers')
    .where('isAvailable', '==', true)
    .get();

  return activeLawyers.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(lawyer => calculateDistance(userCoordinates, lawyer.location) <= radiusKm);
}
```

The app won multiple national human rights and civic technology awards, providing thousands of citizens with free legal intervention.

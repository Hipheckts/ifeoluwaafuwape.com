---
title: "Modernizing Legacy On-Premises Estates to Scalable AWS & Azure Hybrid Cloud Architecture"
date: "2024-11-05"
description: "How we led the architectural overhaul of high-traffic legacy web estates at Newcastle University to hybrid cloud environments."
tags: ["AWS", "Azure", "Cloud Architecture", "DevOps", "Docker/K8s"]
readTime: "8 min read"
---

Have you ever inherited a massive legacy web estate managed by third-party external contractors, hosted on-premises, and plagued by high operational costs, manual FTP deployments, and server crashes during peak traffic events? As Web Development Manager at Newcastle University, that was my exact strategic mandate 😄!

University digital platforms handle millions of international visits annually across admissions, Clearing, research portals, and student events. Relying on legacy on-premises infrastructure meant latency bottlenecks for international students, high hardware overhead, and deployment vulnerability risks.

To solve this, we architected and executed a comprehensive hybrid cloud migration strategy moving legacy monoliths into modern containerized workloads across **AWS** and **Microsoft Azure**.

---

### Core Objectives of the Hybrid Cloud Overhaul:

- **Eliminate Single Points of Failure**: Migrate on-premises server infrastructure into multi-region cloud environments with automated failover.
- **Containerization & Micro-frontends**: Package legacy application monoliths into Docker containers managed via Kubernetes (EKS & AKS).
- **Automated CI/CD DevOps Pipelines**: Replace manual FTP/SSH uploads with standardized GitHub Actions workflows featuring automated testing quality gates and Infrastructure as Code (IaC).
- **Cost & Performance Optimization**: Eliminate contractor maintenance overhead while improving global response times.

And guess what? **IT TRANSFORMED OUR DEPLOYMENT RELIABILITY ENTIRELY** 😄! Let's examine the architectural roadmap step by step.

---

### NOW, LET'S GET INTO IT!

#### Step 1: Containerize Legacy Monoliths with Docker
Instead of attempting risky full application rewrites upfront, we containerized existing application services using multi-stage Dockerfiles. This standardized execution runtime dependencies regardless of host operating systems:

```dockerfile
# Multi-stage Production Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

EASY YEAH 😄!

#### Step 2: Establish Infrastructure as Code (IaC) & Kubernetes Clusters
We provisioned managed Kubernetes clusters on AWS (EKS) and Azure (AKS) using Terraform modules. This ensured our cloud environments were completely reproducible and version-controlled.

#### Step 3: Implement Automated GitHub Actions DevOps Pipelines
Every pull request merged into `main` automatically triggers automated quality gates (linting, unit tests, vulnerability scanning) before building Docker images and deploying to staging and production clusters:

```yaml
# Production Hybrid Cloud Deployment Pipeline
name: Production Hybrid Cloud Deployment
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v3

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2

      - name: Log in to AWS ECR Container Registry
        uses: aws-actions/amazon-ecr-login@v1

      - name: Build and Push Docker Image
        run: |
          docker build -t ecr-registry/app-service:${{ github.sha }} .
          docker push ecr-registry/app-service:${{ github.sha }}

      - name: Deploy to Cloud Kubernetes Cluster
        run: |
          kubectl set image deployment/app-deployment app-container=ecr-registry/app-service:${{ github.sha }}
```

#### Step 4: Multi-Region Traffic Routing & Observability
We configured AWS Route53 and Azure Front Door for global load balancing, DNS failover routing, and DDoS protection. Centralized logging (Datadog & CloudWatch) provided real-time observability across all microservices.

Viola! Legacy web estates transformed into cloud-native, high-availability infrastructure!

---

### Measured Business & Technical Outcomes

- **Global Response Times**: Reduced page load latency for international students across Asia, Europe, and America significantly.
- **Cost Reduction**: Drastically reduced ongoing operational expenses by bringing contractor-managed platforms under in-house cloud management.
- **Zero-Downtime Reliability**: Achieved 99.99% uptime during high-volume Clearing and admissions enrollment campaigns.

Modernizing legacy infrastructure doesn't have to be intimidating. By pairing containerization with automated CI/CD and IaC, you can transform complex legacy systems into resilient, modern cloud architectures!

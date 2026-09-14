---
title: "Journey to GCP Certified Professional Cloud Architect"
date: "2026-05-20"
description: "Insights, key patterns, and strategies from earning the Google Cloud Certified Professional Cloud Architect certification."
tags: ["GCP", "Cloud Architecture", "DevOps", "Infrastructure"]
readTime: "6 min read"
---

Earning the **Google Cloud Platform (GCP) Professional Cloud Architect** certification requires a deep understanding of enterprise cloud design patterns, high availability, security posture, and hybrid networking.

Here are the key takeaways and architectural principles I recommend when building resilient cloud infrastructure:

### 1. Designing for High Availability & Disaster Recovery
- **Multi-Region vs. Regional Deployment**: Understand trade-offs between compute costs, latency, and RTO/RPO objectives.
- **Global Load Balancing**: Utilizing GCP Cloud Load Balancing to route traffic seamlessly across regions with automated failover.

### 2. Infrastructure as Code (IaC) & Immutable Systems
Deploying infrastructure manually via the GCP console is prone to drift. Using **Terraform** paired with CI/CD automation ensures declarative configuration auditability:

```hcl
resource "google_compute_instance" "app_server" {
  name         = "web-instance-01"
  machine_type = "e2-medium"
  zone         = "europe-west2-a"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  network_interface {
    network = "default"
  }
}
```

### 3. Least Privilege Access Control
Enforce granular IAM roles rather than basic primitive roles (`Owner`/`Editor`). Use Service Account impersonation for automated deployment pipelines to eliminate long-lived service account keys.

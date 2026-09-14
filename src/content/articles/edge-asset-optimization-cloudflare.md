---
title: "Sub-100ms Media Latency: Edge Asset Optimization with Cloudflare Images API"
date: "2023-01-14"
description: "Drastically reducing media content delivery latency and bandwidth costs across high-concurrency mobile platforms using edge workers."
tags: ["Cloudflare", "Edge Computing", "Performance", "Web Architecture"]
readTime: "5 min read"
---

High-resolution user-generated images and media assets can degrade mobile responsiveness if served directly from origin object stores.

During my tenure at Varens Technologies scaling enterprise applications, media bandwidth accounted for over 45% of total egress costs. To solve this, we implemented dynamic image processing at the network edge using Cloudflare Images.

### Implementation Architecture

- **Edge Transcoding**: Automatically converting raw uploads to modern `AVIF` and `WebP` formats based on client `Accept` headers.
- **Dynamic Resize URLs**: On-the-fly resizing based on device pixel density (`dpr`) and viewport constraints.
- **Origin Shielding**: Caching transformed variants across 270+ global edge locations.

```typescript
// Edge Image Transformer Worker
export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const imageUrl = url.searchParams.get("image");
  
  const options = {
    cf: {
      image: {
        width: 800,
        format: "avif",
        fit: "scale-down"
      }
    }
  };

  return fetch(imageUrl, options);
}
```

### Measured Impact
- **Content Delivery Latency**: Reduced from ~450ms to **68ms**.
- **Bandwidth Egress Costs**: Dropped by **62%**.

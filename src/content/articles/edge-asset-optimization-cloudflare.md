---
title: "Sub-100ms Media Latency: Edge Asset Optimization with Cloudflare Images API"
date: "2023-01-14"
description: "Drastically reducing media content delivery latency and bandwidth costs across high-concurrency mobile platforms using edge workers."
tags: ["Cloudflare", "Edge Computing", "Performance", "Web Architecture"]
readTime: "6 min read"
---

Have you ever watched your mobile application's image load times drag while your cloud storage egress bill skyrockets out of control? Or maybe you've tried serving high-res media directly from Amazon S3 or Google Cloud Storage to global mobile users and hit massive latency bottlenecks? I know that pain all too well — but I am thrilled to let you know that your media delivery worries are over 😄!

In this technical write-up, I will be introducing you to an architectural pattern for optimizing media delivery using **Cloudflare Images API** and **Cloudflare Workers**.

During my tenure at Varens Technologies scaling enterprise web and mobile applications, high-resolution user-generated media accounted for over **45% of total cloud egress costs** and was the single largest contributor to mobile rendering delay. By shifting asset transformation and optimization to the network edge, we achieved sub-100ms response times worldwide.

---

### Key Advantages of Edge Media Optimization:

- **Automatic Format Conversion**: Transcodes raw JPEG/PNG images to modern `AVIF` and `WebP` formats on-the-fly based on client device support.
- **Dynamic Resizing at the Edge**: Generates optimal pixel dimensions according to device pixel ratio (`dpr`) and viewport constraints without origin CPU overhead.
- **Global Origin Shielding**: Caches transformed media variants across 270+ global edge locations.
- **Dramatically Reduced Egress Fees**: Prevents origin cloud storage buckets from being hit directly by millions of media requests.

And guess what? **IT IS INCREDIBLY FAST AND COST-EFFECTIVE** 😄! Let's walk through how to implement this architecture in 4 straightforward steps.

---

### NOW, LET'S GET INTO IT!

#### Step 1: Route Media Traffic Through Cloudflare Edge
Set up a custom sub-domain route (e.g., `media.yourdomain.com`) in your Cloudflare dashboard pointing to a Cloudflare Worker script.

EASY YEAH 😄!

#### Step 2: Implement the Edge Transformation Worker
Write a Cloudflare Worker in TypeScript that inspects incoming requests, parses requested dimensions and formats, and leverages Cloudflare Image Resizing:

```typescript
// Edge Image Transformer Worker
export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const imageUrl = url.searchParams.get("image");
  const targetWidth = parseInt(url.searchParams.get("w") || "800", 10);
  
  if (!imageUrl) {
    return new Response("Missing image parameter", { status: 400 });
  }

  // Cloudflare Edge Worker Image Transformation options
  const options = {
    cf: {
      image: {
        width: targetWidth,
        format: "auto", // Automatically chooses AVIF or WebP based on browser Accept header
        fit: "scale-down",
        quality: 85,
      }
    }
  };

  const imageResponse = await fetch(imageUrl, options);
  const response = new Response(imageResponse.body, imageResponse);
  
  // Enforce strong browser edge caching headers
  response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  return response;
}
```

#### Step 3: Implement Client-Side SrcSet Optimization
On the front-end (React / Next.js / HTML), construct dynamic image URLs specifying target viewport widths:

```html
<img 
  src="https://media.yourdomain.com/?image=https://s3.amazonaws.com/bucket/photo.jpg&w=800" 
  srcset="
    https://media.yourdomain.com/?image=https://s3.amazonaws.com/bucket/photo.jpg&w=400 400w,
    https://media.yourdomain.com/?image=https://s3.amazonaws.com/bucket/photo.jpg&w=800 800w,
    https://media.yourdomain.com/?image=https://s3.amazonaws.com/bucket/photo.jpg&w=1200 1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  alt="Optimized Edge Image" 
  loading="lazy"
/>
```

#### Step 4: Verify Cache Hit Ratio & Edge Latency
Monitor your Cloudflare Analytics dashboard to verify edge cache hit ratios. Because transformed assets are cached at edge PoPs near users, subsequent requests hit the edge cache in under 30ms!

Viola! Your media architecture is now blazingly fast and ultra-lean!

---

### Measured Business & Technical Impact

- **Global Content Delivery Latency**: Reduced from **~450ms** down to **68ms**.
- **Bandwidth Egress Costs**: Dropped by **62%** within the first 30 days of deployment.
- **Core Web Vitals**: Improved LCP (Largest Contentful Paint) score across mobile devices significantly.

Edge workers and Cloudflare Images are game-changers for media-heavy platforms. Give this pattern a try if you want sub-100ms asset delivery without breaking the bank!

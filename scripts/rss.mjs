import { writeFileSync } from 'fs';
import RSS from 'rss';
// import { allBlogs } from '.contentlayer/data';

async function generate() {
  const feed = new RSS({
    title: 'Ifeoluwa Afuwape',
    site_url: 'https://ifeoluwaafuwape.com',
    feed_url: 'https://ifeoluwaafuwape.com/feed.xml',
  });

  // allBlogs.map((blog) => {
  //   feed.item({
  //     title: blog.title,
  //     url: `https://ifeoluwaafuwape.com/blog/${blog.slug}`,
  //     date: blog.publishedAt,
  //     description: blog.description,
  //   });
  // });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();

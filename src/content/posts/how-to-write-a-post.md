---
title: "How to write a post (template)"
description: "A template showing the frontmatter and Markdown a post can use. It is a draft, so it never appears on the live site."
date: 2026-11-07
tags: ["template"]
draft: true
---

This file is a **template**. Because it says `draft: true`, it only shows in `npm run dev` and never on the live site. Copy it to start a new post, then delete or keep it as you like.

## Starting a post

1. Copy this file in `src/content/posts/` and rename it. The file name becomes the address: `leakage-lessons.md` → `/blog/leakage-lessons/`.
2. Change the frontmatter at the top: `title`, a one- or two-sentence `description`, today's `date`, and a few `tags`.
3. Keep `draft: true` while writing. Preview it with `npm run dev` at <http://localhost:4321/blog/>.
4. When it's ready, change it to `draft: false` (or delete the line), commit and push.

## What you can use

Headings like the one above, **bold**, *italics*, [links](https://melvinmathew9991.github.io/projects/), `inline code`, and lists.

> Quotes look like this.

| Tables | work too |
| --- | --- |
| MASE | 0.999 → 0.804 |

```python
# Code blocks keep their formatting
print("hello")
```

Same rule as the project pages: every number should come from the project's own report.

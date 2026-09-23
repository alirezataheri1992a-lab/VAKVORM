# Nederdam Bouw — Deploying, and working version by version

How this site gets onto a real URL, and how to keep working on it so that **every branch has
its own live URL** and nothing reaches the public site by accident.

Vercel is the reference here because it is built by the authors of Next.js: server actions,
ISR and `next/image` work with no adapter and no configuration. The same workflow exists on
Netlify — the differences are noted at the end.

---

## 0. What this project needs from a host

Not every host can run this site. Two features decide it:

- **Server actions.** The contact form (`src/lib/inquiry.ts`) and the guided project intake
  (`src/lib/project-request.ts`) run on the server. A purely static host cannot execute them,
  which is why the offline preview bundle disables both.
- **ISR.** Content pages carry `export const revalidate = 60`, so published CMS changes appear
  without a rebuild.

Anything that runs Next.js on a Node runtime is fine. A static-file host is not.

---

## 1. One-time setup

**Prerequisites:** a GitHub account with access to the repository, and a Vercel account
(signing in with GitHub is easiest — it wires up the repository connection in the same step).

1. Go to **vercel.com → Add New → Project**.
2. Choose **Import Git Repository** and pick this repository.
3. Vercel detects Next.js and fills in the build settings. Leave them alone:
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Install command: `npm install`
   - Output directory: managed by the framework preset
4. Under **Environment Variables**, add the variables from §2 *before* the first deploy. The
   site builds without them, so a missed variable shows up as silently degraded behaviour
   rather than a build failure.
5. Press **Deploy**.

In project settings afterwards, set the **Node.js version** to 20.x or newer. Next 15.5 does
not run on older runtimes.

### Which branch becomes production

**Settings → Git → Production Branch** decides which branch publishes to the production
domain. It defaults to the repository's default branch (`main`).

Every *other* branch gets a preview URL instead. So the feature branch can be live and
shareable without merging anything into `main`.

---

## 2. Environment variables

Vercel scopes each variable to **Production**, **Preview** and **Development** separately. Tick
the environments a variable belongs to when you add it.

| Variable | Needed for | Notes |
|---|---|---|
| `RESEND_API_KEY` | Contact form + project intake | Without it both forms validate, then honestly say delivery is not configured. They never fake a "sent". |
| `INQUIRY_FROM` | Outgoing mail | Must be a sender or domain verified in Resend, e.g. `Nederdam Bouw <website@nederdambouw.nl>` |
| `INQUIRY_TO` | Where requests arrive | Falls back to `site.email` if unset |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | CMS | **Empty means the site runs on the local seed content and still builds.** Setting it switches the whole site onto Sanity. |
| `NEXT_PUBLIC_SANITY_DATASET` | CMS | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | CMS | `2024-10-01` |
| `SANITY_REVALIDATE_SECRET` | Instant publishing | Optional. Unset disables the webhook endpoint (it returns 404), which is safe. |

`NEXT_PUBLIC_*` variables are compiled into the browser bundle — never put a secret behind that
prefix. The other three are server-only and stay server-only.

Changing a variable does **not** redeploy. Change it, then redeploy for it to take effect.

---

## 3. Working version by version

This is the part worth internalising, because it removes the need to run anything locally.

### What happens on every push

```
push to claude/…-rbcju2   →  preview deployment
                             ├─ a unique URL for that exact commit, kept forever
                             └─ a branch URL that always points at the newest commit

push to main              →  production deployment (the real site)
```

Three kinds of URL, and the difference matters:

| URL | Points at | Use it for |
|---|---|---|
| `…-<hash>-<scope>.vercel.app` | One commit, frozen | Linking to a specific version in a discussion. It never changes under you. |
| `…-git-<branch>-<scope>.vercel.app` | Newest commit on that branch | The link you give a stakeholder for "the current state". |
| your production domain | The production branch | The public site. |

Preview deployments are not indexed by search engines. The production deployment is — see §6.

### The loop

1. Branch off for a change: `git checkout -b fix/footer-contrast`
2. Commit and push: `git push -u origin fix/footer-contrast`
3. Vercel builds it and posts the preview URL. If you open a pull request, its bot comments the
   link straight onto the PR.
4. Look at it, adjust, push again. Each push replaces what the branch URL points at, while the
   older commit URLs stay reachable.
5. Merge into `main` when it is right. That is the only moment anything reaches the public site.

Because a failed type check or lint error fails `next build`, a broken commit never becomes a
live preview. The build log tells you what broke.

### Going back

**Deployments → pick an older one → Promote to Production.** It is near-instant, because the
build already exists; nothing is rebuilt. This is the reason to prefer a rollback over a
hurried fix-forward commit when something is wrong on the live site.

### Protecting previews

**Settings → Deployment Protection** can require a Vercel login to open a preview URL. Sensible
while the site still shows placeholder imagery and the example review. Turning it on means
anyone you share a preview with needs access, so for stakeholders outside the team, either
leave it off or use a shareable link from the deployment's menu.

---

## 4. Custom domain

**Settings → Domains → Add.** Add both `nederdambouw.nl` and `www.nederdambouw.nl`, then point
DNS at Vercel with the records it shows you. Certificates are issued automatically.

Then update `baseUrl` in `src/lib/site.ts` if the final domain differs from the one recorded
there — it feeds canonical URLs, the sitemap, `robots.txt` and the JSON-LD, so a wrong value is
an SEO problem rather than a cosmetic one.

---

## 5. Instant publishing from the CMS

Without this, published Sanity changes appear within about a minute through ISR. To make them
appear immediately:

1. Set `SANITY_REVALIDATE_SECRET` in Vercel to a long random string.
2. In Sanity: **Manage → API → Webhooks → Create**.
   - URL: `https://<your-domain>/api/revalidate`
   - Method: `POST`
   - Trigger on: create, update, delete
   - HTTP header: `x-revalidate-secret` with the same random string
3. Publish something and confirm it appears without waiting.

---

## 6. Before the first production deploy

The site currently shows reserved slots where photography will go, an example review that is
marked as such, and no real projects. That is fine on a preview URL and harmful on an indexed
production URL.

`src/app/robots.ts` currently allows all crawlers. Before pointing a real domain at production,
either keep indexing switched off until the real content lands, or accept that Google will index
the placeholder state. Search engines are slow to revisit; a thin first impression outlives the
week it takes to fix the content.

Also still open before launch: real photography, a real consented review, and provisioning
Resend so the forms actually deliver. See [`content-status.md`](content-status.md).

---

## Netlify instead

The workflow is the same; only the names differ.

| Vercel | Netlify |
|---|---|
| Import Project | Add new site → Import an existing project |
| Production Branch | Production branch (Build & deploy → Branches) |
| Preview deployment | Deploy Preview (per PR) / Branch deploy (per branch) |
| Promote to Production | Publish deploy |
| Deployment Protection | Password protection / Visitor access |

Netlify needs its Next.js runtime for server actions and ISR; it is installed automatically on
detection. Its free tier permits commercial use, which Vercel's Hobby tier does not — check the
current terms of whichever you choose before putting a business site on a free plan.

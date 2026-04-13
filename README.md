# GirlCon Website

The new home for GirlCon's website- showcasing our mission, sponsors, and team \<3

---

## Contributors' Guide

### Stack
- **[Astro](https://astro.build)** — static site generator (builds fast, no React required)
- **[Tailwind CSS](https://tailwindcss.com)** — utility-based styling
- **[GitHub Pages](https://pages.github.com)** — free hosting, auto-deploys on every push to `main`

### Getting Access
To contribute, you'll need write access to this repo. Reach out to a board member and ask to be added as a collaborator on the `girlcon/website` GitHub repository.

### Running the Site Locally
```bash
# 1. Clone the repo
git clone https://github.com/girlcon/website.git
cd website

# 2. Install dependencies (only needed once)
npm install

# 3. Start the local dev server
npm run dev
```
Then open http://localhost:4321 in your browser. Changes you save will hot-reload instantly.

### Deploying
Just push to `main` — GitHub Actions will automatically build and deploy the site to girlcon.org within a minute or two.

```bash
git add .
git commit -m "your message here"
git push
```

### Where Content Lives
You should rarely need to touch component files. Almost everything you'd update year-to-year is in these files:

| File | What's in it |
|------|-------------|
| `src/data/sponsors.js` | Sponsor names, logos, and links |
| `src/data/board.js` | Board of Directors + Co-Founders |
| `src/data/core-team.js` | CORE Team members |
| `src/data/faqs.js` | FAQ questions and answers |
| `src/components/Announcement.astro` | The banner at the top ("Apply to organize...") |
| `src/components/Stats.astro` | Attendee/professional/country numbers |
| `src/components/Video.astro` | YouTube video IDs for the session recordings |
| `public/images/` | All photos — team headshots, event photos, sponsor logos |

---

## Annual Update Timeline

Conference is always held in **June**. Here's when to update what:

### Right after conference (June)
- **Announcement banner** — update `src/components/Announcement.astro` to say something like "GirlCon 2025 has wrapped! Stay tuned for 2026."
- **Stats** — update the attendee, professional, and country numbers in `src/components/Stats.astro`
- **Videos** — upload session recordings to YouTube, then add the video IDs to `src/components/Video.astro`
- **Past Events photos** — add new event photos to `public/images/events/` and add them to the list in `src/components/PastEvents.astro`

### September
- **Announcement banner** — update to advertise the CORE Team application opening, with a link to the application form
- **FAQs** — update any dates or details in `src/data/faqs.js` that reference the upcoming year

### November (once new team is formed)
- **CORE Team** — update `src/data/core-team.js` with new member names, roles, schools, and photos
- **Board** — update `src/data/board.js` if there are any board changes
- **Team photos** — add headshots to `public/images/board/` and `public/images/core-team/` (filename should match the `photo` field in the data file)
- **Announcement banner** — update to advertise National team applications opening

### Before conference (Spring)
- **Chicago + Virtual pages** — update `src/pages/chicago.astro` and `src/pages/virtual.astro` with the confirmed date, location, speakers, and registration link
- **Sponsors** — update `src/data/sponsors.js` with the current year's sponsors and drop new logos into `public/images/sponsors/`
- **FAQs** — update any answers that mention specific dates or the current year

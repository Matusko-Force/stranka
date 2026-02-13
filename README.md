## 0100 Academy Teaser Site

Single-page teaser for the upcoming 0100 Academy cohort. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

### Getting Started

1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Open `http://localhost:3000` in your browser.

### Updating Content

- **Logo**
  - Replace `public/logo.png` with your preferred asset while keeping the same filename.
  - The logo is rendered inside the sticky header in `src/app/page.tsx`.

- **Hero person**
  - Swap out `public/hero-person.png` for a new image (ideally square) and keep the filename.
  - Update the `heroPerson` object near the top of `src/app/page.tsx` to change the displayed name and title.

- **Sign-up flow**
  - The mock login + sign-up experience lives in `src/components/sign-up-form.tsx`.
  - Submissions POST to `/api/sign-up`, which sends an email via the Resend API. Copy `.env.local.example` to `.env.local` and provide `RESEND_API_KEY`, `RESEND_FROM_EMAIL` (a verified Resend sender), and `SIGNUP_NOTIFICATION_EMAIL` (where the lead should land).

- **Speaker data**
  - Source: `data/past-speakers.csv`. The site parses this CSV directly (see `src/lib/speakers.ts`), so updating/adding rows here automatically refreshes the Past Speakers grid.
  - Images: place speaker images inside `public/speakers/` using the slugified speaker name (e.g., `john-doe.jpg`). The loader checks for `.jpg`, `.jpeg`, `.png`, and `.webp` in that folder before falling back to `public/speakers/placeholder.jpeg`.
  - LinkedIn URLs are pulled from the CSV column named `Linkedin`.

### Notes

- Smooth scrolling is enabled globally; anchor targets are `#signup` and `#speakers`.
- Styling is handled via Tailwind CSS classes defined directly in components and the shared `src/app/globals.css`.
- All sections are semantic (`header`, `main`, `section`, `figure`) and ready to be extended or hooked into a CMS later.

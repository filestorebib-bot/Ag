# Triveni Secondary School — Department of Plant Science

Premium, responsive React + Vite school website starter designed for **Triveni Secondary School, Department of Plant Science, Katari-4, Udayapur, Koshi Province, Nepal**.

## Included

- Modern agriculture-focused responsive design
- Sticky navigation + mobile menu + Classes dropdown
- Notice ticker with pause-on-hover
- Home, About, Programs, Program Details, OJT, Classes, Subject Details, Notices, Notice Details, Contact and Developer pages
- Image gallery slider + lightbox
- Program sharing / copy-link behavior
- Teacher cards and alumni testimonial carousel
- Embedded PDF/image/text notice viewing
- Search and category filtering for notices
- Class → Subject → Unit → Resources structure
- Google Maps embed
- Accessibility-friendly controls and semantic structure
- SEO meta tags, sitemap and robots.txt
- Installable PWA manifest
- Self-contained demo Admin dashboard with editable localStorage content
- Clean component architecture

## Run locally

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal.

## GitHub

1. Create a new GitHub repository.
2. Upload/extract this project.
3. In the repository root run:
   ```bash
   npm install
   npm run build
   ```
4. Deploy to Vercel with framework **Vite** and build command `npm run build`.

## Admin

Open `/admin`.

Demo password:

`admin123`

**Important:** This is intentionally a zero-backend demo so the project runs immediately. It uses `sessionStorage` for the demo login and `localStorage` for content edits. This is NOT secure enough for a real school administration system.

### Production recommendation

Connect:

- Supabase Auth for admin authentication
- Supabase Postgres tables for notices, teachers, programs, OJT, classes, subjects, gallery and testimonials
- Supabase Storage for PDFs/images
- Row Level Security (RLS) policies
- Email service for the contact form
- Server-side validation / rate limiting

The UI/data structure is already separated so these changes can be made without rebuilding the public site.

## Content verification

School-specific facts such as official history, staff qualifications, contact emails, OJT duration/evaluation, class subject lists, testimonials and official policies should be confirmed by the school before publication.

Public reference sources requested in the brief:

- NEB curriculum: https://neb.gov.np/curriculum
- Tankanath: http://www.tankanath.com
- Tankanath Nepal: https://tankanath.com.np

The current seed content deliberately uses verification language instead of inventing official facts.

## Replace placeholder data

Main content is in:

`src/data/siteData.js`

Replace:

- Staff photos/details
- Official school email
- School history
- Verified testimonials
- Programs
- OJT schedules
- Class subjects
- Syllabus/resource links
- Notice files
- Developer profile

## Images

Starter images use Unsplash URLs for visual placeholders. For production, upload school-owned/permissioned photos and change the image URLs in the data or CMS.

## Important deployment note

Change the placeholder domain in `public/sitemap.xml` to the final domain.

If the final site is `https://triveni-school.example.np`, update all canonical/SEO settings accordingly.

## Suggested Supabase tables

```text
profiles
notices
teachers
programs
ojt
classes
subjects
units
resources
gallery
testimonials
site_settings
contact_messages
```

For files, use storage buckets such as:

```text
school-images
notice-files
syllabus
ojt-documents
teacher-photos
```

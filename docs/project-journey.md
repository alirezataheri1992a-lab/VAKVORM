# VAKVORM — Project Journey (guided intake)

A conditional, multi-step project-request experience at **`/start-uw-project`** that replaces
the conventional long "offerte aanvragen" form. It guides the visitor step by step so VAKVORM
receives a well-prepared enquiry, and completing it feels like a small preview of working with
VAKVORM: structured, clear, one party in control.

## 1. Purpose
Turn a cold "contact form" into a calm, reassuring intake that (a) shows what information is
useful, (b) collects better context for the first conversation, and (c) reinforces the brand
promise. **It is not an instant quotation** and it **never asks for budget**.

## 2. Journey map
Intro → Project → *(conditional questions)* → Locatie → Fase → Situatie (uploads, optional) →
Wensen (beschrijving + inspiratie) → Planning → Contact → Overzicht → Versturen → Bevestiging.

Progress is shown as five calm chapters — **Project · Situatie · Wensen · Planning · Contact** —
never "stap 7 van 14". The number of screens varies because of conditional logic.

## 3. Conditional branches (code-owned — `src/lib/journey.ts`)
A follow-up appears only when a relevant service is selected:
- **Complete renovatie / Renovatie–verbouwing** → "Wat wilt u ongeveer aanpakken?" (multi)
- **Aanbouw / uitbouw** → "Wat voor uitbreiding?" (multi)
- **Badkamerrenovatie** → "Wat wilt u laten doen?" (multi) + "Indeling wijzigen?" (single)
- **Maatwerk interieurbouw** → "Wat wilt u laten maken?" (multi) + "Voor welke ruimte(s)?" (multi)
- **Opbouw** → "Extra woonruimte op het dak?" (single)
- **Stuc- & afbouwwerk** → "Om welke ruimtes?" (single)
- **Shared** → "Heeft u al een ontwerp of tekeningen?" — asked **once** across renovation /
  aanbouw / opbouw, and it adapts the upload copy in the Situatie step.

Service options map to real VAKVORM service slugs where practical (`serviceSlug`); the flow
logic itself stays in code so editors can't break the branching. Deselecting a service prunes
its now-irrelevant answers (`pruneCond`) so stale data is never submitted.

## 4. Data model (`ProjectRequest`)
`services[]`, `cond{}` (conditional answers), `postalCode/city/street`, `phase`, `description`,
`inspirationUrl`, `desiredStart`, `deadline`, `firstName/lastName/email/phone`,
`preferredContact`, plus `situationFiles[]` / `inspirationFiles[]`. **No budget, no DOB, no
financial or sensitive data** — data minimisation is deliberate.

## 5. Required vs optional
Required: at least one service; postcode + plaats; project phase; timing; first name + valid
email. Everything else (conditionals, street, uploads, description, inspiration, last name,
phone, contact preference, deadline) is optional to minimise friction.

## 6. Upload rules
Client- **and** server-validated: types `image/jpeg, image/png, image/webp, application/pdf`;
max **8 files**, **10 MB** each, **25 MB** total. MIME is checked (not just the extension),
filenames are sanitised server-side, files are never executed and never written to `/public`
or Git. Files live only in React state (not persisted) — nothing sensitive lingers in the
browser; after a refresh they must be re-added (text/selections are restored).

## 7. Submission architecture
Client → server action `submitProjectRequest` (`src/lib/project-request.ts`) → validation →
attachment handling → **Resend** email. Leads are **not** stored in Sanity (Sanity is the
public content CMS, not a CRM). With `RESEND_API_KEY` + `INQUIRY_FROM` set: a structured intake
email goes to `INQUIRY_TO` with the files attached, and the visitor gets a confirmation email.
Unset → honest `unconfigured` state offering phone/email (never a fake "sent"). No provider
credentials touch the browser.

## 8. Privacy
A consent line sits by the submit button and links to `/privacy`. Data is used only to contact
the visitor about their request. `consentVersion`/CRM forwarding are intentionally not added
yet (see §14).

## 9. CTA strategy
Primary entry points point here: **header**, **hero**, and the **final conversion panel** all
say *Start uw project*. The mid-page CTA keeps a distinct label (*Plan een projectgesprek*) so
two identical buttons never stack. Secondary routes remain: bellen, Bekijk projecten, Werkwijze,
and the simpler `/contact` page.

## 10. Error handling
In-context, human validation ("Vul uw e-mailadres in zodat we u kunnen bereiken."), never a wall
of red. Submission states: idle · submitting · success · unconfigured · server-error. On a
recoverable failure the entered data is preserved and direct contact is offered. Honeypot +
minimum-time spam checks; no CAPTCHA.

## 11. Mobile behaviour
Designed mobile-first: large question, large touch targets, obvious selected state, comfortable
upload flow (native file picker → gallery or camera). Tonal chapters (warm light → warm stone →
navy finish). Reduced-motion respected; transitions are a quiet 340 ms rise.

## 12. State persistence
`sessionStorage` keeps safe text/selection state + current screen; the intro offers
"Verdergaan waar u gebleven was" or "Opnieuw beginnen". **Uploaded files are never persisted.**
State is cleared on successful submit.

## 13. Analytics events (ready, not wired)
The chapter structure supports anonymous funnel states — `started`, `project_defined`,
`situation_completed`, `planning_completed`, `contact_completed`, `submitted`. **No PII**
(name/email/phone/description/attachments) may ever be sent to analytics. No analytics provider
is currently installed.

## 14. External services still required / future CRM
- **Required for production delivery:** a verified Resend domain + `RESEND_API_KEY`,
  `INQUIRY_FROM`, `INQUIRY_TO`.
- **Optional at scale:** a storage provider (S3 / Vercel Blob) if attachments outgrow email
  limits; the server abstraction is isolated so this is a localised change.
- **Future CRM:** `submitProjectRequest` produces a clean `ProjectRequest` that a later
  integration could forward to a CRM / lead pipeline. Not built now (no CRM in the project).

> Latest published release: **version 28**, targeted native Word-editing, homepage-motion and complete card-demo removal on **7 October 2026**. The final correction section is authoritative. Earlier v26/v27 evidence is historical and does not establish current phone or Word/WPS acceptance.

# Tool Fera — targeted correction and retained release evidence

Verified source/build: **7 October 2026 (UTC)**. Continued the existing saved **v25** project on `main`; no restart, redesign, domain migration or converter rewrite. This is the retained version-26 optimization report; the current correction is documented at the end. Earlier conversion, network and resource reports remain historical evidence for unchanged areas, not fresh certification here.

Scope: performance, normal accessibility improvements and application-origin best practices. The previously saved metadata/content changes were preserved. No further SEO research or implementation was performed during this resumed pass.

## Completed / verified

### Measured build changes

Baseline: the existing v25 build inspected on 4 October, without rebuilding it. Final: the actual emitted production artifact on 7 October. The figures below sum emitted files and static import dependencies, counting shared chunks once. Gzip is calculated for each chunk separately. These are **not observed network payloads, load times, Lighthouse scores or Core Web Vitals**.

| Artifact / dependency closure | Before raw bytes | After raw bytes | Before gzip bytes | After gzip bytes |
|---|---:|---:|---:|---:|
| Homepage referenced static JS | 428,139 | 428,201 | 133,313 | 133,458 |
| Homepage CSS, all linked files | 152,472 | 138,292 | 30,202 | 28,086 |
| Representative tool-page shared JS shell | 432,528 | 426,639 | 134,402 | 131,973 |
| Word → PDF shell plus tool UI, parser excluded after deferral | 474,043 | 455,792 | 151,819 | 144,695 |
| Homepage server-rendered HTML | 131,522 | 128,561 | 20,534 | 20,430 |

CSS decreased by **14,180 raw bytes (9.30%)** and **2,116 gzip bytes (7.01%)**. The tool-page shared graph decreased by **5,889 raw / 2,429 gzip bytes**. Word → PDF's shell-plus-UI graph decreased by **18,251 raw / 7,124 gzip bytes**. Homepage JS increased by **62 raw / 145 gzip bytes**: there is no claimed homepage JS reduction. Framework/runtime code remains the largest shared cost; it was not rewritten.

Tailwind now scans the shipped app, site components, library and the three used UI primitives explicitly. Unused starter components no longer generate utilities. Unused animation CSS imports and 23 legacy menu/hero CSS rules were removed. Other starter source files were retained where deleting them could affect the project template. The obsolete motion preference provider/stylesheet and tracked TypeScript build cache were removed.

### Loading and navigation

- Native document links and existing navigation structure remain intact. Destination HTML and tool shell are server-rendered; heavy processing does not gate shell rendering.
- Menu and dialog search content use lazy imports when their dialogs open. The existing dialog shell/focus restoration remains; deferred search receives focus after it mounts. Homepage search remains immediately present, so its code stays in the homepage graph.
- The DOCX parser is dynamically imported after a valid Word file is read, with an abort check before parsing. No parser/converter algorithms changed.
- PDF.js/PDF conversion, OCR, DOCX rendering, image processing and QR generation retain action/route loading boundaries. The built homepage graph contains no heavy processing engine or tool UI.
- Optional native Speculation Rules prefetch destination HTML on moderate navigation intent in supporting browsers. No prerendering or engine prefetch was introduced. Unsupported browsers retain ordinary links. No navigation-time gain was measured.

### Accessibility and stability

- Native `prefers-reduced-motion` rules now apply without the old forced `full` attribute/provider bypass. Normal-motion hero, search and action animation behavior/timing remains. Reduced motion gets static decorative hero/search behavior and softer action feedback with truthful progress and download synchronization.
- Favorites cannot be toggled before saved localStorage identifiers finish loading. Existing recent/history validation, bounded storage and cleanup remain.
- Coarse-pointer targets were increased to at least 44 CSS px for selected small controls, including favorites, row removal, slider thumbs, saved-state controls and fallback downloads. No keyboard-navigation redesign was introduced.
- Muted saved-row and PDF-file-list text was darkened. Against white, the checked colors improved from approximately 3.86:1 / 3.99:1 to 5.66:1. This is a spot check, not a whole-site contrast certification.
- Shared slider thumbs now receive their label association. The missing association was caught in the final rendered-HTML check; image quality, password length and PDF image quality routes passed the targeted correction check.
- 22 form/slider controls in the representative rendered HTML had valid label associations. Hidden framework form-bridge inputs were excluded. Compiled CSS includes native reduced-motion and coarse-pointer rules; no forced-full selector remains.
- Existing SSR header geometry, reserved hero dimensions, hydration control guard, worker cleanup, Blob URL cancellation, status/error announcements and focus styles were preserved.

### Actual tests and their boundaries

| Test | Actual result |
|---|---|
| TypeScript, final source | Passed `tsc --noEmit --incremental false`; empty error log |
| Production build | Passed via the Sites build helper. An initial verified build was followed by one necessary final rebuild after the discovered slider-label fix. No builds followed documentation edits |
| Built production Worker route regression | 61 named routes returned HTTP 200 with one H1 and preserved canonical; 61 internal destinations resolved; no captured Worker error |
| 404 regression | Four invalid/deep/debug paths returned HTTP 404, current recovery content and noindex |
| Representative tool shells | PDF Compressor, PDF → Word, Word → PDF, Image Compressor, PNG/JPG → PDF, Image OCR, Percentage, JSON and QR were covered by the 61-route HTML regression |
| Resource shells | About, Guides/index plus the existing guide, Contact, Privacy, Terms and Disclaimer passed HTML/link checks |
| Existing technical SEO preservation | Sitemap returned 60 unique URLs, including all 46 working tools; Contact remains excluded. Robots references the existing origin. 107 JSON-LD blocks parsed; WebSite, Organization, BreadcrumbList and WebApplication types remain. This was a preservation check, not a new SEO pass |
| Emitted assets/chunks | 24 HTML-referenced assets, 14 selected required engine/brand/font/image assets and 317 relative static/dynamic JS chunk references resolved in the artifact. No filesystem worker URL was found |
| Shared engine tests from this optimization pass, 5 October | Passed actual PDF worker merge/extract/rotate/delete/reorder/lossless output, image-PDF/ZIP byte checks, image limits/BMP ordering, fuel/date/discount calculations, Unicode Base64/URL handling, JSON/text workers and independently decoded QR PNGs. Relevant engine source was unchanged afterward; these were not repeated |
| Action/download/search tests from this optimization pass, 5 October | Passed parallel processing/deadlines/cancellation, expired Blob and failed activation handling, 13 directional search rankings. Measured action 1,401.38 ms, compression 1,801.70 ms, download sequence 2,601.92 ms with 28 progress samples. Event order: choreography → completion → paint → native activation → request. These are Node sequence checks, not physical-phone visuals or native saved-file completion |
| Final slider-label correction | Three affected production-rendered routes passed; each slider thumb references an existing label |
| Diff/cleanup | Whitespace check passed. No new dependency, paid API, database, authentication or server document upload added. Build/cache/output/debug files are excluded from the GitHub release source |

The short-lived Worker emulators were disposed. No preview server or watcher was left running. The build emits a Vinext informational route-classification limitation; this is not a failing build. Emulation may use placeholder Cloudflare request metadata; it does not certify production cache behavior.

## Partially verified

| Area | Verified evidence | Limit |
|---|---|---|
| 1. Homepage JS/bundle | Exact graph above; engines absent | No homepage JS-size win; no measured hydration/CPU time |
| 2. CSS | Scoped generation, dead rules removed, exact byte reduction | No CSS coverage percentage |
| 3. Lazy loading | Dynamic imports and emitted chunks verified | No full browser network waterfall |
| 4. Navigation | Native links, server shells and optional HTML prefetch | No click-to-interface milliseconds |
| 5. Heavy engines | Homepage closure isolated; asset/chunk checks | No fresh full OCR recognition or converter-fidelity run |
| 6. Assets | Existing 640/1200 WebP hero assets are 26,948 / 67,136 bytes; dimensions/srcset/high priority preserved | No further re-encoding was justified; no image-quality redesign |
| 7. Fonts | Existing system UI stack; conversion fonts stay tool assets | No new UI font dependency; no measured font-network saving |
| 8. LCP direction | Less blocking CSS; SSR content and priority responsive hero retained | Actual LCP element/time not measured |
| 9. Interaction/main thread | Deferred parser/dialog code and existing workers retained | No INP/long-task timing |
| 10. CLS direction | Existing fixed header/hero geometry and hydration guards preserved; dialog fallback reserves space | CLS and slow-reload filmstrip not measured |
| 11. Mobile performance | Fewer CSS bytes, action loading and 44px selected targets | No physical-phone performance/thermal/frame measurement |
| 12. Accessibility | Native motion preference, labels, targeted contrast/targets | No complete screen-reader/axe/manual mobile audit |
| 13. Best practices | Abort/import boundary, saved-state guard, cache/dead-code cleanup | Not a security penetration test |
| 14. Runtime/console | Worker HTML regression captured no error; static imports resolve | Browser console/hydration results require actual browser checks |
| 15. Browser compatibility | Progressive prefetch fallback, native controls, existing image fallback preserved | No Firefox/Safari/iOS device matrix |
| 16. Obsolete code | Provider/CSS/imports/23 rules/build cache removed | Template files retained where deletion was unnecessary |
| 17. Build | Final production artifact and TypeScript passed | Vinext informational classification notice remains |
| 18. Regressions | Route shells, assets and existing current-pass engine/sequence evidence | UI clicks/uploads on the final publication are separate acceptance checks |
| 19. Publication | Candidate passed available prepublication checks | Native deployment receipt establishes publication/version, reported separately |
| 20. GitHub | Target `aftab-62/Toolfera`, `main`; one final optimization commit is authorized | Final SHA/push receipt is reported after publication, never predicted here |

## Not measured

Lighthouse scores, real-user field Core Web Vitals, LCP, INP, CLS, mobile frame rate/battery impact, network-waterfall timings, hydration cost and click-to-route latency. Lighthouse/local Chrome infrastructure was unavailable during the established baseline; it was not repeatedly attempted. No scores or timings were estimated. A browser UI smoke check does not establish these metrics.

## Remaining limitations

- No physical-phone acceptance. Mobile viewport/device performance and OS reduced-motion visuals require manual/real-device checks; compiled rules are not visual proof.
- Exact historical `Object.defineProperty` failure was not reproduced. This pass does not claim to identify that old error's root cause.
- Native saved-file completion and Microsoft Word/WPS clipboard/editing GUI behavior are not verified here.
- Full PDF/Word/OCR layout-quality testing was intentionally not repeated because conversion/recognition algorithms did not change.
- Historical reports, fixtures and screenshots are not current performance claims. Root `QA.md` and `docs/QA.md` contain this same report. The old root reports were archived before replacement.
- Live deployment/browser and GitHub receipts are reported separately after the release action; this document certifies the tested source/build before publication.

Dedicated competitive SEO, keyword strategy, tool-page content expansion, internal-link strategy and SEO blog/content work were intentionally deferred to the next dedicated SEO pass.

## Main changed files

Performance: `app/globals.css`, `app/layout.tsx`, `components/site/header-overlays.tsx`, new `mobile-navigation.tsx` and `route-prefetch.tsx`, `word-pdf-tool.tsx`, `scripts/measure-client.mjs`.

Accessibility/stability: `hero-phrases.tsx`, `tool-motion.css`, `search.tsx`, `saved-tools-store.tsx`, `components/ui/slider.tsx`, `.gitignore`; deleted `motion-preference.tsx`, `motion-preference.css`, `tsconfig.tsbuildinfo`.

Previously saved SEO changes retained: `lib/tool-seo.ts`, `lib/catalog.ts`, `lib/seo.tsx`, category/tool route metadata, `page-layouts.tsx`, `primitives.tsx`. They were not extended during this resume.

Build/measurement summary: `docs/performance/measurements-2026-10-07.json`. Reproducible shared checks: `scripts/verify-tool-engines.mjs`, `scripts/verify-motion-reliability.mjs`, `scripts/measure-client.mjs`.

## Published version 26 — subsequent desktop smoke verification

The existing public Site deployment succeeded on **7 October 2026 at 14:02:48 UTC**, version **26**, from Sites source commit `09c3f84d05e0b2ebbe493d50c3c2fdcd1a9da622`. The live page uses the final stylesheet `index.BzsBnclO.css`. This section was added after publication; only documentation/evidence changed afterward, with no rebuild or runtime change.

A usable Chrome UI surface became available for live production smoke checks, at **1363 × 936**, normal motion preference (`prefers-reduced-motion: reduce = false`). No mobile viewport emulation, Lighthouse, timing APIs or physical phone was available.

- Homepage image decoded with reserved 1200 × 922 dimensions; system UI font present; no horizontal overflow. The hero phrase changed between observations (`compress PDFs`, `calculate instantly`, `merge PDFs`); this is desktop normal-motion evidence, not mobile/reduced-motion acceptance.
- Header search opened its immediate dialog/fallback, then its search content. `word to pdf` ranked Word to PDF first. The modal has no animated border, its input accepted typing, and closing restored focus to the trigger.
- An Image Compressor favorite was added, persisted across reload after hydration, and removed again. Early unloaded favorite controls were disabled as intended. Recent history subsequently displayed eight visited tool IDs.
- All nine representative tool pages listed above reached hydrated `data-ready=true` interfaces without horizontal overflow. QR generation produced a decoded-by-browser 512px preview and PNG/SVG download controls. This preview check is not a scanner decode or native-download test.
- Percentage inputs 10 and 250 produced 25. JSON formatting reached `JSON ready` and the formatted-result controls. Existing Node engine tests supply the separate exact-data assertions.
- About, Guides, Contact, three legal pages and the recovery page rendered their current headings without horizontal overflow. Desktop PDF dropdown opened with its real links and closed. Mobile menu remains unverified on an actual mobile viewport.
- No application-origin warning/error appeared in the captured production browser logs. Browser-extension metadata errors were observed and excluded by their `chrome-extension://` origin; they are not Tool Fera errors.
- Some automated observations happened before hydration completed; a short readiness wait timed out once and the later interface was ready. There is no claimed zero-delay navigation or measured hydration-speed result. Automation selector mistakes were corrected without application changes.

Published desktop screenshot: `docs/performance/toolfera-v26-production.jpg`. The GitHub commit/push receipt is reported after creating the one final commit; its SHA is not predicted inside this document.


## Historical version-27 PDF → Word / hero / homepage continuation — 7 October 2026

This pass changed only `components/site/hero-phrases.tsx` and homepage-scoped rules in `app/globals.css`. No processing algorithm, Word → PDF/OCR tool, routing, SEO, navigation, download choreography, header or unrelated card/section implementation changed. The current static navy/gradient header remains intact.

### PDF → Word: saved version-25 behavior retained, no converter rollback required

Saved v25 is source commit `2872881895b20380bd296a3248d3de42bb3470f5`. The PDF-to-Word component, native extraction/layout/DOCX packer, file intake, lazy tool interface, action/progress/download wrappers and package/lockfile were compared against it: all 13 checked files are byte-identical. No PDF.js public worker/font/CMap/WASM asset changed from v25. Route/layout differences introduced in v26 concern preserved metadata/help content, not converter execution. No PDF-to-Word loading or wrapper regression was reproduced.

The existing `scripts/verify-document-flow.mjs` was reused in its **pdf-word stage only**, with the preserved BudgetMate and alcheMe PDFs; no new PDF acceptance suite was created. All generated DOCX XML/media parts match the saved v25 output parts byte-for-byte. Native extraction, ordinary Word main-body paragraphs/runs/headings, usable empty paragraphs, real body tables and localized graphics remain unchanged. Zero OCR worker calls and zero text boxes were observed in the targeted engine checks.

| Fixture | Source PDF pages | DOCX page sections | Main-body text elements | Editable body tables | Localized images | Text boxes |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| BudgetMate | 16 | 16 | 500 | 9 | 3 | 0 |
| alcheMe | 16 | 16 | 4,532 | 1 | 0 | 0 |

The preserved graphics/media and layout matched the existing regression baseline; temporary canvases were released. Scanned PDFs retain the separate OCR guidance. A real Chrome production session on v26 also read and converted both files successfully: BudgetMate reached a 16-page / 705.5 KB result and alcheMe a 16-page / 64.2 KB result. A BudgetMate browser download event was observed. Its returned file was not available for workspace readback, so native saved-file completion and browser-produced DOCX XML readback are **not verified**. Editable XML counts above come from the current engine's local fixture outputs. No new Microsoft Word/WPS selection test or DOCX page rendering was performed; 16 sections are not reported as a new rendered page-count measurement.

### Hero: changing text remains useful under reduced motion

The supplied mobile video was inspected at 1, 5 and 9 seconds: it shows `merge PDFs.` unchanged, including after search focus. The old v26 source explicitly skipped every timer update whenever `prefers-reduced-motion: reduce` matched. This is a confirmed permanent-freeze code path; the phone's actual OS/browser preference cannot be read from the video and is **not determined**.

The hero now has one self-rearming timeout: 2,600 ms for normal motion and 5,200 ms for reduced motion. Reduced-motion CSS still suppresses movement; only the useful text changes more slowly. Visibility, pagehide/pageshow, window focus and motion-preference changes rearm/clean up the clock. It does not depend on viewport size, hover, pointer movement or search focus, and no header canvas was restored.

The targeted controlled hook/timer harness executed the current component source and passed all nine phrase updates, normal/reduced timing, hidden/visible recovery, pagehide/pageshow recovery, focus recovery, live preference changes, resize/orientation independence, a single active timeout and cleanup/remount checks. This is **logic evidence**, not physical-phone visual acceptance.

### Homepage examples: one card surface

All eight previews in “The tools you’ll reach for.” use the main outer card surface. The secondary background, enclosing borders, rounded corners, inset horizontal padding and minimum-height panel treatment were removed through `.popular-section` rules. A quiet top separator and typography retain the examples. Image Compressor, PDF Merger, Percentage Calculator, Word Counter, PDF to PNG/JPG, JSON Formatter, QR Code Generator and Fuel Cost Calculator retain their example/result information, main card, icon, name, description, favorites and Open tool links. Small format labels are retained.

The compiled CSS checks retain one column at 320/360 px, two at 375/390/430 px, three at 768/1024 px, and four at 1280/1440 px. Flexible example rows can wrap. These are stylesheet checks; mobile/tablet visual layout, clipping/overflow and physical-device behavior were **not independently observed** in this environment because viewport emulation is not exposed.

### Targeted checks and release preparation

- TypeScript: **passed**, `tsc --noEmit --incremental false`.
- Production build: **passed once** after the two runtime source changes; no additional production build was run.
- Final diff/whitespace check: passed; unrelated processing code unchanged.
- Built-Worker checks: homepage and PDF-to-Word returned 200; all eight cards, examples and Open links remained; editable PDF engine/worker assets returned 200; no Worker warnings/errors captured.
- Compiled PDF-to-Word dynamic import still targets `tools/pdf-editable-word.ts`; its static dependency closure contains no OCR/Tesseract engine.
- Homepage initial static JS graph remains engine-free: 428,426 raw / 133,496 separately gzipped bytes, versus v26's 428,201 / 133,458 (+225 / +38 bytes for lifecycle handling).
- Homepage CSS: 138,615 raw bytes versus v26's 138,292 (+323 bytes for scoped example styles). The unchanged action stylesheet is 19,220 bytes and remains separate; it must not be conflated with homepage CSS. Version-26 CSS-scope/deferred-loading improvements remain present.
- Captured Chrome PDF checks had no Tool Fera application-origin error/warning. Extension metadata errors were identified by `chrome-extension://` URLs and excluded. One test locator initially used button rather than the actual download link; inspecting the UI and using the correct link resolved it without a product change.
- No 61-route audit, broad accessibility pass, SEO audit or unrelated converter quality suite was repeated.

Version **27** was saved from source `eba64c495b20b5987dcc70c0fa3f099c98315e4d` and published successfully at 2026-10-07T16:08:26.727365Z. Final GitHub commit/push receipts are reported after creating the one final commit, without predicting its SHA inside this document. Physical-phone verification, mobile performance, Lighthouse, field Core Web Vitals, browser-matrix coverage and interactive Word/WPS behavior remain unverified/unmeasured. The exact historical `Object.defineProperty` cause was not reproduced.


### Version-27 live desktop verification after publication

The actual published homepage was checked in Chrome at **1363 × 936**, with `prefers-reduced-motion: reduce` **false**. The new stylesheet `/_next/static/css/index.Jy-Cecy_.css` was loaded. The hero visibly changed from **resize images → compress images → convert images** at approximately 0 / 2.718 / 5.431 seconds, then to **format JSON** after search focus. This is observed desktop normal-motion behavior, not a claim about the physical phone.

All eight homepage preview areas had transparent computed backgrounds, zero left/right/bottom border widths, a 1 px top separator, zero panel minimum height and no horizontal preview overflow. Outer cards remained 301 px wide, with balanced 348.73 px first-row / 328.59 px second-row heights. Main cards, labels, icons, stars and Open tool links were present and visually reviewed. Page-level horizontal overflow was false. The static navy header remained readable and unchanged. Screenshot: `docs/performance/toolfera-v27-cards-final.jpg`.

No Tool Fera application-origin errors/warnings appeared in the captured post-publication logs; the returned errors had extension URLs. Mobile widths remain compiled-CSS checks, not an actual mobile-browser/phone visual test. No additional production build was needed after documentation/screenshot recording.


## Current targeted correction — native Word editing, homepage motion and clean cards

**Date:** 7 October 2026 (UTC). Continued saved version 27. No restart, full performance/SEO/route audit, unrelated tool QA, new conversion mode or header redesign was performed.

### PDF → Word — completed implementation; Office interaction partially verified

The supplied 14.23-second WPS recording was reviewed as a sequence of frames before source edits. Deleting the cover heading leaves its remaining letters stretched across the old width. The preserved v25 source (`2872881895b20380bd296a3248d3de42bb3470f5`) and current v27 converter files were byte-identical before this correction. Restoring that packer unchanged would therefore retain this defect; the earlier zero-text-box/parity checks did **not** prove natural editing.

The confirmed formatting cause is `w:fitText`, which forces each run into its measured PDF width, compounded by coordinate-derived `w:tab`/`w:tabs` stops. V27 fixture outputs contained 497 fit-width entries / 494 tab elements for BudgetMate and 2,429 / 58 for alcheMe. Ordinary text was already in the main body; text boxes, OCR and a new loading wrapper were not the cause.

Only `tools/pdf-editable-docx.ts` runtime packing changed:

- Removed all fit-width/expanded text and coordinate tab generation.
- Joined adjacent items with the same typography into normal Word runs; word boundaries use ordinary single spaces, not fixed horizontal anchors.
- Kept native extraction, paragraph grouping, explicit source-page sections, ordinary indentation/line leading, real empty paragraphs, editable table models and localized graphics unchanged. Original line breaks remain; font substitution and edits may require manual layout adjustment.
- PDF component, PDF.js initialization/assets, lazy engine loading, native layout extraction and the separate scanned-PDF OCR guidance are unchanged. No OCR was added.

The existing regression harness was reused for its PDF→Word stage only, using both preserved real PDFs. A small assertion in `scripts/verify-document-flow.mjs` now compares paragraph text independently of run segmentation/normalized whitespace. Its current expression passed against both generated outputs and the preserved baseline (277 / 271 text-bearing paragraphs including table cells). No large new suite was added.

| Fixture | Source pages | DOCX sections | Main-body text elements | Text-bearing body paragraphs | Editable tables | Localized images | Fit-width entries / tabs / text boxes |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| BudgetMate | 16 | 16 | 443 | 134 | 9 | 3 | 0 / 0 / 0 |
| alcheMe | 16 | 16 | 396 | 245 | 1 | 0 | 0 / 0 / 0 |

Both conversions passed: native layout JSON and graphic bytes exactly match the preserved baseline; non-whitespace text/reading order matches v27; all paragraph text matches the earlier baseline independent of run boundaries; temporary crop canvases were released; zero OCR worker calls were recorded. The heading `Final Year Project Proposal` is one ordinary text run. XML deletion/insertion leaves no fixed-width, character-spacing, distributed alignment, excessive whitespace or text-box property behind. These are engine/XML checks, **not interactive Microsoft Word/WPS tests**. Sixteen sections preserve source boundaries; a new rendered DOCX page count was **not measured**.

### Homepage motion — completed source correction; phone acceptance unverified

`components/site/hero-phrases.tsx` restores v25's independent interval/deadline clock. V27's timeout was restarted by every focus/resume event; a targeted reproduction with ten focus events over ten seconds produced **zero** changes before this correction and **three** with the corrected source. Recovery events now check the clock without postponing its deadline. One interval exists, with full listener/interval cleanup; hidden pages skip updates and foreground/pageshow recovery advances at most one phrase, without a catch-up burst. No hover, touch or mobile breakpoint is required.

Normal updates use a 2,600 ms period. Reduced-motion updates use 5,200 ms, with a mild opacity-only transition. The component no longer requires the newer MediaQueryList event API to initialize. Controlled hook/clock tests passed the nine-phrase cycle, focus stress, hidden/visible and pagehide/pageshow recovery, resize/orientation/pointer independence, live preference changes, legacy media-query API compatibility, cleanup and remount.

`app/globals.css` preserves v25's **six-second cobalt/cyan orbit for normal motion**. The confirmed static search-border path under reduced motion had replaced v25's four-edge fallback with a stationary gradient. The gentle eight-second edge-opacity sequence is restored only inside `.hero-search`; it is slower, without spatial movement, and does not reintroduce the global Full Effects accessibility override. The Find a tool modal remains static. The current static navy/gradient header is untouched.

The supplied phone recording cannot reveal its actual `prefers-reduced-motion`/visibility/timer state. The specific focus-starvation and reduced-motion static paths are reproduced/removed in source checks; this is **not proof of the exact runtime state on the user's phone**. Browser/device visual results, if obtained, are recorded separately below.

### Homepage cards — demo content removed completely

`components/site/primitives.tsx` no longer imports/renders `ToolPreview`. Non-standard card variants are used only by the homepage popular section. All example panels **and all their content** are removed for Image Compressor, PDF Merger, Percentage Calculator, Word Counter, PDF to PNG/JPG, JSON Formatter, QR Code Generator and Fuel Cost Calculator. No replacement example, separator, graphic or sample result was added.

All eight outer cards retain icon, category, favorite control, title, short description and Open tool link. Homepage-only CSS switches the former featured example grid to the same natural column flow, reduces the desktop minimum height to 222 px and removes that minimum on mobile. Category labels remain visible on mobile. Compiled cascade checks passed at 320, 360, 375, 390, 430, 768, 1024, 1280 and 1440 px: one/two/three/four grid columns follow the existing breakpoints, featured content uses flex flow, and normal/reduced search animations are present. These are **compiled CSS checks**, not mobile visual overflow measurements.

### Checks, scope and measured build evidence

- TypeScript: **passed**, `tsc --noEmit --incremental false`.
- Production build: **passed once**, after the four runtime-file changes. The subsequent assertion/documentation edits do not change application bundles; no second build was run.
- Production Worker smoke checks: homepage and PDF→Word returned 200; all eight cards and primary links/labels remain, with zero demo blocks; PDF engine/worker assets returned 200; no application Worker errors. Miniflare reported one infrastructure-only `Request.cf` metadata-fetch timeout and used its documented placeholder; this is not reported as an application error or hidden as a warning-free test.
- Compiled PDF→Word import graph contains no OCR/Tesseract/Word parser. Homepage's initial static JS graph remains free of heavy processing engines.
- Homepage static JS graph: **428,289 raw / 133,481 separately gzipped bytes**, versus v27 **428,426 / 133,496** (−137 / −15). This is a static graph sum, not observed transfer bytes or performance timing. V26 was 428,201 / 133,458; no significant homepage-JS reduction is claimed.
- Homepage stylesheet: **139,685 raw bytes** versus v27 138,615 (+1,070 for scoped motion/card rules). The separate action stylesheet remains **19,220 bytes**, unchanged; existing compression/download choreography and timing are untouched.
- Final runtime diff is limited to `tools/pdf-editable-docx.ts`, `components/site/hero-phrases.tsx`, `components/site/primitives.tsx` and `app/globals.css`. The only additional source edit is the existing PDF regression assertion. Word→PDF, OCR, PDF Compressor, image-processing algorithms, navigation, search behavior, header, routes, SEO metadata and processing wrappers were not changed.
- Existing v26 CSS scope, deferred menu/search content, deferred DOCX parser, safe route prefetching, heavy-engine separation, touch targets, labels, contrast and resource cleanup remain.

### Release / remaining verification limits

Version **28** was saved from Sites source `a199e7f63f5d66a3d824314c8bc6e4e2c5dc5648` and successfully published at **2026-10-07T19:29:22.417976Z** on the existing public Site. Repository/branch: `aftab-62/Toolfera`, `main`; single release commit message: `Restore v25 document editing and homepage motion`. Its final SHA/push receipt is reported after commit creation, without predicting a self-referential SHA inside this file. No previous commit is rewritten.

**Not verified / not measured:** physical-phone behavior; actual Android/browser motion preference; keyboard/orientation recovery on a phone; interactive Word/WPS deletion/insertion/copy; freshly rendered DOCX pagination and visual page comparison; native saved-file completion; cross-browser/device matrix; Lighthouse, mobile timing and real-user Core Web Vitals. The historical exact `Object.defineProperty` cause remains unreproduced. No broader QA claim is renewed by this targeted pass.


### Version-28 live desktop evidence after publication

Actual production Chrome was checked at **1363 × 936**, `prefers-reduced-motion: reduce = false`, `document.hidden = false`, using `/_next/static/css/index.DmoqekDe.css`.

- Timed observations at 16 / 1,031 / 2,047 / 3,062 / 5,077 ms showed `format JSON` changing to `calculate instantly` and then `merge PDFs`. The search orbit remained running at six seconds and its transform changed at every observation. Two real screenshots three seconds apart also showed `compress PDFs` → `PDF to DOCX` and the moving border light; these were visually inspected.
- Search input focus did not stop rotation (`convert images` → `format JSON`). Opening the Find a tool dialog did not stop it (`PDF to DOCX` → `Word to PDF`); closing restored the trigger. The modal contained zero animated-border elements.
- All eight homepage cards were **301 × 224 px**, with their category, favorite and Open control intact, zero demo blocks, no card horizontal overflow and no page horizontal overflow. Both rows were visually reviewed. Screenshot: `docs/performance/toolfera-v28-cards.jpg`. The static navy header remains unchanged.
- The actual production PDF→Word tool read and converted both preserved PDFs successfully, reporting sixteen source pages and ready DOCX results: BudgetMate **697.1 KB**, alcheMe **17.9 KB**. These are UI output-size labels and source-page counts, not newly rendered Office page counts. The BudgetMate Download Word File link produced a browser download event after its unchanged animation. Its returned file path/copy was not available for workspace readback within the five-second handoff check; a subsequent direct read of that returned path also failed. Browser-produced DOCX XML and native saved-file completion therefore remain **unverified**; current XML assertions above come from the actual local engine outputs, not an invented browser readback.
- No Tool Fera application-origin warning/error was returned in the captured production logs. The returned errors were extension metadata messages with `chrome-extension://` source URLs and were excluded by origin. One read-only browser test referenced an unavailable `performance.now` helper; it was corrected to record elapsed time in the controlling session, without a product change.

No mobile viewport emulation or physical phone was exposed by this browser interface. Normal/reduced mobile motion and compact-card layout remain verified by current-source/compiled-CSS checks only; real-phone visual acceptance, OS preference diagnostics and interactive Word/WPS editing still require manual verification. Documentation/screenshot recording after publication changed no runtime source and required no new build or publication.

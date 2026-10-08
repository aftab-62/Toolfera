# Tool Fera — homepage search-border motion correction

**Current targeted checks: 8 October 2026 (UTC).** Continued published version 31 / saved source `6daaa6b00b63231a7ce16f65fd354b5ef70c70ff`. This is a motion-only correction. The accepted border appearance and all unrelated functionality are unchanged. Older reports below are historical; their static reduced-motion search rule is superseded here.

**Release status: version 32 is published** at https://utilityhub.maftab7806.chatgpt.site/. Deployment `appgdep_6ac73601a6488191bf85ea551bf9436b` succeeded on **8 October 2026 at 06:20:20 UTC**, from checked runtime source `56f4ab8b54970cb628df40c79d6e0f79dc99f8ba`. TypeScript and one production build passed. GitHub target: `aftab-62/Toolfera`, `main`; message `Fix frozen mobile search border animation`. The exact final commit/push receipt is provided in the completion report rather than embedded in its own commit. Final documentation-only receipt updates do not require a second build/publication.

## Confirmed freeze path / limits of diagnosis

- Inspected the new 7.08-second phone recording using one-second samples. The cyan/cobalt ring stays in the same place across the observed frames while the hero changes; this is a real visible freeze, not a new geometry complaint.
- Version 31 explicitly set `:root .hero-search .search-light:before` to **`animation:none!important`** when `prefers-reduced-motion:reduce` matched. That removes the orbit clock. Its recovery handler also returned early for the same preference, so it could not resume a calmer orbit.
- The recording matches this static unrotated-gradient state. **The phone's actual matchMedia/OS setting cannot be queried from a recording**, so that setting is not claimed as directly measured. No width-only animation-disable rule, persisted Full Effects override or JavaScript interval driving the border was found in the current source.
- The known CSS/recovery freeze path is removed. This does not constitute a claim that every possible physical-phone compositor/lifecycle issue was reproduced.

## Exact correction and preserved appearance

- `app/globals.css`: genuine reduced motion now runs the **same** `search-orbit` at **18 seconds** instead of disabling it. Normal desktop/mobile remains **6 seconds**. Other reduced-motion rules are unchanged.
- `components/site/search.tsx`: remove the two motion-preference early exits from orbit recovery. CSS remains responsible for full/slower timing. Recovery batches one RAF only after lifecycle events and calls `play()` only on a stopped orbit, without resetting a running phase.
- Existing visibility/pageshow/focus/resize/visual-viewport and motion-preference listeners remain; cleanup and the hidden-page guard remain. No border interval, per-frame React update, new listener, dependency or animation library was added.
- Gradient colors/stops, square coverage, transforms/keyframes, mask, border thickness, radii, inset, layering, halo and DOM markup are byte-for-byte unchanged. **Hero phrase source and its CSS rules are unchanged.** Normal mobile is not treated as reduced motion.

## Actual checks passed

- Source and compiled CSS at **320, 360, 390, 430, 768 and 1440px**, in both preferences: original geometry, 6s normal / 18s reduced orbit, infinite linear timing and no width-only static rule. These are cascade/timing assertions, **not rendered mobile-browser frames**.
- Current recovery-effect execution with controlled events in both preferences: initial resume, focus/resize burst coalescing, hidden/visible, pageshow, visual-viewport/keyboard-like resize, preference changes, unchanged phase and complete event/frame cleanup. Browsers without `getAnimations` do not throw; non-hero/modal searches remain excluded. This is not physical-phone lifecycle verification.
- **TypeScript passed**, `tsc --noEmit --incremental false`, exit 0.
- **One production build passed**, exit 0; no second build, dependency install or broad audit. The existing Vinext classification informational notice remains.
- Built homepage and current CSS asset requests passed with HTTP 200. Application Worker errors: 0. The emulator's unavailable `Request.cf` metadata warning is infrastructure; the emulator was disposed.
- Exact scope checks found only the two runtime files above changed; **656 other tracked files** were identical before QA updates. PDF → Word, table reconstruction, Word → PDF, OCR, PDF Compressor, calculators, menu, cards, header, routing, metadata, SEO and processing engines were not touched or retested.

## Visual acceptance / remaining verification

- Physical-phone/media-preference query, actual mobile viewport frames, native keyboard, OS background/foreground, Safari and touch-scroll lifecycle remain **UNVERIFIED**. Browser controls do not provide usable responsive sizing; managed preview is unavailable. CSS/event assertions alone are not declared successful mobile visual acceptance.
- **Live published desktop rendered motion observed** in Chrome, viewport reported **1363px**, `prefers-reduced-motion:false`, current CSS `index.BTLfZFSQ.css`. Inspected real screenshot crops at **0.000, 0.925, 1.866 and 3.090 seconds**. Cyan/cobalt placement changes across top, sides and bottom; this is visible rendered movement, not only an animation-name/hash assertion. The accepted rounded ring geometry remains.
- Exercised hero search focus/input (`json` gives JSON Formatter), cleared/escaped, opened and closed Find a tool, scrolled to `scrollY:936` and back to `0`. A subsequent inspected screenshot still shows a changed border phase and the CSS orbit remains 6s/running. Hero phrases visibly change in the captures; their logic was not edited. This is desktop interaction evidence, not a native mobile-keyboard test.
- Captured live console entries after deployment: no Tool Fera application-origin warning/error in the captured checks. Errors that are present are from `chrome-extension://.../content-script.bundle.js`, not the site. No claim is made about untested tools or browsers.
- The browser reports normal motion. The 18s reduced-motion path passed compiled CSS and recovery-effect checks, but could not be visually emulated in this browser. The phone recording does not expose its motion-preference flag.
- No performance scores, Lighthouse or field Core Web Vitals are claimed. No converter or unrelated tool QA was repeated.

---

## Historical version-31 and earlier reports

The dated evidence below applies to its own releases; it does not establish current mobile motion acceptance.

# Tool Fera — shared homepage search-border correction

**Current targeted checks: 8 October 2026 (UTC).** Continued the published version-30 source at `367ca276a30d6cc3344608ba79c54c159bface13`. This pass changes only the homepage search decorative border. The older reports below are historical evidence; their mask-free/edge-strip search treatment is superseded here.

**Release status: version 31 is published** at https://utilityhub.maftab7806.chatgpt.site/. Deployment `appgdep_6ac72dd6dce48191b9af5d8f0ca668f9` succeeded on **8 October 2026 at 05:45:24 UTC**, from checked runtime source `0ca906da2b4ebcd92fd3452d68077fe431080856`. TypeScript and one production build passed. No previous broad QA, converter testing, SEO audit or optimization pass was repeated. GitHub release: `aftab-62/Toolfera`, `main`, message `Match mobile homepage search animation to desktop`. The exact commit SHA and guarded push result are provided in the completion report rather than embedded in the self-referential commit. Final documentation-only updates require no second build or publication.

## Diagnosis and exact scope

- Inspected both supplied recordings across their durations: the 4.70-second desktop recording and 7.95-second mobile recording, using sampled frames and cropped border comparisons. Desktop has a rotating cobalt/cyan conic perimeter. Mobile shows individual flat edge strips fading in sequence, including an extended bright top strip; it is not visually the same effect.
- Current saved code had a concrete second renderer: four `search-light-edge` spans with staggered eight-second `search-soft-light` opacity animations under `prefers-reduced-motion: reduce`. These rectangular strips have no rounded corner path. The mobile recording is consistent with that renderer. **The recording cannot establish the phone's actual matchMedia/OS preference**, so activation of reduced motion on that physical phone is not claimed as proven.
- No width-only alternate gradient, orbit timing or normal-motion static mobile override was found. Normal desktop and mobile already referenced the same six-second conic orbit; the offending alternate visual path was the motion-preference fallback, not a confirmed max-width override.
- The previous hero rule also removed the border mask (`mask:none`, padding 0, z-index 1), relying on the opaque input to conceal the interior. The correction uses an explicit content-box/border-box subtractive mask instead of that paint-order dependency.
- Runtime files changed: **`app/globals.css`** and **`components/site/search.tsx`** only. The latter removes the four decorative edge spans; its search handlers, result portal, focus, keyboard and recovery effects are otherwise byte-identical.

## Shared rendering correction

- One decorative `.search-light` and its existing `::before` conic gradient now render every normal-motion viewport. The original cobalt/cyan gradient stops, **six-second `search-orbit`**, rotation keyframes, square coverage and centered transform are unchanged.
- One shared **3px ring**, **15px input radius**, **18px exterior radius**, negative exterior inset and content-box padding apply at all widths. Standard `mask-composite:exclude` and WebKit `-webkit-mask-composite:xor` remove the center; rounded overflow clips the outer boundary. The light stays on the perimeter instead of inside the input.
- There is no mobile-specific animation, top-only renderer, hover activation, added library, engine preload or JavaScript animation loop. The layer has `pointer-events:none`; the dialog's static search treatment is unchanged.
- Genuine reduced motion uses **the same rounded layer and conic gradient without continuous rotation**. It no longer switches to four straight edge strips. Accessibility preferences are not overridden, and useful hero phrase rotation/fade rules are unchanged.

## Actual checks passed

- Source and compiled production CSS cascade/geometry assertions at **320, 360, 390, 430, 768 and 1440px**, in normal and reduced motion: shared mask, WebKit/standard compositing, radius, padding/inset, full normal orbit, no edge spans/keyframes and static shared reduced-motion ring. These are responsive rule/geometry assertions, **not rendered mobile-browser screenshots**.
- Controlled current search-effect execution: paused-orbit recovery; focus/resize bursts without phase resets; hidden/visible, pageshow and visual-viewport/keyboard-like resize recovery; live motion-preference changes; non-hero/modal exclusion; event/frame cleanup. This is a hook/event harness, not a real OS keyboard or physical phone.
- **TypeScript:** `tsc --noEmit --incremental false`, exit 0.
- **One production build:** exit 0. No second build, installation or dependency change. The existing Vinext route-classification information notice remains.
- Built Worker homepage: HTTP 200 with one decorative ring and no edge spans. Both built CSS files returned 200 and matched disk output. Application Worker errors: 0; the emulator's unavailable `Request.cf` metadata warning is infrastructure, not a claimed browser result. Emulator disposed after the check.
- Built raw CSS: **159,258 → 159,370 bytes (+112 bytes)** compared with the measured version-30 output. Main CSS is `index.Dg17Vyua.css` (140,150 bytes); unchanged action CSS is 19,220 bytes. No homepage-JS reduction, Lighthouse score, mobile timing or CWV result is inferred.
- Exact file-scope assertions and diff checks preserve all other saved files, including PDF → Word/table reconstruction, Word → PDF, OCR, calculators, processing engines, hero component, header, routes, SEO, card cleanup, catalog loading and performance architecture.

## Published desktop visual checks

- Live Chrome reported **1363px** width, `prefers-reduced-motion: reduce = false`, and current `/_next/static/css/index.Dg17Vyua.css`. The ring has zero edge children, content-box/border-box clip and origin, `mask-composite:exclude`, 3px padding, -3px inset and 18px radius. Input: 643.23 × 62px; outer ring: 649.23 × 68px. Desktop horizontal overflow: false.
- Visually inspected six successive actual-browser screenshots spanning **0.45–2.09 seconds** and a further screenshot **54.51 seconds** after capture started. Border highlights visibly changed along the rounded perimeter; this is rendered desktop evidence, not merely a keyframe-name or image-hash check.
- Filling homepage search with `pdf` produced real results. Clearing it, opening the header search and closing it left the homepage `search-orbit` running with changed geometry. Hero phrases also changed in the observed session. No hero source change was made.
- Captured recent warning/error batch after publication: **14 entries, all extension-origin; 0 application-origin entries**. This is limited to the captured desktop session, not a full-site error certification.
- Actual browser frames were saved under `toolfera-v31-perimeter-1791438403522-*`. They are desktop evidence; there are no new mobile-browser screenshots.

## Visual verification limits

- Available live Chrome before the correction reported 1363px width, normal motion (`reduce=false`) and the old mask-free rule. Browser controls do not expose usable mobile viewport emulation, and managed preview is unavailable in this environment.
- **Physical-phone/mobile-browser geometry, mobile overflow, touch keyboard behavior, Safari rendering and reduced-motion preference on the supplied phone remain unverified.** The CSS matrix and moving keyframe alone are not declared visual mobile acceptance.
- Native publication succeeded and current live desktop CSS/geometry was verified. No unperformed mobile visual acceptance is claimed.
- No converter changes or new Word/WPS/file-save verification. No Lighthouse, lab performance score, physical-phone performance, real-user Core Web Vitals or reproduced historical `Object.defineProperty` diagnosis.

---

## Historical version-30 and earlier reports

These dated reports describe their own releases. Their search-border appearance claims do not establish acceptance of this current correction.

# Tool Fera — mobile search, instant menu and empty calculator correction

**Current targeted checks: 8 October 2026 (UTC).** Continued the saved/published version-29 source `e3f0a68731b870b554c81d18959fd74875d81fc8`; the previous PDF → Word table/text correction was not repeated or modified. This section is the current UX report. The retained older reports below are dated historical evidence, not current calculator-default or device acceptance claims.

**Release status: version 30 is published** at https://utilityhub.maftab7806.chatgpt.site/. Deployment `appgdep_6ac72617966481918bdf14e5e5b49a17` succeeded on **8 October 2026 at 05:12:22 UTC**, from tested runtime source `540801645327d78c69fee9d9b3600feca898f71a`. The targeted implementation, TypeScript, one production build and representative live desktop checks passed. Repository/branch: `aftab-62/Toolfera`, `main`; one commit message: `Polish mobile search, instant tool menu and calculator defaults`. Its exact GitHub commit/push receipt is reported separately after the guarded branch update. Final documentation-only updates require no second build or publication.

## Homepage search perimeter — corrected; mobile visual acceptance limited

- Inspected the supplied real-phone video at 0/3/6 seconds and the menu screenshot. The light and hero phrase already move in that recording. This task corrects the visible perimeter treatment rather than claiming to fix a new stopped timer.
- The old search rules independently specified the input/light/halo radii and offsets; its extra outer halo depended on hover/focus, so a normal touch-only idle state did not receive the same complete treatment as desktop hover. The actual phone rendering cannot be diagnosed fully from a recording alone.
- `app/globals.css` now defines one hero-search geometry at all sizes: **15px opaque input radius**, **3px external animated ring**, **18px outer radius**, and a matching always-visible subtle outer halo. The animated light sits behind the opaque input, so it paints the exterior perimeter instead of shining through the input. No separate mobile effect or new animation was introduced.
- The v25 six-second cobalt/cyan conic `search-orbit`, keyframes and current mask-free rendering remain. The genuine reduced-motion eight-second gentle edge fallback remains. Header and modal search are untouched; the modal still has its static treatment.
- Compiled current production CSS passed at **320, 360, 375, 390, 412, 430, 768, 1024 and 1440px**: identical ring geometry, input layering, no compositing mask, no hover requirement for the halo, full normal orbit, and separate reduced-motion fallback. These are compiled-rule checks, not device screenshots or a claim of actual mobile overflow measurement.
- Current search recovery-effect checks passed for focus/resize bursts, hidden/visible recovery, pageshow, visual-viewport/keyboard-like resize, live motion preference changes and cleanup. These controlled hook/event checks do not simulate an actual phone keyboard or OS lifecycle.
- `components/site/search.tsx` and `components/site/hero-phrases.tsx` are byte-identical to version 29. The hero rotation/recovery fix and search interaction/ranking remain preserved.

## Lightweight menu/search — immediate catalog

- `components/site/header-overlays.tsx` previously lazy-imported the small mobile navigation and search components on first opening, with a Suspense fallback saying **Preparing tools…**. That fallback caused the screenshot's empty waiting area.
- Both lightweight components now import with the existing shared header shell and use the single existing `lib/tool-definitions.ts` catalog, which desktop navigation already uses. The fallback and unused `.overlay-loading` CSS were removed. Dialog open/close, focus return, keyboard support and navigation links were not redesigned.
- Controlled first-render checks found all **7 category groups and 57 navigation/resource links**, plus immediate compact-search combobox/results. A `word to pdf` query selected Word to PDF first. These counts describe the rendered menu and are not a new route/tool-count audit.
- The compiled header has **no first-opening dynamic menu/search import** and no Preparing tools string. Its static import graph contains **no PDF, OCR, DOCX parser or image processing engine**. Heavy tool interfaces/engines retain their existing lazy loading. No duplicate catalog source or preload request was created.
- Measured raw compiled header static graph: **416,464 → 422,962 bytes (+6,498)**, reflecting early availability of the lightweight catalog/search UI. Header chunk itself: **14,646 → 14,463 bytes**. These graphs include shared framework dependencies and are not complete homepage download measurements. CSS total: **159,027 → 159,258 bytes (+231)**. No new dependency, animation loop, paid API or server processing.

## Calculators — clean initial/reset state, unchanged engines

The sample inputs came from hardcoded React initial state, including GPA/CGPA/merit rows; Age also populated its comparison date in an effect. There was no calculator-input localStorage persistence to delete. Currency, distance/efficiency units, pay period, percentage mode and component names remain sensible option defaults. Placeholder examples do not enter state or produce results.

Changed only calculator UI components:

| Component | Tools corrected |
|---|---|
| `components/site/math-tools.tsx` | Percentage, Fuel Cost, GPA, CGPA |
| `components/site/additional-calculators.tsx` | Marks, Attendance, University Merit, Loan / EMI, Savings, Profit, Salary |
| `components/site/everyday-calculators.tsx` | Age, Discount |

- All **13 current calculator variants** start with blank actual numeric/date values and a neutral prompt, not a sample result or initial validation error. Existing automatic calculation runs only after sufficient inputs exist. Empty unused GPA/CGPA rows are ignored; partially completed rows do not create a sample average.
- Reset clears calculation values/results; new course/semester/merit rows also start empty. Reset controls were added where the previous UI had none, using the existing ResetButton. Age requires two user-chosen dates and resets both.
- Copy result appears only after a real valid result in the UIs that already support copying. Empty, partial and invalid inputs are not reported as successful calculations.
- Controlled current-component event checks passed for fresh state, first-input retention, genuine calculation and Reset on all 13 variants. Also checked zero input, Discount's existing range validation and new empty rows. The controls were exercised with actual existing calculation functions, not copied/reimplemented formulas.
- Sample test inputs produced: Percentage 15% of 200 = 30; Fuel 100km at 10km/L and USD2/L = USD20; GPA/CGPA equal three-credit grades 4/2 = 3.00; Marks 80/100 = 80%; Attendance 30/40 = 75%; zero-interest 1,200/12 loan = USD100/month; zero-return Savings 1,000 + 100/month for one year = USD2,200; Profit 1,000−700 = USD300; Salary 25×40×52 = USD52,000/year; Merit three 50/100 components weighted 10/40/50 = 50%; Discount 100 at 20% = 80; Age 2000-01-01 to 2020-01-01 = 20 years. These are verification inputs only, not page defaults.
- The final production Worker rendered homepage and all 13 calculator pages with HTTP **200**, empty numeric/date input attributes and no precomputed result element. This is current production SSR evidence, not a browser edit session.

## Scope / checks

- Runtime diff: only the stylesheet, header overlay loading and the three calculator UI components above. **120 other tracked runtime files** under tools/components/site/lib/app were byte-identical to the saved version-29 baseline.
- **PDF → Word, table reconstruction, native text editing, graphics, Word → PDF, OCR, PDF Compressor, image algorithms and all calculation engines were untouched.** No converter-quality testing or regeneration was repeated.
- Hero implementation, static navy header, tool cards, routes, metadata, SEO, legal/resource content, safe prefetch, engine separation and other version-26 performance work remain.
- **TypeScript passed:** `tsc --noEmit --incremental false`, exit 0.
- **One production build passed**, exit 0. No repeat build. Afterward only an extra trailing CSS blank line was trimmed; stylesheet semantics and the checked compiled rules are unchanged. Existing proxy-environment warning and Vinext route-classification informational notice remain.
- Final whitespace diff check passed. Targeted Worker application errors: **0**; Miniflare warned about unavailable live `Request.cf` metadata and used its default placeholder, an emulator/infrastructure warning. No preview server/watcher remains; Worker emulation was disposed.
- No full performance, route/404, SEO, converter or unrelated tool audit was repeated.

## Remaining verification limits

- **No physical-phone, mobile-browser viewport, iOS/Safari or native keyboard test.** Mobile perimeter and first-menu feel still require the user's actual phone check. Compiled rules/controlled state tests are explicitly not visual acceptance.
- No new Microsoft Word/WPS editing or converter pagination/quality certification; those converters were unchanged.
- No Lighthouse, performance score, mobile timing, real-user Core Web Vitals or native saved-file completion measurement. Exact historical `Object.defineProperty` root cause remains unreproduced.
- Live production desktop results, if obtained after publication, will be recorded separately below. No unperformed live check is claimed here.

## Version-30 live desktop checks after publication

Actual Chrome on the published Site reported **1363 × 936px**, `prefers-reduced-motion: reduce = false` and `document.hidden = false`, using `/_next/static/css/index.nhFKNUxu.css`.

- The homepage light was visually observed in changing positions around the exterior perimeter in separate screenshots, with changing rotation matrices. The input bounds were 643.23 × 62px and the animated bounds 649.23 × 68px, confirming the 3px exterior ring on each edge; outer radius was 18px and the subtle halo opacity 1. Desktop horizontal overflow was false.
- Hero phrases visibly changed during the checks, including resize images, Word to PDF and calculate instantly. Motion remained six-second continuous search-orbit after filling homepage search and after header search opening/closing. No claim of physical-phone recovery is made.
- First and repeat header-search openings showed the combobox and populated results directly, without Preparing tools. A word-to-pdf query returned Word to PDF ahead of PDF to Word. This is observed desktop search, not a live mobile-drawer test.
- Fresh live Percentage, Loan / EMI, Discount and GPA pages showed blank numeric controls and neutral results. Entered values produced respectively **30**, **USD100/month**, **80.00**, and **3.00**. Each Reset returned all numeric controls to empty and removed the numeric result. Adding an empty GPA course preserved the entered average; Reset restored three empty rows. These cover all three changed calculator UI modules; other variants have the controlled-component and production-SSR evidence above.
- The captured warning/error batch contained **70 entries**, all with `chrome-extension://` source URLs. There were **zero captured application-origin warning/error entries**. This applies only to this targeted session.
- A screenshot of the published homepage was saved as `toolfera-v30-ux-1791436605537.jpg`. It is visual desktop evidence, not a mobile screenshot or performance measurement.

---

## Historical version-29 and earlier evidence

The reports below apply to their named releases and fixtures. Their calculator sample/default statements are superseded by this correction. They do not establish current phone acceptance.

# Tool Fera — PDF table and homepage search correction

Current targeted verification: **8 October 2026, Asia/Karachi (7 October UTC)**. Continued saved version 28 at source `87147f738b2abe0a62642c5d404e7091058814d4`. This report adds only results actually obtained for this correction. Earlier release evidence below is historical and is not a current full-platform certification.

Release status: **version 29 is published** at https://utilityhub.maftab7806.chatgpt.site/. Deployment `appgdep_6ac6af173514819197d70326a59ca1db` succeeded on **7 October 2026 at 20:44:28 UTC**, using the tested runtime source `1113173d5543413ef14b8093752cef90441a2f58`. No second production build or republish was performed for the final documentation update. The correction is prepared as one GitHub commit on `aftab-62/Toolfera`, `main`, with message `Fix PDF table reconstruction and restore full mobile search motion`; the exact commit/push receipt is reported separately after the guarded branch update.

## PDF → Word ordinary text — preserved and structurally verified

- The run writer and ordinary paragraph reconstruction were not changed. Direct main-body paragraph XML is identical to the starting converter output, except the cost-summary paragraph is now part of its actual table.
- The generated document has **390 genuine Word text elements**, **zero fixed-width `w:fitText` runs**, **zero coordinate tabs**, **zero text boxes**, no run character-spacing properties, and no distributed alignment. Normal editable paragraph/run behavior from version 28 is preserved.
- Native PDF extraction, PDF.js loading, scanned-PDF OCR guidance, the UI wrapper and localized-graphic extraction are unchanged. The native conversion test created **zero OCR workers**; the production converter import graph contains no OCR/Tesseract or DOCX-parser dependency.
- This is XML/native-engine verification, not a new Microsoft Word/WPS editing session.

## PDF → Word tables — verified with the supplied source and current DOCX

Inspected the provided `BudgetMate_LaTeX_latets (4)(3).pdf` and `BudgetMate_LaTeX_latets (4)(1).docx`, including their rendered pages. The current attachment has **13 source PDF pages**, not the 16 pages of the older fixture. The supplied DOCX and corrected DOCX each rendered to **13 pages** in the bundled LibreOffice renderer. The new DOCX also has **13 source-page sections**.

The unruled-table detector used a global previous line and a row-gap threshold greater than this PDF's approximately 17.3-point inter-row spacing. Wrapped lines are approximately 14.4 points apart. Plain first-column labels failed the old bold/numeric/gap heuristic, so four tables became one giant body row. The packer then used different column-wide leading estimates, causing the vertical drift and wrong pairings.

`tools/pdf-editable-layout.ts` now estimates wrapped leading within individual columns, checks first-column row starts against that cadence, groups wrapped lines within each cell, and uses nearby horizontal rules where available. It also keeps the short ruled total band inside the cost table. No document-specific label is hardcoded. `tools/pdf-editable-docx.ts` only adds support for source rules around that internal summary row; its ordinary-text writer is unchanged.

Counts include the header row; Estimated Project Cost also includes its source total row.

| Table | Supplied DOCX rows | Corrected DOCX rows | Columns |
|---|---:|---:|---:|
| Target Audience | 2 | 5 | 2 |
| Hardware and Software Specifications | 6 | 6 | 2 |
| Estimated Project Cost | 2 | 9 | 3 |
| Technology Stack | 2 | 9 | 3 |
| Project Milestones | 11 | 11 | 2 |
| Evaluation Plan | 2 | 6 | 2 |
| Work Division | 4 | 4 | 2 |

- **7 real Word tables, 50 `w:tr` rows and 118 `w:tc` cells**. Each logical Technology Stack row has its own cells: Backend API remains paired with FastAPI/Laravel, Database with PostgreSQL, OCR with Tesseract/PaddleOCR; all eight technology pairs were asserted.
- Target Audience's four records, all seven cost items plus total, and all five Evaluation Plan records were asserted separately. Wrapped labels/technology/justification stay in the corresponding row.
- The three already-correct tables have **identical table XML** to the starting converter output. Column boundaries are retained.
- The university logo, architecture diagram and Gantt remain the same **three localized images**: geometry and image-byte hashes match the baseline conversion. No whole-page image, table rasterization or OCR was introduced.
- Visually compared all five source/converted pages containing the seven tables: pages 8, 10, 11, 12 and 13. The corrected render resolves the mismatched row pairings and clipped Evaluation Plan text. Some pre-existing font/cell alignment and spacing differences from the PDF remain; pixel-perfect layout is not claimed.

## Homepage search motion — implemented; mobile visuals partially verified

- The normal saved-source branch already selected the full six-second v25 cobalt/cyan `search-orbit`; no viewport-specific static branch was found. The exact physical-phone failure and that phone's motion preference were **not reproduced**, so reduced motion is not asserted as its cause.
- Kept v25's conic gradient, colors, rotation keyframes and six-second timing. In `app/globals.css`, the homepage light now paints beneath an opaque input instead of compositing a moving pseudo-element through an XOR/exclude mask. This removes that masked rendering dependency while preserving the full perimeter effect. Only the hero search is affected.
- `components/site/search.tsx` resumes a browser-paused CSS orbit on page visibility/pageshow/focus and viewport/keyboard resize. At most one recovery frame is queued, focus does not restart a running animation's phase, and all listeners/frames are cleaned up. There is no per-frame React state, continuous JavaScript animation loop or new dependency.
- Compiled production CSS was checked at **320, 360, 375, 390, 412, 430, 768, 1024, 1280 and 1440 pixels**. Every normal-motion width retains the **full `search-orbit 6s linear infinite`**; no hover/touch is required. Genuine reduced-motion mode disables the full orbit and retains the existing gentle eight-second edge fallback.
- Recovery-effect tests passed for paused animation, focus/resize bursts, hidden/visible recovery, pageshow, keyboard-like visualViewport resize, live motion preference changes, full cleanup and exclusion of modal/non-hero searches.
- The header remains static navy; the Find a tool dialog remains unanimated. Search ranking, result placement, keyboard navigation and routes were not changed.
- These width checks are **compiled-rule checks**, and the lifecycle checks use controlled hooks/events. They are not physical-phone, mobile browser, keyboard-device or Safari/iOS visual acceptance.
- On the published version 29, a real desktop browser at **1363 pixels** reported `prefers-reduced-motion: false`. Samples at approximately **0, 1, 2, 3 and 5 seconds** retained `search-orbit`, `6s`, `running`, no mask and no horizontal overflow, with changing rotation matrices. Actual saved 0/1/5-second screenshots were compared: the light visibly travels around the perimeter, and the hero changes from PDF to DOCX to Word to PDF to resize images. Motion also continued while typing a PDF-to-Word query and after opening/closing the header search dialog.
- The live PDF-to-Word workspace read the supplied **13-page** BudgetMate PDF and completed native conversion, offering a **630.6 KB DOCX**. This confirms published engine loading/execution; its native saved-file download was not tested. Captured warning/error logs contained **no application-origin entry**; 47 captured entries belonged to the browser extension and were identified by their `chrome-extension://` source URLs. This is a targeted captured-session result, not a universal console certification.

## Hero / scope safety

`components/site/hero-phrases.tsx` is byte-identical to version 28. Its independent 2.6-second normal clock and 5.2-second reduced-motion updates are preserved; this correction does not reintroduce a static mobile branch. No broad hero retest was repeated because its source did not change; the published desktop samples above additionally show its phrase changing.

Runtime changes are limited to `tools/pdf-editable-layout.ts`, the table-border portion of `tools/pdf-editable-docx.ts`, `components/site/search.tsx` and the homepage-light rules in `app/globals.css`. Word → PDF/OCR/PDF Compressor/image algorithms, header, navigation, tool cards, branding, SEO, search intent, routes, metadata and performance architecture are unchanged. The shared `wordBaseline` export used by the Word renderer is unchanged.

## Checks and measured build evidence

- TypeScript: **passed**, `tsc --noEmit --incremental false`, exit 0.
- **One final production build passed**, exit 0. No further build was run after documentation-only updates. The existing Vinext route-classification informational notice remains.
- Targeted production Worker requests: homepage and PDF → Word each returned **200**; the new native converter chunk and required PDF.js worker asset returned **200**; captured application Worker errors: **0**. The emulator warned that live `Request.cf` metadata was unavailable and used a placeholder; this is an infrastructure warning, not an application-origin error.
- Diff whitespace check passed. No new dependencies, remote processing, paid API, database or authentication.
- Built main CSS: **139,807 bytes**, versus the recorded version-28 baseline **139,685** (**+122**); action CSS remains **19,220 bytes**. The search recovery chunk is **6,879 raw / 2,779 separately gzipped bytes**, versus recorded v28 **5,889 / 2,529** (**+990 raw / +250 gzip**) for the required lifecycle handling.
- Framework browser-entry static closure: **387,950 raw / 116,761 separately gzipped bytes** across **4 chunks**, with no heavy engines. This excludes route client-reference loads and is **not the complete homepage initial graph**, so it is not comparable with the recorded v28 homepage graph of 428,289 / 133,481. No homepage-JS reduction is claimed. The new search effect adds no heavy-engine import; existing engine lazy loading is untouched.
- The route count, 404 audit, SEO audit, full performance pass and unrelated tool QA were not repeated. No preview server, watcher or document renderer remains running; targeted Worker emulation was disposed.

## Unverified / remaining limitations

- **No physical-phone or mobile-browser visual verification**. The exact phone-side search freeze remains unproven until the user tests this publication with normal motion settings.
- **No Microsoft Word/WPS UI editing test**. Real editable cells/text and rendered pagination were verified structurally and through LibreOffice, not by a native Office selection/edit session.
- No universal guarantee for every PDF table: cells with indistinguishable row gaps, complex merged cells or missing geometry can remain ambiguous. The supplied BudgetMate table cases passed.
- No native saved-file completion verification, Lighthouse, lab performance scores or real-user Core Web Vitals measurements. No such result is estimated.

---

## Historical version-26–28 release evidence

The following retained sections describe earlier dated work. Their counts and tests apply to those fixtures/releases; they do not replace the new 13-page BudgetMate table regression above or establish current physical-phone acceptance.

## Tool Fera — targeted correction and retained release evidence

Verified source/build: **7 October 2026 (UTC)**. Continued the existing saved **v25** project on `main`; no restart, redesign, domain migration or converter rewrite. This is the retained version-26 optimization report; the current correction is documented at the end. Earlier conversion, network and resource reports remain historical evidence for unchanged areas, not fresh certification here.

Scope: performance, normal accessibility improvements and application-origin best practices. The previously saved metadata/content changes were preserved. No further SEO research or implementation was performed during this resumed pass.

### Completed / verified

#### Measured build changes

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

#### Loading and navigation

- Native document links and existing navigation structure remain intact. Destination HTML and tool shell are server-rendered; heavy processing does not gate shell rendering.
- Menu and dialog search content use lazy imports when their dialogs open. The existing dialog shell/focus restoration remains; deferred search receives focus after it mounts. Homepage search remains immediately present, so its code stays in the homepage graph.
- The DOCX parser is dynamically imported after a valid Word file is read, with an abort check before parsing. No parser/converter algorithms changed.
- PDF.js/PDF conversion, OCR, DOCX rendering, image processing and QR generation retain action/route loading boundaries. The built homepage graph contains no heavy processing engine or tool UI.
- Optional native Speculation Rules prefetch destination HTML on moderate navigation intent in supporting browsers. No prerendering or engine prefetch was introduced. Unsupported browsers retain ordinary links. No navigation-time gain was measured.

#### Accessibility and stability

- Native `prefers-reduced-motion` rules now apply without the old forced `full` attribute/provider bypass. Normal-motion hero, search and action animation behavior/timing remains. Reduced motion gets static decorative hero/search behavior and softer action feedback with truthful progress and download synchronization.
- Favorites cannot be toggled before saved localStorage identifiers finish loading. Existing recent/history validation, bounded storage and cleanup remain.
- Coarse-pointer targets were increased to at least 44 CSS px for selected small controls, including favorites, row removal, slider thumbs, saved-state controls and fallback downloads. No keyboard-navigation redesign was introduced.
- Muted saved-row and PDF-file-list text was darkened. Against white, the checked colors improved from approximately 3.86:1 / 3.99:1 to 5.66:1. This is a spot check, not a whole-site contrast certification.
- Shared slider thumbs now receive their label association. The missing association was caught in the final rendered-HTML check; image quality, password length and PDF image quality routes passed the targeted correction check.
- 22 form/slider controls in the representative rendered HTML had valid label associations. Hidden framework form-bridge inputs were excluded. Compiled CSS includes native reduced-motion and coarse-pointer rules; no forced-full selector remains.
- Existing SSR header geometry, reserved hero dimensions, hydration control guard, worker cleanup, Blob URL cancellation, status/error announcements and focus styles were preserved.

#### Actual tests and their boundaries

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

### Partially verified

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

### Not measured

Lighthouse scores, real-user field Core Web Vitals, LCP, INP, CLS, mobile frame rate/battery impact, network-waterfall timings, hydration cost and click-to-route latency. Lighthouse/local Chrome infrastructure was unavailable during the established baseline; it was not repeatedly attempted. No scores or timings were estimated. A browser UI smoke check does not establish these metrics.

### Remaining limitations

- No physical-phone acceptance. Mobile viewport/device performance and OS reduced-motion visuals require manual/real-device checks; compiled rules are not visual proof.
- Exact historical `Object.defineProperty` failure was not reproduced. This pass does not claim to identify that old error's root cause.
- Native saved-file completion and Microsoft Word/WPS clipboard/editing GUI behavior are not verified here.
- Full PDF/Word/OCR layout-quality testing was intentionally not repeated because conversion/recognition algorithms did not change.
- Historical reports, fixtures and screenshots are not current performance claims. Root `QA.md` and `docs/QA.md` contain this same report. The old root reports were archived before replacement.
- Live deployment/browser and GitHub receipts are reported separately after the release action; this document certifies the tested source/build before publication.

Dedicated competitive SEO, keyword strategy, tool-page content expansion, internal-link strategy and SEO blog/content work were intentionally deferred to the next dedicated SEO pass.

### Main changed files

Performance: `app/globals.css`, `app/layout.tsx`, `components/site/header-overlays.tsx`, new `mobile-navigation.tsx` and `route-prefetch.tsx`, `word-pdf-tool.tsx`, `scripts/measure-client.mjs`.

Accessibility/stability: `hero-phrases.tsx`, `tool-motion.css`, `search.tsx`, `saved-tools-store.tsx`, `components/ui/slider.tsx`, `.gitignore`; deleted `motion-preference.tsx`, `motion-preference.css`, `tsconfig.tsbuildinfo`.

Previously saved SEO changes retained: `lib/tool-seo.ts`, `lib/catalog.ts`, `lib/seo.tsx`, category/tool route metadata, `page-layouts.tsx`, `primitives.tsx`. They were not extended during this resume.

Build/measurement summary: `docs/performance/measurements-2026-10-07.json`. Reproducible shared checks: `scripts/verify-tool-engines.mjs`, `scripts/verify-motion-reliability.mjs`, `scripts/measure-client.mjs`.

### Published version 26 — subsequent desktop smoke verification

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


### Historical version-27 PDF → Word / hero / homepage continuation — 7 October 2026

This pass changed only `components/site/hero-phrases.tsx` and homepage-scoped rules in `app/globals.css`. No processing algorithm, Word → PDF/OCR tool, routing, SEO, navigation, download choreography, header or unrelated card/section implementation changed. The current static navy/gradient header remains intact.

#### PDF → Word: saved version-25 behavior retained, no converter rollback required

Saved v25 is source commit `2872881895b20380bd296a3248d3de42bb3470f5`. The PDF-to-Word component, native extraction/layout/DOCX packer, file intake, lazy tool interface, action/progress/download wrappers and package/lockfile were compared against it: all 13 checked files are byte-identical. No PDF.js public worker/font/CMap/WASM asset changed from v25. Route/layout differences introduced in v26 concern preserved metadata/help content, not converter execution. No PDF-to-Word loading or wrapper regression was reproduced.

The existing `scripts/verify-document-flow.mjs` was reused in its **pdf-word stage only**, with the preserved BudgetMate and alcheMe PDFs; no new PDF acceptance suite was created. All generated DOCX XML/media parts match the saved v25 output parts byte-for-byte. Native extraction, ordinary Word main-body paragraphs/runs/headings, usable empty paragraphs, real body tables and localized graphics remain unchanged. Zero OCR worker calls and zero text boxes were observed in the targeted engine checks.

| Fixture | Source PDF pages | DOCX page sections | Main-body text elements | Editable body tables | Localized images | Text boxes |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| BudgetMate | 16 | 16 | 500 | 9 | 3 | 0 |
| alcheMe | 16 | 16 | 4,532 | 1 | 0 | 0 |

The preserved graphics/media and layout matched the existing regression baseline; temporary canvases were released. Scanned PDFs retain the separate OCR guidance. A real Chrome production session on v26 also read and converted both files successfully: BudgetMate reached a 16-page / 705.5 KB result and alcheMe a 16-page / 64.2 KB result. A BudgetMate browser download event was observed. Its returned file was not available for workspace readback, so native saved-file completion and browser-produced DOCX XML readback are **not verified**. Editable XML counts above come from the current engine's local fixture outputs. No new Microsoft Word/WPS selection test or DOCX page rendering was performed; 16 sections are not reported as a new rendered page-count measurement.

#### Hero: changing text remains useful under reduced motion

The supplied mobile video was inspected at 1, 5 and 9 seconds: it shows `merge PDFs.` unchanged, including after search focus. The old v26 source explicitly skipped every timer update whenever `prefers-reduced-motion: reduce` matched. This is a confirmed permanent-freeze code path; the phone's actual OS/browser preference cannot be read from the video and is **not determined**.

The hero now has one self-rearming timeout: 2,600 ms for normal motion and 5,200 ms for reduced motion. Reduced-motion CSS still suppresses movement; only the useful text changes more slowly. Visibility, pagehide/pageshow, window focus and motion-preference changes rearm/clean up the clock. It does not depend on viewport size, hover, pointer movement or search focus, and no header canvas was restored.

The targeted controlled hook/timer harness executed the current component source and passed all nine phrase updates, normal/reduced timing, hidden/visible recovery, pagehide/pageshow recovery, focus recovery, live preference changes, resize/orientation independence, a single active timeout and cleanup/remount checks. This is **logic evidence**, not physical-phone visual acceptance.

#### Homepage examples: one card surface

All eight previews in “The tools you’ll reach for.” use the main outer card surface. The secondary background, enclosing borders, rounded corners, inset horizontal padding and minimum-height panel treatment were removed through `.popular-section` rules. A quiet top separator and typography retain the examples. Image Compressor, PDF Merger, Percentage Calculator, Word Counter, PDF to PNG/JPG, JSON Formatter, QR Code Generator and Fuel Cost Calculator retain their example/result information, main card, icon, name, description, favorites and Open tool links. Small format labels are retained.

The compiled CSS checks retain one column at 320/360 px, two at 375/390/430 px, three at 768/1024 px, and four at 1280/1440 px. Flexible example rows can wrap. These are stylesheet checks; mobile/tablet visual layout, clipping/overflow and physical-device behavior were **not independently observed** in this environment because viewport emulation is not exposed.

#### Targeted checks and release preparation

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


#### Version-27 live desktop verification after publication

The actual published homepage was checked in Chrome at **1363 × 936**, with `prefers-reduced-motion: reduce` **false**. The new stylesheet `/_next/static/css/index.Jy-Cecy_.css` was loaded. The hero visibly changed from **resize images → compress images → convert images** at approximately 0 / 2.718 / 5.431 seconds, then to **format JSON** after search focus. This is observed desktop normal-motion behavior, not a claim about the physical phone.

All eight homepage preview areas had transparent computed backgrounds, zero left/right/bottom border widths, a 1 px top separator, zero panel minimum height and no horizontal preview overflow. Outer cards remained 301 px wide, with balanced 348.73 px first-row / 328.59 px second-row heights. Main cards, labels, icons, stars and Open tool links were present and visually reviewed. Page-level horizontal overflow was false. The static navy header remained readable and unchanged. Screenshot: `docs/performance/toolfera-v27-cards-final.jpg`.

No Tool Fera application-origin errors/warnings appeared in the captured post-publication logs; the returned errors had extension URLs. Mobile widths remain compiled-CSS checks, not an actual mobile-browser/phone visual test. No additional production build was needed after documentation/screenshot recording.


### Current targeted correction — native Word editing, homepage motion and clean cards

**Date:** 7 October 2026 (UTC). Continued saved version 27. No restart, full performance/SEO/route audit, unrelated tool QA, new conversion mode or header redesign was performed.

#### PDF → Word — completed implementation; Office interaction partially verified

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

#### Homepage motion — completed source correction; phone acceptance unverified

`components/site/hero-phrases.tsx` restores v25's independent interval/deadline clock. V27's timeout was restarted by every focus/resume event; a targeted reproduction with ten focus events over ten seconds produced **zero** changes before this correction and **three** with the corrected source. Recovery events now check the clock without postponing its deadline. One interval exists, with full listener/interval cleanup; hidden pages skip updates and foreground/pageshow recovery advances at most one phrase, without a catch-up burst. No hover, touch or mobile breakpoint is required.

Normal updates use a 2,600 ms period. Reduced-motion updates use 5,200 ms, with a mild opacity-only transition. The component no longer requires the newer MediaQueryList event API to initialize. Controlled hook/clock tests passed the nine-phrase cycle, focus stress, hidden/visible and pagehide/pageshow recovery, resize/orientation/pointer independence, live preference changes, legacy media-query API compatibility, cleanup and remount.

`app/globals.css` preserves v25's **six-second cobalt/cyan orbit for normal motion**. The confirmed static search-border path under reduced motion had replaced v25's four-edge fallback with a stationary gradient. The gentle eight-second edge-opacity sequence is restored only inside `.hero-search`; it is slower, without spatial movement, and does not reintroduce the global Full Effects accessibility override. The Find a tool modal remains static. The current static navy/gradient header is untouched.

The supplied phone recording cannot reveal its actual `prefers-reduced-motion`/visibility/timer state. The specific focus-starvation and reduced-motion static paths are reproduced/removed in source checks; this is **not proof of the exact runtime state on the user's phone**. Browser/device visual results, if obtained, are recorded separately below.

#### Homepage cards — demo content removed completely

`components/site/primitives.tsx` no longer imports/renders `ToolPreview`. Non-standard card variants are used only by the homepage popular section. All example panels **and all their content** are removed for Image Compressor, PDF Merger, Percentage Calculator, Word Counter, PDF to PNG/JPG, JSON Formatter, QR Code Generator and Fuel Cost Calculator. No replacement example, separator, graphic or sample result was added.

All eight outer cards retain icon, category, favorite control, title, short description and Open tool link. Homepage-only CSS switches the former featured example grid to the same natural column flow, reduces the desktop minimum height to 222 px and removes that minimum on mobile. Category labels remain visible on mobile. Compiled cascade checks passed at 320, 360, 375, 390, 430, 768, 1024, 1280 and 1440 px: one/two/three/four grid columns follow the existing breakpoints, featured content uses flex flow, and normal/reduced search animations are present. These are **compiled CSS checks**, not mobile visual overflow measurements.

#### Checks, scope and measured build evidence

- TypeScript: **passed**, `tsc --noEmit --incremental false`.
- Production build: **passed once**, after the four runtime-file changes. The subsequent assertion/documentation edits do not change application bundles; no second build was run.
- Production Worker smoke checks: homepage and PDF→Word returned 200; all eight cards and primary links/labels remain, with zero demo blocks; PDF engine/worker assets returned 200; no application Worker errors. Miniflare reported one infrastructure-only `Request.cf` metadata-fetch timeout and used its documented placeholder; this is not reported as an application error or hidden as a warning-free test.
- Compiled PDF→Word import graph contains no OCR/Tesseract/Word parser. Homepage's initial static JS graph remains free of heavy processing engines.
- Homepage static JS graph: **428,289 raw / 133,481 separately gzipped bytes**, versus v27 **428,426 / 133,496** (−137 / −15). This is a static graph sum, not observed transfer bytes or performance timing. V26 was 428,201 / 133,458; no significant homepage-JS reduction is claimed.
- Homepage stylesheet: **139,685 raw bytes** versus v27 138,615 (+1,070 for scoped motion/card rules). The separate action stylesheet remains **19,220 bytes**, unchanged; existing compression/download choreography and timing are untouched.
- Final runtime diff is limited to `tools/pdf-editable-docx.ts`, `components/site/hero-phrases.tsx`, `components/site/primitives.tsx` and `app/globals.css`. The only additional source edit is the existing PDF regression assertion. Word→PDF, OCR, PDF Compressor, image-processing algorithms, navigation, search behavior, header, routes, SEO metadata and processing wrappers were not changed.
- Existing v26 CSS scope, deferred menu/search content, deferred DOCX parser, safe route prefetching, heavy-engine separation, touch targets, labels, contrast and resource cleanup remain.

#### Release / remaining verification limits

Version **28** was saved from Sites source `a199e7f63f5d66a3d824314c8bc6e4e2c5dc5648` and successfully published at **2026-10-07T19:29:22.417976Z** on the existing public Site. Repository/branch: `aftab-62/Toolfera`, `main`; single release commit message: `Restore v25 document editing and homepage motion`. Its final SHA/push receipt is reported after commit creation, without predicting a self-referential SHA inside this file. No previous commit is rewritten.

**Not verified / not measured:** physical-phone behavior; actual Android/browser motion preference; keyboard/orientation recovery on a phone; interactive Word/WPS deletion/insertion/copy; freshly rendered DOCX pagination and visual page comparison; native saved-file completion; cross-browser/device matrix; Lighthouse, mobile timing and real-user Core Web Vitals. The historical exact `Object.defineProperty` cause remains unreproduced. No broader QA claim is renewed by this targeted pass.


#### Version-28 live desktop evidence after publication

Actual production Chrome was checked at **1363 × 936**, `prefers-reduced-motion: reduce = false`, `document.hidden = false`, using `/_next/static/css/index.DmoqekDe.css`.

- Timed observations at 16 / 1,031 / 2,047 / 3,062 / 5,077 ms showed `format JSON` changing to `calculate instantly` and then `merge PDFs`. The search orbit remained running at six seconds and its transform changed at every observation. Two real screenshots three seconds apart also showed `compress PDFs` → `PDF to DOCX` and the moving border light; these were visually inspected.
- Search input focus did not stop rotation (`convert images` → `format JSON`). Opening the Find a tool dialog did not stop it (`PDF to DOCX` → `Word to PDF`); closing restored the trigger. The modal contained zero animated-border elements.
- All eight homepage cards were **301 × 224 px**, with their category, favorite and Open control intact, zero demo blocks, no card horizontal overflow and no page horizontal overflow. Both rows were visually reviewed. Screenshot: `docs/performance/toolfera-v28-cards.jpg`. The static navy header remains unchanged.
- The actual production PDF→Word tool read and converted both preserved PDFs successfully, reporting sixteen source pages and ready DOCX results: BudgetMate **697.1 KB**, alcheMe **17.9 KB**. These are UI output-size labels and source-page counts, not newly rendered Office page counts. The BudgetMate Download Word File link produced a browser download event after its unchanged animation. Its returned file path/copy was not available for workspace readback within the five-second handoff check; a subsequent direct read of that returned path also failed. Browser-produced DOCX XML and native saved-file completion therefore remain **unverified**; current XML assertions above come from the actual local engine outputs, not an invented browser readback.
- No Tool Fera application-origin warning/error was returned in the captured production logs. The returned errors were extension metadata messages with `chrome-extension://` source URLs and were excluded by origin. One read-only browser test referenced an unavailable `performance.now` helper; it was corrected to record elapsed time in the controlling session, without a product change.

No mobile viewport emulation or physical phone was exposed by this browser interface. Normal/reduced mobile motion and compact-card layout remain verified by current-source/compiled-CSS checks only; real-phone visual acceptance, OS preference diagnostics and interactive Word/WPS editing still require manual verification. Documentation/screenshot recording after publication changed no runtime source and required no new build or publication.

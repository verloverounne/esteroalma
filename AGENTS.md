# Estero Alma — Landing Page

## Summary
Single-page bilingual (ES/EN) institutional landing page for a private natural reserve
(wetland) in Loreto, Corrientes, Argentina. Sober, airy, editorial, left-aligned.
No frameworks. Pure HTML + CSS variables + vanilla JS. No `main.js`.

## Design intent
- Contemporary environmental / cultural institution feel — NOT a startup landing page.
- White background, black text, thin black/hairline dividers, green used only as a
  restrained accent.
- No shadows, no gradients, no rounded corners, no icons, no emojis, no decorative cards.
- Logo is central to the identity (header + large in footer).
- Visual system = thin lines + spacing + typography scale + image scale only.

## Structure (order)
1. Header (sticky, logo + ES/EN toggle)
2. Hero — title "Estero Alma", subtitle (Reserva Natural Privada / Private Natural Reserve),
   place line "Loreto, Corrientes", text CTA to virtual tour, large hero image
3. Descripción — two fixed paragraphs (do not invent copy)
4. Objetivos de la reserva — 5-item list with dividers (not cards)
5. Tour virtual — plano.webp at left with green hotspot points + embedded VR iframe
6. Información general — one fixed paragraph
7. Footer — centered logo, ES/EN toggle, WhatsApp link, copyright

## Assets
- `assets/esteroalma.jpg`        — hero photo (dock at Laguna San Juan, dusk)
- `assets/plano.webp`            — top-down site plan (tour section)
- `assets/estero-alma_logo.png`  — official two-bird circular emblem (header + footer)
No audio.

## Hotspots (labels only, no descriptions)
Ingreso, Comedero de aves, Camping, Área productiva, Muelle, Pasarela, Timbó norte, Timbó sur.
Positioned via inline left/top % over the plano image.

## Palette (strict)
- `--p: #80bf6a` (green accent, restrained)
- `--d: #0d0e0e` (text + thin lines)
- `--w: #ffffff` (background)
No other colors anywhere.

## Typography
Lexend Zetta only, applied on `*`. `border-radius: 0 !important` on `*`.

## Language
Vanilla JS `setLang('es'|'en')` toggles `.on` class on `[data-lang]` elements.
Default ES. Toggles in header and footer.

## Virtual tour
iframe → https://vr-tour-arai.lovable.app/edaf0a5b-fe1f-4b82-bedf-6d1e24bb2316

## Contact
WhatsApp: https://wa.me/5493794280342

## Validation
No script modules imported. Any rosie/three.js importmap diagnostic is in an unused
rosie file and does not affect this page.

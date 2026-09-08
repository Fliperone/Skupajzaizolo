# Skupaj za Izolo — predstavitvena spletna stran (dev)

Preprosta statična stran brez builda: `index.html` + `styles.css` + `script.js`.
Struktura povzema običajno zgradbo slovenskih strank (SDS, Svoboda ipd.): hero + program + projekti + kandidati + podpora + kontakt, prilagojeno za lokalno stranko v Izoli.

## Vsebina (povzeto iz vaših materialov)
- Barve logotipa: temno modra C100 M70 Y0 K0 → `#0a4da1`, svetlo modra C80 M30 Y0 K0 → `#1b96d0`, poudarek magenta z letaka → `#e5007d`
- Program (6 točk): Argo dnevna soba / Javna stanovanja / Promet+parkirišča / Prostorski razvoj+kmetijstvo / Starejši / Mlada podjetja
- Slogan: OBČINO IZOLA IZOLANOM
- Dvojezično SL/IT (gumb zgoraj desno, `data-sl` / `data-it` atributi)

## Slike — kam shraniti vaše priloge
V `assets/` skopirajte:
- `logo.jpg` — uradni logotip z imenom stranke (uporablja se v glavi strani)
- `render-argo-park.jpg` — zgornji render (park + marina + dvorana)
- `render-argo-dvorana.jpg` — spodnji render (notranje dvorišče / mladinski center)
- po želji `kandidat-01.jpg` …

Če datotek še ni, stran prikaže nadomestni gradient + napis, da ne bo pokvarjenih ikon.

## Lokalni predogled
Dvokliknite `index.html`, ali:
```powershell
python -m http.server 8000
# odprite http://localhost:8000
```

## Objava (GitHub Pages)
Repozitorij je povezan na GitHub Pages (tudi `CNAME` za lastno domeno). Vsak push na `main` samodejno objavi stran:
```powershell
git add -A
git commit -m "Opis spremembe"
git push
```

## Kaj morate še dopolniti (označeno s placeholderji)
1. Kandidati: v `index.html` poiščite `<!-- Podvojite .candidate -->` — zamenjajte »Ime Priimek«, dodajte slike.
2. Župan: `.mayor-card` — ime + opis.
3. Kontakt: `info@skupajzaizolo.si`, telefon, točen naslov, FB/IG povezave.
4. Pravno: povezavi »Varstvo osebnih podatkov« in »Preglednost političnega oglaševanja« (obvezno za politične stranke v SLO).
5. Lokalnim volitvam 15. 11. 2026 prilagodite datume po DVK rokovniku.

Zgrajeno kot statika, da jo lahko ureja tudi ne-programer. Za nadgradnjo (novice/blog) priporočam prehod na WordPress ali Astro + Decap CMS.

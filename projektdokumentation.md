# Projektdokumentation

#### Navn: Alexander Grønninger

##### Hold: ?? / WU07

##### Uddannelse: Webudvikler

##### Uddannelsessted: Roskilde Tekniske Skole

[Link til (min applikaton)](http://nogether.netlify.com/)

## Teknologier

- HTML
- CSS
- React
- NPM

---

### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

(Hvilke node-pakker har du installeret for at dit projekt virker? Beskriv kort hvilket "problem" hver pakke løser.)

- Emotion: to allow for css to be applied in components
- React-icons: for various icons used on the site
- React-router-dom: for handling navigation and different pages
- React-collapsible: tried making collapsible categories with just css, which doesn't allow for dynamically sized elements, this does
- React-swipable: seemed to be the easiest package for handling swipes, tho it did require setting up my own animations
- React-toastify: on recommendation from Troels, set it up so it gives user some feedback when they save / delete to / from archive.

---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

(Hvilke overvejelser har du gjort dig, fx. i forbindelse med dit valg af animationer)

- Decided to use react-icons to familiarize myself with using NPM packages on my own
- Decided on react-swipable after hearing about it and others, thinking it'd be the least difficult, which I think it may have been, tho I did have to make my own animations for which I used css.

---

### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

(Hvad gik godt. Hvor prioriterede du forkert. Klagesange fra de varme lande om halvfærdigt produkt, på grund af manglende nattesøvn, fordi din kæle-skildpadde havde tandpine er IKKE interessante.)

I think I managed to divy up each problem in to small sizes and focus on one issue at a time, in a way that helped me solve bigger issues such as handling data, or adding the animations.
The only place I think I could have done better is with actual styling, tho seeing as I only had pictures to go from, I had to guess sizes & precicely which colours were used - this could be considered an issue, tho I'd argue that I'll never work at a job where I don't have access to the design programs used, as in I wont consider that workable work conditions.
There are room for improvements ofc, f.eks I haven't set up the newsbox/home articles and archive articles to use the same component, despite a large portion of both components are the same. Same goes for home and archive categories.

---

### En beskrivelse af særlige punkter til bedømmelse

(er der en særlig detalje som du synes din underviser bør lægge mærke til når dit projekt evalueres)

Not really, I think I did all of it well, particularly how everything is flexible and dynamic.

Du kan vise kode i markdown på følgende måder:

```js
function myFunction() {}
```

```css
.my__CSSrule {
  property: value;
}
```

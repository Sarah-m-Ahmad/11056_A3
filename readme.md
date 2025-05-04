# Rationale

## Live Link

https://sarah-m-ahmad.github.io/11056_A3/index.html 

## Homepage

### Hero content

When searching for ways to actualise my prototype, I came across the _background-image_ property. However, when I initially applied it, I had issues with tiling and getting the image to fit the container. I was eventually able to resolve this using _background-size: cover;_ and _background-repeat: none;_ (MDN Web Docs, n.d.-a).

Another element I struggled with was the buttons since I had two images that were supposed to change in visibility depending on the state. Using ChatGPT (OpenAI, 2025) to troubleshoot, I ended up using opacity toggle and absolute positioning to have both buttons on top of each other. I also assigned the button a fixed width and then changed it in the breakpoint, since previous attempts at using relative units were unsuccessful.

### Main content

For the images in the content, I initially used the exported frame from Figma but relented and tried to implement a similar layout. I tried implementing this using flexbox but was unsuccessful and ended up using CSS grid. Although I am satisfied with the final output, the scaling of the images appears awkward at larger screen sizes.

#### Clamp

To ensure the typography was responsive and adapted dynamically to different screen sizes, I used clamp (MDN Web Docs, n.d.-b).

## Header and footer

Following the mobile-first approach, I designed the header and footer at desktop size but then adapted them to be suitable for mobile at a breakpoint of 827px. When deciding the breakpoint, I set it to occur when the two-column layout would collapse. For the header, I wanted a hamburger menu, so I used some initial code from (Web Dev Tutorials, 2021) and modified the styling to my needs, specifically removing transitions and changing the positioning so the menu pops up instead of sliding to the left. Additionally, I used ChatGPT (OpenAI, 2025) to source some JavaScript to detect when the user swiped down the header and hid it to address the issues with absolute positioning.

## Other Pages

The biography page was relatively straightforward and used a two-column layout achieved through flexbox (Coyier, 2018). However, I had issues with the images in the Legacy page. I initially set a flex layout, and intended to use _transform:_ to rotate the image and have it stack below the first as defined in the mobile prototype. After using the transform tag, though, the scaling broke the page. Even after troubleshooting with ChatGPT (OpenAI, 2025) and switching to a grid layout, there is an awkward gap, which is likely due to the container not applying to the transformation. With more skill, I would like to resolve this.

The Key Works page also had issues, especially with the carousel. Although I sourced the code from (Adroja, 2022), I modified the styling to suit my prototype. I had issues setting the tiles in relative units, though I added changes to their sizes in the breakpoints. Although this is not the optimal solution, it is partially effective and thus suffices. To showcase what would happen when a user clicked on a tile, I added a page for the Cameron offices. Although I am satisfied with the carousel's appearance, the lack of keyboard accessibility limits usability. I attempted to mitigate this by using the article tag, providing some degree of semantic value.

Overall, I am quite satisfied with the final website, especially since it is relatively faithful to the initial prototype. Moving forward, I would like to implement additional content pages and address current issues with this site.

**Word Count:**

# References

Adroja, S. (2022). Amazing Carousel Effect Using Only HTML & CSS - Image Slider || #html #css #javascript #code #shorts [YouTube Short]. In *www.youtube.com.* https://www.youtube.com/shorts/W2yJ_IbkAyI

_(Used to create a carousel effect for the 'Key Works' page)_

Angela Design. (2020). Responsive CSS Grid Tutorial [YouTube Video]. In *www.youtube.com.* https://www.youtube.com/watch?v=68O6eOGAGqA

_(Helped consolidate understanding about responsive css grid)_

Coyier, C. (2018). _A Complete Guide to Flexbox | CSS-Tricks._ CSS-Tricks; CSS Tricks. https://css-tricks.com/snippets/css/a-guide-to-flexbox/

_(Acted as a general guide for flexbox properties)_

House, C. (2021, May 12). _CSS Grid Layout Guide | CSS-Tricks._ CSS-Tricks; CSS Tricks. https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-items

_(Provided general information about the css grid layout)_

MDN Web Docs. (n.d.-a). _background-image - CSS: Cascading Style Sheets | MDN._ Developer.mozilla.org; MDN Web Docs. Retrieved January 4, 2025, from https://developer.mozilla.org/en-US/docs/Web/CSS/background-image

_(Helped with understanding background image properties and setting it)_

MDN Web Docs. (n.d.-b). _clamp() - CSS: Cascading Style Sheets | MDN._ Developer.mozilla.org; MDN Web Docs. Retrieved May 4, 2025, from https://developer.mozilla.org/en-US/docs/Web/CSS/clamp

_(Reference for CSS Clamp)_

OpenAI. (2025). _ChatGPT._ ChatGPT; OpenAI. https://chatgpt.com/

_(Helped with troubleshooting and providing some source code)_

Slaying The Dragon. (2022). Learn CSS Grid - A 13 Minute Deep Dive [YouTube Video]. In _www.youtube.com._ https://www.youtube.com/watch?v=EiNiSFIPIQE

_(Consolidate understanding regarding the css grid)_

Web Dev Tutorials. (2021). JavaScript - How to Create a Responsive Hamburger Menu with HTML, CSS, & JavaScript [YouTube Video]. In *www.youtube.com.* YouTube. https://www.youtube.com/watch?v=flItyHiDm7E

_(Source code for responsive hamburger menu)_

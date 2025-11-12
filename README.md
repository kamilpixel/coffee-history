# Coffee History Timeline

An interactive scrolling timeline that takes you through the fascinating journey of coffee from its origins in Ethiopia to modern specialty cafe culture.

## Live Preview

Visit the live website at: [Coffee History Timeline](https://coffee-history.netlify.app)

![Screenshot](https://coffee-history.netlify.app/img/preview-coffee-history.png)

## Tech Stack

- **GSAP** - Advanced scroll animations and smooth transitions
- **Iconify Icons** - Beautiful iconography
- **Vanilla JavaScript** - Pure JavaScript for interactions
- **Vite** - Fast development and optimized builds

## Features

- Smooth scroll-triggered animations
- Interactive timeline sections
- Embedded video content
- "Did you know?" trivia popup
- Responsive design
- Engaging visual storytelling

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Updating Content

### Updating Text Content

All text content is in `index.html`. Each section follows this structure:

```html
<section class="section" data-animation-id="sectionAnim1">
  <div class="section__content">
    <div class="section__left">
      <h2 class="section__title">Your Section Title</h2>
      <p class="section__description">Your description text here</p>
    </div>
  </div>
</section>
```

**To update:**
1. Find the section you want to modify
2. Edit the `<h2>` for the title
3. Edit the `<p>` for the description

### Updating Images

Images are located in `/src/images/` directory and referenced in the HTML:

```html
<img src="/src/images/your-image.png" alt="Description" />
```

**To update:**
1. Add your new image to `/src/images/` folder
2. Update the `src` attribute in the corresponding `<img>` tag
3. Update the `alt` attribute for accessibility

### Updating Video Content

The timeline includes an embedded YouTube video in Section 4:

```html
<iframe
  width="460"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video player"
  ...
></iframe>
```

**To update:**
1. Get the YouTube video ID from the URL (e.g., `M0VWroX0gZA`)
2. Replace `VIDEO_ID` in the `src` attribute
3. Update the `title` attribute to describe your video

### Updating the Trivia Popup

The trivia content is in the popup section at the bottom of `index.html`:

```html
<div class="popup__body">
  <p>Your trivia text here</p>
</div>
```

**To update:**
1. Find the `<div class="popup__body">` element
2. Replace the `<p>` content with your new trivia fact
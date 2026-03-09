# Copilot Instructions for Aula-02: Estrutura e Semântica

## Project Overview
Educational HTML project demonstrating semantic structure for a Bahia-themed website. This is a learning module (Aula-02) focused on HTML best practices and semantic markup.

## Project Structure
- **index.html** - Basic HTML structure example with essential meta tags, character encoding, and viewport settings
- **semantica.html** - Semantic HTML example using `<header>`, `<nav>`, and proper element hierarchy

## Key Patterns & Conventions

### HTML Structure
- **Language Declaration**: Always include `lang="pt-br"` in `<html>` tag (Portuguese Brazil project)
- **Charset & Viewport**: Required meta tags for proper character encoding and mobile responsiveness
  ```html
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```
- **Semantic Elements**: Use semantic tags (`<header>`, `<nav>`, `<main>`, `<footer>`) over generic divs when possible
- **DOCTYPE Declaration**: Always start with `<!doctype html>` in lowercase

### Comments
- Educational comments explain each section's purpose
- Format: `<!-- descrição da seção -->` on separate lines
- Comments should precede the code they describe

### File Naming
- Use `.html` extension
- Descriptive names reflecting content purpose (index.html for main, semantica.html for semantic examples)

## Content Conventions
- Site theme: Bahia-related content ("BORA BAHÊA MINHA PÔ")
- Navigation structure includes links for: INICIO, HISTÓRIA, JOGADORES
- Use Portuguese content and commentary

## Development Guidelines
1. **Before modifying existing files**: Preserve comments and structure - they serve educational purposes
2. **When adding HTML**: Follow the semantic structure demonstrated in semantica.html (header → nav → content)
3. **New elements**: Include explanatory HTML comments for educational clarity
4. **Testing**: Open HTML files directly in browser (no build system required)

## No Dependencies
This is a static HTML project with no build tools, frameworks, or external dependencies. Files are meant to be opened directly in a web browser.

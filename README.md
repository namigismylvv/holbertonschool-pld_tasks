# Flexbox PLD Tasks

## Task 1: Understanding Flexbox Basics

### What is Flexbox?
Flexbox, short for **Flexible Box Layout**, is a CSS layout module designed to arrange elements in a predictable way, even when their size is unknown or dynamic. It provides powerful alignment, spacing, and ordering capabilities, making it easier to create complex, responsive layouts without relying on floats or positioning hacks.

### Why is Flexbox better than floats or inline-block layouts?
Flexbox is considered better because:

1. It allows easy vertical and horizontal alignment without extra markup.
2. It automatically distributes space between items and adapts to different screen sizes.
3. It offers better control over the order of elements without changing the HTML structure.

---

## Task 2: Aligning Elements

### How to horizontally and vertically align elements using Flexbox?
In Flexbox, the alignment depends on two axes:

- **Main axis** – controlled by `justify-content` (e.g., `justify-content: center;` for horizontal centering when `flex-direction: row`).
- **Cross axis** – controlled by `align-items` (e.g., `align-items: center;` for vertical centering when `flex-direction: row`).

Justify-content properties:

1.flex-start,
2.center,
3.flex-end,
4.space-between,
5.space-around,
6.space-evenly.

Align-items properties:

1.flex-start,
2.center,
3.flex-end.

For perfect horizontal and vertical centering:

```css
.container {
  display: flex;
  justify-content: center; /* Horizontal alignment */
  align-items: center;     /* Vertical alignment */
}
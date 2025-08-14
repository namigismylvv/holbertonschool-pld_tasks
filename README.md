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
```
---

## Task 3: Flex Axes and Properties

### Question: What is the difference between the main axis and the cross axis in Flexbox?

In Flexbox, layout alignment is based on two axes:

- **Main axis**: The primary axis along which flex items are laid out.  
  - Its direction is determined by the flex-direction property.  
  - For example:  
    - flex-direction: row` → main axis is horizontal  
    - flex-direction: column` → main axis is vertical  

- **Cross axis**: The axis perpendicular to the main axis.  
  - Used for alignment perpendicular to the main axis.  
  - For example:  
    - If main axis is horizontal → cross axis is vertical  
    - If main axis is vertical → cross axis is horizontal  

**Key point:**  
- justify-content aligns items along the **main axis**  
- align-items aligns items along the **cross axis**  

---

## Task 4: Flex Container vs. Flex Items

### Question: What are the key properties that work on flex containers and flex items?

**Flex Container Properties** (apply to the parent container):
1. **display: flex;** – Activates Flexbox layout for the container.
2. **flex-direction** – Sets the direction of the main axis (`row`, `column`, etc.).
3. **justify-content** – Aligns flex items along the main axis (`flex-start`, `center`, `space-between`, etc.).

**Flex Item Properties** (apply to the children of the flex container):
1. **flex-grow** – Defines how much an item can grow relative to the others.
2. **flex-shrink** – Defines how much an item can shrink if needed.
3. **align-self** – Overrides the container’s `align-items` for individual items, aligning them along the cross axis.

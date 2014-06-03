transition-helper
=================

This is a basic proof-of-concept package that uses the _uihooks for Meteor Devel.

What it gives you is a basic `{{#transition}}` helper -- which if you wrap around an `{{#each}}` or a `{{#if}}` will animate the removal / addition (and eventually movement) of elements using *CSS Transitions*.

Check out the basic-example for a simple usage.

## Important

You **must** have a transition defined for the element on the `.off-screen` -> not `.off-screen` class change. If you don't, there be dragons.

## Contributions

Eventually this will be a real package with options and the rest. Until then the best contribution is suggestions to what it needs. Perhaps it's perfect as is?

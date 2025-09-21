# oopsify-playground

Research workspace for exploring test data generation patterns and developing oopsify transformations.

## Purpose

This repository contains experiments and research into:

- Understanding clean data patterns from various fake data generators (faker.js, chance.js, etc.)
- Testing oopsify with these data generators
- Prototyping new transformation functions for oopsify

## Structure

```
experiments/
├── faker.js          # Faker.js data exploration
└── ...                # Additional experiments
```

## Usage

```bash
# Run individual experiments
node experiments/faker.js

# Experiment with different locales, generators, and transformation patterns
```

## Dependencies

- `@faker-js/faker` - For generating clean test data
- `chance` - Alternative data generator for comparison
- `oopsify` - Testing transformation functions with real data

## Note

This is a research repository for development purposes. Code here is experimental and not intended for production use.

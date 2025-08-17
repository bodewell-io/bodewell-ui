# Bodewell UI

[![NPM Version](https://img.shields.io/npm/v/@bodewell/ui.svg)](https://www.npmjs.com/package/@bodewell/ui) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Bodewell UI is a designer-centric prototyping framework built to empower product designers and builders with limited coding experience to independently build, test, and validate high-fidelity, interactive prototypes. It is built on the belief that the future of product development belongs to the creator, and a strong framework is the key to bridging the gap between strategic vision and a tangible product.

The strategic focus of Bodewell is to make the common 80% of application development effortless, allowing you to focus on the unique 20% that delivers real value.

---

## Features

* A comprehensive, clean, and reusable UI component library.
* A rich set of components covering forms, data display, charts, layout, feedback, and navigation.
* Designed to be the visual foundation of the Bodewell ecosystem.

---

## Quick Start

While you can install `@bodewell/ui` in any React project, the recommended way to get started is with our official starter kit, `bodewell-app-starter`.

Run the following command in your terminal to create a new project with Bodewell UI and all necessary configurations already set up:

```bash
npm create bodewell-app@latest
```

## Basic Usage
Here's a simple example of how to use a Bodewell UI component in your project:

``` javascript
import React from 'react';
import { Button, Card, PageHeader } from '@bodewell/ui';

function MyAwesomePage() {
  return (
    <div>
      <PageHeader
        title="Welcome to Bodewell"
        description="This is a page built with our new component library."
      />
      <Card className="mt-8 p-4">
        <p className="mb-4">Here is some content inside a card.</p>
        <Button variant="primary" onClick={() => alert('Button clicked!')}>
          Get Started
        </Button>
      </Card>
    </div>
  );
}


export default MyAwesomePage;
```

## The Bodewell Ecosystem

The Bodewell project is an integrated framework architected across three separate repositories:

* @bodewell/ui (This Repository): A public, open-source component library distributed as an NPM package.

* bodewell-app-starter: A public, open-source starter-kit application that provides the ideal local environment for building with Bodewell.

* bodewell-app-builder: A hosted SaaS application featuring our AI Prototyping Assistant, which guides users through the strategic A.D.A.P.T. Framework to build applications from a solid strategic foundation.

# License
This project is licensed under the MIT License.

﻿# Folder Structure Display

`folder-structure-display` is a React component that enables you to visualize hierarchical folder structures with ease.

# Installation

```bash
npm install folder-structure-display
```

# How To Implement 

First Create a Data Array as Given Below :

```javascript
const data = [
  {
    name: "Home",
    children: [
      {
        name: "Section 1",
        children: [
          { name: "H1" },
          { name: "H1" },
          { name: "H1" },
          { name: "H1" },
        ],
      },
    ],
  },
  {
    name: "About",
    children: [
      {
        name: "Section 1",
        children: [
          { name: "H1" },
        ],
      },
    ],
  },
];
```
The data array represents a sample folder structure. `Customize it according to your needs`.

 Make Sure The Folder the Data Format is Same as Mentioned Above.

# Usage

```javascript
import React from 'react';
import FolderStructureDisplay from 'folder-structure-display';

const data = [
  {
    name: "Home",
    children: [
      {
        name: "Section 1",
        children: [
          { name: "H1" },
          { name: "H1" },
          { name: "H1" },
          { name: "H1" },
        ],
      },
    ],
  },
  {
    name: "About",
    children: [
      {
        name: "Section 1",
        children: [
          { name: "H1" },
        ],
      },
    ],
  },
];

const App = () => {
  return (
    <div>
      <h1>Your React App</h1>
      <FolderStructureDisplay data={data} mainfoldername={"Woocommerce"} />
    </div>
  );
};

export default App;
```

# Props :

 `iconcolor`

 `backgroundcolor`

 `textcolor`
 
 `mainfoldername`

 # Image :

![Preview](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsxAttCj60qLcfzUQO0RunfWvoTvcC8xs3-96cxkv_LBJYutlBggTaztYkjiuWRVqRGsS5sqGlPJGcv_A3qTyZCCtkRtjkWTcEbEDdEl8cS7YM5DkGT3KCjlCo8asiL46J0hsnTeATmm1NDHgvfFLiD3AtKigmwAbafdHjJ-UQmPdWcsAXr0d9K73eYBA/w777-h320/Screenshot%202023-11-23%20015852.png)

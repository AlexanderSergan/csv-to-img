# Csv image extractor

## Overview
This is a small tool which help to extract jpeg files from csv datasheets. 


## Usage
Executable files are located at `dist` folder. Windows, Linux and Mac environments are supported.
Usage is pretty straightforward: 
```bash
csv-img-extract --input example.csv --output imagesData
# will create ./imagesData folder and extract images with names according to image Id
```

## API

| Flag          | Default  |  Description
| ------------- | -------- | -------------------------- | 
| --input, -i   |  `n/a`   | Path to input `*.csv` file |
| --output, -o  |  `/out`  | Output folder				|

## Building binaries from source

Install `nexe` globally with `npm`:
```bash
npm i -g nexe
```
Run npm script according to your target environment:
```bash
npm run build-linux
npm run build-win
npm run build-mac
```
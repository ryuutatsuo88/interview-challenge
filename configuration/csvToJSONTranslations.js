const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

function setObjectValue(obj, path, value) {
    if (!path.includes('.')) {
        obj[path] = value;
        return;
    }

    let parts = path.split('.');
    let current = obj;

    for (let i = 0; i < parts.length - 1; i++) {
        current[parts[i]] = current[parts[i]] || {};
        current = current[parts[i]];
    }

    current[parts[parts.length - 1]] = value;
}

function processCsv(csvFilePath) {
    let headers = [];
    let translations = {};
    let locales = [];
    let isHeaderProcessed = false;

    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('headers', (h) => {
            headers = h;
        })
        .on('data', (row) => {
            if (row['Country'] === 'Locale 4 Letter code') {
                locales = headers.slice(1).map(header => row[header]);
                locales.forEach(locale => {
                    translations[locale] = {};
                });
            } else if (row['Country'] !== 'Country' && row['Country'] !== 'Language' && row['Country'] !== 'Locale 2 Letter code' && row['Country'] !== 'String ID') {
                headers.slice(1).forEach((header, index) => {
                    if (locales[index]) {
                        setObjectValue(translations[locales[index]], row['Country'], row[header]);
                    }
                });
            }
        })
        .on('end', () => {
            let filePath = path.resolve(__dirname, "..", "deployment", "locales")
            for (const locale in translations) {
                fs.writeFileSync(path.join(filePath, `${locale}.json`), JSON.stringify(translations[locale], null, 4));
            }
            console.log('CSV processing completed. JSON files created.');
        });
}

// Replace with your CSV file path
const csvFilePath = 'Translations.csv';
processCsv(csvFilePath);

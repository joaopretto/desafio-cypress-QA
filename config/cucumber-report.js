const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/reports/json/',
    reportPath: 'cypress/reports/html/',
    metadata: {
        browser: {
            name: 'chrome',
            version: 'latest'
        },
        device: 'Local Test Machine',
        platform: {
            name: 'windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Desafio Cypress QA' },
            { label: 'Release', value: '1.0.0' },
            { label: 'Execution Time', value: new Date().toLocaleString() }
        ]
    }
});
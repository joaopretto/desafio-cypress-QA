import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
    e2e: {
        specPattern: "src/tests/**/*.feature",
        baseUrl: "https://dummyjson.com",
        supportFile: false,
        async setupNodeEvents(on, config){
            await addCucumberPreprocessorPlugin(on, config);
            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );
            return config;
        },
        env: {
            API_URL: "https://dummyjson.com",
            USER_USERNAME:"emilys",
            USER_PASS:"emilyspass"
        }
    },
});
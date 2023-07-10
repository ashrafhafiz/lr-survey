Laravel-React Survey Project

1. Create new Laravel project:
    ```shell
    laravel new lr-survey
    ```
2. Update .env file by adding the DB server parameters

3. Use migration
    ```shell
    php artisan migrate
    ```
4. inside lr-survey folder create folder for react frontend

5. inside frontend folder creat React app using vitejs selecting react & javascript
    ```shell
    npm create vite@latest
    ```
6. Modify package.json to be:
    ```shell
    "dev": "vite --port=3000"
    ```
7. Run

    ```shell
    npm install

    npm run dev
    ```

8. Install tailwindcss

    #### Install Tailwind CSS

    Install `tailwindcss` and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files.

    ```
    npm install -D tailwindcss postcss autoprefixernpx tailwindcss init -p
    ```

    #### Configure your template paths

    Add the paths to all of your template files in your `tailwind.config.js` file.

    ```
    tailwind.config.js

    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

    #### Add the Tailwind directives to your CSS

    Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.

    ```
    index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    #### Start your build process

    Run your build process with `npm run dev`.

    ```
    npm run dev
    ```

9. Install tailwindcss form plugin

    ```
    npm install @tailwindcss/forms
    ```

    Add the plugin to tailwindcss.config.js

    ```
    /** @type  {import('tailwindcss').Config} */

    export  default {
    	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    		theme: {
    			extend: {},
    		},
    	plugins: [require("@tailwindcss/forms")],
    };
    ```

10. Install heroicons for react

    ```
    npm install @heroicons/react
    ```

11. Install react-router-dom
    ```
    npm install react-router-dom
    ```

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{css,xml,html,vue,svelte,ts,tsx}'],
  darkMode: ['class', '.ns-dark'], // Modo escuro controlado pela classe .ns-dark do NativeScript
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // desativa os resets específicos do navegador
  },
};

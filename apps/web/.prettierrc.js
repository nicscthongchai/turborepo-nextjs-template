module.exports = {
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require("prettier-plugin-tailwindcss"),
  ],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  arrowParens: "avoid",
  tabWidth: 2,
  useTabs: false,
  importOrder: [
    "^ui(.*)$",
    "^(src/)?abi(.*)$",
    "^(src/)?component(s)?(.*)$",
    "^(src/)?constant(s)?(.*)$",
    "^(src/)?container(s)?(.*)$",
    "^(src/)?context(s)?(.*)$",
    "^(src/)?hook(s)?(.*)$",
    "^(src/)?lib(s)?(.*)$",
    "^next(.*)$",
    "^(src/)?pages(.*)$",
    "^(src/)?public(.*)$",
    "^(src/)?recoil(.*)$",
    "^(src/)?subscriber(s)?(.*)$",
    "^(src/)?type(s)?(.*)$",
    "^(src/)?util(s)?(.*)$",
    "^(~)?[./]",
    "(.css|.scss)$",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
};

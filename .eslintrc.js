module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {

    "no-class-assign": "error",
    "no-await-in-loop": "error",
    "no-compare-neg-zero": "error", // can't use -0 or +0 to compare in condition
    "no-constant-condition": "error", // can not use constant in if or while ...
    "no-func-assign": "error", // can't reassign a function
    "no-ex-assign": "error", // can't reassign error in catch
    "no-empty-pattern": "error", // can't use empty variable in destructing patterns
    "no-duplicate-imports": "error", // disallow duplicate module import
    "no-duplicate-case": "error", // disallow duplicate case in switch
    "no-dupe-keys": "error", // disallow duplicate keys in object literals
    "no-dupe-else-if": "error", // disallow duplicate consition in if-else-if chains

    //  name
    "camelcase": ["warn", { properties: "always" }],
    "init-declarations": ["error", "always"], // require initialization in variable declarations
    // "no-magic-numbers": "warn",
    "no-shadow": "warn",
    "no-redeclare": "warn",

    // no
    "no-debugger": "error", // disallow use of debugger
    "no-alert": "error",
    "no-negated-condition": "error", // can't use negative condition
    "no-nested-ternary": "error", // can't use two or more ternary
    // "no-console": "error",              // disallow use of console

    // class
    "no-constructor-return": "error", // disallow returning value from constructor
    "class-methods-use-this": "error", // use static when unuse this in class construct

    // function
    "no-loop-func": "error",
    "no-return-await": "error",
    "arrow-body-style": ["error", "as-needed"], // need ellipsis braces when arrow function used return
    "block-scoped-var": "warn",
    "complexity": ["warn", 5], // in a loop, limit the number of nested if-else-if statemennts to a maximum of five
    "no-else-return": "warn", // disallow use else when use return in if body
    "consistent-return": "warn", // in a loop, limit the number of nested if-else-if statemennts to a maximum of five
    // "curly": ["error", "multi-line"],   // allow ellipsis braces when if no have bloak body
    "default-param-last": "error", // Enforce default parameters to be last

    // style
    "comma-style": ["error", "last"],
    "block-spacing": ["error", "always"],
    "arrow-spacing": ["error"],
    "array-bracket-spacing": "error",
    "no-whitespace-before-property": "error", //  Disallow whitespace before properties
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": "error",
    "no-multi-spaces": "error",
    "no-mixed-spaces-and-tabs": "error",
    "newline-per-chained-call": "error",
    "multiline-ternary": ["error", "always"],
    "max-statements-per-line": ["error", { "max": 1 }],
    "lines-between-class-members": "error",
    "lines-around-comment": ["error", { "beforeBlockComment": true }],
    "linebreak-style": ["error", "unix"],
    "keyword-spacing": ["error"],
    "key-spacing": ["error", { "beforeColon": false }],
    "jsx-quotes": ["error"],
    // "function-call-argument-newline": ["error", "always"],
    "switch-colon-spacing": ["error"],
    "operator-linebreak": ["error", "before"],
    // "comma-dangle": ["error", "always"],
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "semi": [
      "error",
      "never"
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": ["off"]
  },
}

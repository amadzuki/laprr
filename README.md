## Laprr - Food Delivery

> Mobile first design of online food delivery website

## Tech Stacks

- React
- Material UI
- dayjs
- currency.js
- xstyled/styled-components

## Summary

The project is bootstrapped with create-react-app. All the stylings is done by `xstyled`, a wrapper for `styled-components`, but with more features. I utilize `theming` color styles of the project with xstyled theme feature so the design is consistent. Although the design is only for mobile view, specifically for iPhone X (screen width: 370px); it can also be responsive in some degree because I used flexbox. I mostly use arrow function to create components and I made sure to do type checking with `PropTypes` for components that use props. I create dummy data and put it in JSON file for this project. Lastly, I deploy it via github pages and netlify.

## Github Pages Deployment

Add "homepage" property in `package.json` with value: `https://{username}.github.io/{repo-name}`

The following example is my "homepage" value in `package.json`

```
"homepage": "https://amadzuki.github.io/laprr/",
```

And then, do the following:

```bash
yarn deploy
```

The command will run scripts `predeploy` and `deploy` that are defined in `package.json` which will successfully deploy the web into Github Pages. You can view the deployed web by visiting the "homepage" link or by clicking `github-pages` in your github repo.

## Author

[Ahmad Marzuki](https://ahmadmarzuki.com)

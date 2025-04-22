# Static Tables
Library resources that consist predominantly of a searchable flat table. 

Current page paths can be found in `app/configs/Routes.js`.

[![Coverage Status](https://coveralls.io/repos/github/pulibrary/static-tables/badge.svg?branch=main)](https://coveralls.io/github/pulibrary/static-tables?branch=main)

## Local development

1. Run: `npm install`
2. Start a local server: `npm run dev`
3. Visit: [localhost:5173](http://localhost:5173/)

## Building for deployment

1. Run: `npm install`
2. Run `npm run build`
3. The build files will be in the /dist directory


## Testing

Run: `npm test`

### Test coverage

1. Run: `npm test -- --coverage`
1. Open `coverage/index.html` in your browser, or see the report in your terminal.


## Deploying
You can deploy this site locally by running `BRANCH=[branchname] bundle exec cap [environment] deploy`, or by using the [Ansible Tower template](https://ansible-tower.princeton.edu/#/templates/job_template/13/details)

- If you deploy to staging, you can see the site at https://static-tables-staging.princeton.edu/marquand_catalogs/
- If you deploy to production, you can see the site at https://library.princeton.edu/marquand_catalogs/

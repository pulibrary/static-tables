# Marquand Catalogs

Index of Marquand auction catalogs.

## Local development

1. Run: `npm install`
2. Start a local server: `npm run dev`
3. Visit: [localhost:3456](http://localhost:5173/)

## Building for deployment

1. Run: `npm install`
2. Run `npm run build`
3. The build files will be in the /dist directory


## Testing

Run: `npm test`


## Deploying
You must run the [libstatic playbook via Prancible](https://github.com/pulibrary/princeton_ansible/blob/main/playbooks/libstatic.yml) in order to deploy this application. If you want to deploy a branch other than `main`, you must edit the `roles/libstatic/defaults/main.yml` file and change the `version` under marquand-catalogs to your branch name, prior to running the playbook.

- If you deploy to staging, you can see the site at https://library-staging.princeton.edu/marquand_catalogs/
- If you deploy to production, you can see the site at https://library.princeton.edu/marquand_catalogs/

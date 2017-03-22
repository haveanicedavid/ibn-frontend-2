[Original Repo for the Frontend](https://github.com/haveanicedavid/ibn-frontend)

I ran a `git reset --hard` after doing `yarn eject` while trying to install css modules, which broke my app. I hadn't built much at that point, and decided it wasn't worth the time to troubleshoot, so instead just re-created the app.

## Setup
1. Clone this repo as well as its respective [Backend](https://github.com/haveanicedavid/ibn-backend)
2. run `yarn` to install dependencies
3. Make sure the backend is running, and run `yarn start`

**The server has to be running for a few minutes to populate data for the charts. Alternatively, you can send `post` requets to `http://localhost:8080/api/snaps/create`

## Summary
The goal of this frontend was to provide an interface that consumes the data coming forward from my express server. As it was mentioned in my interview that my focus would not be focused on the front-end, I opted to use `create-react-app` instead of writing everything by hand, and also used an existing UI toolset ([materialize](https://materializecss.com)) instead of writing my own.

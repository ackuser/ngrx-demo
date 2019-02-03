## What
*  <WHAT CHANGED GOES HERE... >
*  <WHAT CHANGED GOES HERE... >


## How to Test
### Get the code
* Clone the repo and checkout the PR branch

  ```
  git clone https://github.com/kumaran-is/ngrx-demo.git
  cd ngrx-demo
  git fetch
  git pull
  git checkout <NEW BRANCH NAME>
  npm install
  ```
### Test the code
* Run static code analyzer and unit test

    ```
    npm run lint
    npm run test
    ```
* Start the Angular SPA

  ```
  ng serve -o
  ```

* Angular SPA gets launched on port 4200.

## What to Check
Verify that the following are valid

*  `grunt analyze ` should pass 
*  `grunt test ` should pass
*  Code coverage does not drop under 80%
*  Verify the code changes works as expected by testing the Angular SPA.
*  Application runs without any errors.
*  Verify the browser console for any errors.
*  Review the code changes
*  Review Unit changes. Verify new tests are added to cover all new changes. Also verify test specs covers both happy path and failure path like exceptional or error conditions.
*  Review if any changes needed to Readme prescription or any project documents
* Review the changelog and application version
*  Delete the branch after merging back with the develop branch.

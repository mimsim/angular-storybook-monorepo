# angular-storybook-monorepo

Symple project used Storybook - Angular 16 / standalone components
Monorepo: Nx + Storybook in Angular

# Install 
npx create-nx-workspace@latest angular-monorepo --preset=angular-monorepo

# Adding Another Application

cd angular-monorepo 
npx nx g @nx/angular:app inventory --directory=apps/inventory --dry-run

# Creating Local Libraries

nx g @nx/angular:library products --directory=libs/products --standalone
nx g @nx/angular:library orders --directory=libs/orders --standalone
nx g @nx/angular:library shared-ui --directory=libs/shared/ui --standalone


! All libraries that we generate automatically have aliases created in the root-level tsconfig.base.json.
# Create and expose a ProductListComponent component from our libs/products library. Either create it by hand or run
nx g @nx/angular:component product-list --project=products --standalone --export


# Serve
nx serve angular-monorepo

# Visualizing your Project Structure
nx graph

# Testing and Linting - Running Multiple Tasks
nx test angular-monorepo # runs the tests for angular-monorepo
nx lint inventory # runs the linter on inventory
nx e2e angular-monorepo-e2e # runs e2e tests for the angular-monorepo

# Building the Apps for Deployment
angular-monorepo❯  npx nx run-many -t build


# Add Storybook 
- nx add @nrwl/storybook
- nx generate @nrwl/angular:storybook-configuration angular-monorepo
- nx run angular-monorepo:storybook
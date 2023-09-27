# angular-storybook-monorepo
Monorepo: Nx + Storybook in Angular

# install 
npx create-nx-workspace@latest angular-monorepo --preset=angular-monorepo

# Adding Another Application

cd angular-monorepo 
npx nx g @nx/angular:app inventory --directory=apps/inventory --dry-run

# Creating Local Libraries

nx g @nx/angular:library products --directory=libs/products --standalone
nx g @nx/angular:library orders --directory=libs/orders --standalone
nx g @nx/angular:library shared-ui --directory=libs/shared/ui --standalone


! All libraries that we generate automatically have aliases created in the root-level tsconfig.base.json.
# create and expose a ProductListComponent component from our libs/products library. Either create it by hand or run
nx g @nx/angular:component product-list --project=products --standalone --export
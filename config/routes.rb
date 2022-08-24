Rails.application.routes.draw do
  
  resources :brands
  resources :shoes
  resources :stores
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"

  get "/auth", to: "users#show"

  delete "/logout", to: "sessions#destroy"

end

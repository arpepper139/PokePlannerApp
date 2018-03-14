Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#index'
  get '/home', to: 'static_pages#index'
  get '/pokemon', to: 'static_pages#index'
end

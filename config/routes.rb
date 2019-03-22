Rails.application.routes.draw do
  devise_for :admins
  root controller: :home, action: :index
  resources :messages
  resources :admin
  resources :contacts, only: [:new, :create]
end

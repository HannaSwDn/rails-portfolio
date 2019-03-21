Rails.application.routes.draw do
  root controller: :home, action: :index
  
  resources :contacts, only: [:new, :create]
end

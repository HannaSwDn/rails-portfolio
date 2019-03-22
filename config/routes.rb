Rails.application.routes.draw do
  devise_for :admins
  root controller: :home, action: :index
  resources :messages
  get "message/new" => "messages#new"
  resources :admin
end

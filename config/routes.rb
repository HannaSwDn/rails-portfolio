Rails.application.routes.draw do
  devise_for :admins
  root controller: :home, action: :index
end

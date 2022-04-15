Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
        get 'signed-in', to: 'sessions#signed_in'

        post 'registrations', to: 'registrations#create'
        post 'sign-in', to: 'sessions#create'

        delete 'sessions', to: 'sessions#destroy'
    end
  end
end

Rails.application.routes.draw do
  devise_for :users

  get 'review-requests/new' => 'review_requests#new', as: :new_review_request

  namespace :api do
    post 'review-requests' => 'review_requests#create'
  end

  root 'home#index'
end

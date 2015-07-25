Rails.application.routes.draw do
  scope '/api' do
    resources :products
    post '/products/:id/add_comment', to: 'products#add_comment'
  end
  root "static#index"
  get '*other', to: 'static#index'
end

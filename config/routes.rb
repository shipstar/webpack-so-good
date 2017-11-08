Rails.application.routes.draw do
  get '/counter' => 'application#counter'

  root to: 'application#index'
end

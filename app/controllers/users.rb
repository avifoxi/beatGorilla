get '/users/new' do
  redirect '/'
end

post '/users/new' do
  @user = User.new(params[:signup])
  @user.password = params[:signup][:password]
  @user.save
  session[:user_id] = @user.id
  if session[:user_id]
    200
  else
    401
  end
  # redirect '/'
end

get '/users/:id' do
  @user = User.find(session[:user_id])
  erb :user_profile
end

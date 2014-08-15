post '/users/new' do
  @user = User.new(params[:signup])
  @user.password = params[:signup][:password]
  @user.save
  session[:user_id] = @user.id
  redirect '/'
end

get '/users/:id' do
  @user = User.find(session[:user_id])
  erb :user_profile
end

get '/sequences/new' do
  @user = User.find(session[:user_id]) if session[:user_id]
  redirect '/error' unless @user
  erb :"/sequences/new"
end

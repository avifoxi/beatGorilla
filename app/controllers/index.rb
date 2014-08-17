get '/' do
  @sequences = Sequence.all
  erb :index
end

post '/login' do
  @user = User.find_by_email(params[:email])
  if @user && @user.password == params[:password]
    session[:user_id] = @user.id
    200
    # redirect '/'
  else
    401
    # return "Error"
  end
end

post '/logout' do
  session.clear
  redirect '/'
end

get '/error' do
  erb :error
end
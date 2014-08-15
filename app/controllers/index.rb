get '/' do
  @sequences = Sequence.all
  erb :index
end

post '/login' do
  # login user
end

post '/signup' do
  # register user
end

post '/logout' do
  session.clear
end


get '/sequences/create' do
  @user = User.find(session[:user_id]) if session[:user_id]
  redirect '/error' unless @user
  
  @sounds = Sound.all
  @drums = Array.new(4) {|i| i + 1} # (4) could be a variable, needed to display new.erb and save sequence
  @beats = Array.new(8) {|i| i + 1} # (8) could be a variable, needed to display new.erb and save sequence

  erb :"/sequences/new"
end


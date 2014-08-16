get '/sequences/create' do
  @user = User.find(session[:user_id]) if session[:user_id]
  redirect '/error' unless @user
  @sounds = Sound.all
  @beats = Array.new(8) {|i| i + 1}

  # @sequence = Sequence.first # for testing only, should be blank, need new template erb
  # @soundpatterns = @sequence.sound_patterns # for testing only, should be blank
  # p @sequence
  # p @soundpatterns
  erb :"/sequences/new"
end


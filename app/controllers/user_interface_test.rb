get '/ui/new' do

end


get '/ui/:id' do
  @sequence = Sequence.find(params[:id])
  @user = @sequence.user
  @soundpatterns = @sequence.sound_patterns

  erb :'sequences/show'
end


post '/ui/:id/save' do
  #create or save by sequence code
  p "SAVED!!!"
  redirect "/ui/#{params[:id]}"
end

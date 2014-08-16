

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
  p params
  redirect "/ui/#{params[:id]}"
end

post '/ui/create' do

  seq = Sequence.create(name: params["seq_name"], tempo: params["seq_tempo"], steps: params["seq_beats"], user_id: params["seq_user_id"]) 

  params["seq_drums"].to_i.times do |i|
    sound_p = SoundPattern.create(sound_id: params["sp#{i+1}_id"].to_i, sequence_id: seq.id)

    params["seq_beats"].to_i.times do |index|
      params["sp#{i+1}"].has_key?((index + 1).to_s) ? play_beat = true : play_beat = false
      Beat.create(play: play_beat, position: (index + 1), sound_pattern_id: sound_p.id)
    end

  end

  @user = User.find(seq.user_id)
  redirect "/users/#{@user.id}"
end
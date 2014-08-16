get '/ui/new' do

end


get '/ui/:id' do
  @sequence = Sequence.find(params[:id])
  @user = @sequence.user
  @soundpatterns = @sequence.sound_patterns

  erb :'sequences/show'
end



# BUGGY IMPLEMENTATION, NEEDS TO BE FIXED!!!!!
put '/ui/:id/save' do
  active_beats = []

  sequence = Sequence.find(params[:id])

  # build array of active beats and reset all beats to false
  sequence.sound_patterns.each do |sp|
    active_beats << params[sp.id.to_s] unless params[sp.id.to_s] == nil

    sp.beats.each do |b|
      beat = Beat.find(b.id)
      beat.play = false
      beat.save
    end
  end

  # change active beats to true
  active_beats.flatten.each do |beat_id|
    beat = Beat.find(beat_id)
    beat.play = true
    beat.save
  end

  redirect "/ui/#{params[:id]}"
end

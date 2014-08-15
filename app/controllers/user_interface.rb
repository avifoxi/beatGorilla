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
  sequence = Sequence.find(params[:id])

  sequence.sound_patterns.each do |sp|
    p on_beats = params[sp.id.to_s]

    sp.beats.each do |b|
      beat = Beat.find(b.id)

      if on_beats.include?(b.id.to_s)
        beat.play = true
      else
        beat.play = false
      end

      beat.save
    end

  end


  #create or save by sequence code
  # p params
  redirect "/ui/#{params[:id]}"
end

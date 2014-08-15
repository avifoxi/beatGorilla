eddie = User.create(name: "Eddie", email: "eddiekimosabe@gmail.com", password: "test123")
seq_one = Sequence.create(name: "sequence1", tempo: 120, steps: 8, user_id: eddie.id)

sounds = %w(snare kick cymbal tom)
sounds.each {|sound| sound = Sound.create(name: "#{sound}", url: "www.#{sound}.com")}

soundPs = %w(sp1 sp2 sp3 sp4)
soundPs.each_with_index {|sp, i| sp = SoundPattern.create(sound_id: (i + 1), sequence_id: seq_one.id)}

SoundPattern.all.each do |sp|
  i = 1
  8.times do
    Beat.create(play: [true, false].sample, position: i, sound_pattern_id: sp.id)
    i += 1
  end
end





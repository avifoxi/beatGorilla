eddie = User.create(name: "Eddie", email: "eddiekimosabe@gmail.com", password: "test123")
seq_one = Sequence.create(name: "sequence1", tempo: 120, steps: 8, user_id: eddie.id)
# snare =Sound.create(name: "snare", url:"www.snare.com")
# snare_beat = Beat.create(play: true, position: 1)
# snare_pattern = SoundPattern.create(sound_id: snare.id, sequence_id: seq_one.id)

# snare.sound_pattern_id = snare_pattern.id
# snare.save
# snare_beat.sound_pattern_id = snare_pattern.id
# snare_beat.save

sounds = %w(snare, kick, cymbal, tom)
sounds.each_with_index {|sound, i| sound = Sound.create(name: "#{sound}", url: "www.#{sound}.com", sound_pattern_id: (i + 1))}

soundPs = %w(sp1, sp2, sp3, sp4)
soundPs.each_with_index {|sp, i| sp = SoundPattern.create(sound_id: (i + 1), sequence_id: seq_one.id)}

Sound.all.each do |sound|
  i = 1
  8.times do
    Beat.create(play: true, position: i, sound_pattern_id: sound.id)
    i += 1
  end
end






# kick_beat = Beat.create(play: true, position: 2, sound_pattern_id: snare_pattern.id)
# snare.sound_pattern_id = snare_pattern.id
# snare.save
# snare_beat.sound_pattern_id = snare_pattern.id
# snare_beat.save


# symbol_beat = Beat.create(play: true, position: 3, sound_pattern_id: snare_pattern.id)


# tom_beat = Beat.create(play: true, position: 4, sound_pattern_id: snare_pattern.id)


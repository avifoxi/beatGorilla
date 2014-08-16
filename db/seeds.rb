eddie = User.new(name: "Eddie", email: "eddiekimosabe@gmail.com")
eddie.password = "test123"
eddie.save

seq_one = Sequence.create(name: "sequence1", tempo: 120, steps: 8, user_id: eddie.id)

# TO DO: update the sounds in seed with the routes to actual sounds in public/sounds/mvp_sounds folder, ala: kick => '/sounds/mvp_sounds/Kick_ac_close.wav'

Sound.create(name: 'mvpSnare', url: '/sounds/mvp_sounds/Snare_ac_close.wav')
Sound.create(name: 'mvpKick', url: '/sounds/mvp_sounds/Kick_ac_close.wav')
Sound.create(name: 'mvpCrash1', url: '/sounds/mvp_sounds/Crash1_ac_close.wav')
Sound.create(name: 'mvpCrash2', url: '/sounds/mvp_sounds/Crash2_ac_close.wav')
Sound.create(name: 'mvpHihat', url: '/sounds/mvp_sounds/ClosedHat_ac_close.wav')
Sound.create(name: 'mvpLowTom', url: '/sounds/mvp_sounds/LowTom_ac_close.wav')
Sound.create(name: 'mvpMidTom', url: '/sounds/mvp_sounds/MidTom_ac_close.wav')
Sound.create(name: 'mvpTambr', url: '/sounds/mvp_sounds/Tamb_ac_close.wav')





soundPs = %w(sp1 sp2 sp3 sp4)
soundPs.each_with_index {|sp, i| sp = SoundPattern.create(sound_id: (i + 1), sequence_id: seq_one.id)}


SoundPattern.all.each do |sp|
  i = 1
  8.times do
    Beat.create(play: [true, false].sample, position: i, sound_pattern_id: sp.id)
    i += 1
  end
end





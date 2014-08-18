# {id: seq.id}.to_json

class SequenceJsonPrep

  def initialize(sequence)
    @seq = sequence
  end

  def jsonify
    {
      sequenceId: @seq.id,
      name: @seq.name,
      steps: @seq.steps,
      tempo: @seq.tempo,
      soundPatterns: hashify_sound_patterns(@seq.sound_patterns)
    }.to_json
  end

  def hashify_sound_patterns(sound_patterns)
    soundpattern_hash = {}
    sound_patterns.each do |sp|
      soundpattern_hash[sp.sound.name] = hashify_sound(sp)
    end
    soundpattern_hash
  end

  def hashify_sound(sp)
    sound_hash = {}
    sound_hash['url'] = sp.sound.url
    sound_hash['beats'] = hashify_beats(sp)
    sound_hash
  end

  def hashify_beats(sp)
    beats_hash = {}
    beats = sp.beats
    beats.each do |beat|
      beats_hash[sp.sound.name + beat.position.to_s] = hashify_beat(beat)
    end
    beats_hash
  end

  def hashify_beat(beat)
    beat_hash = {}
    beat_hash['position'] = beat.position
    beat_hash['play'] = beat.play
    beat_hash
  end

end

# prepper.hashify_sound_patterns(Sequence.first.sound_patterns)
 # prepper = SequenceJsonPrep.new(Sequence.first)

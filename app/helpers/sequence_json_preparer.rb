# {id: seq.id}.to_json

class SequenceJsonPrep

  def initialize(sequence)
    @seq = sequence
    @seq_hash = {}
    @sps_hash = {}
  end

  def to_hash
    {
      sequenceId: @seq.id,
      name: @seq.name,
      steps: @seq.steps,
      tempo: @seq.tempo,
      soundPatterns: 'wtf i have not a clue.'
    }
  end

  def hashify_sound_patterns(sound_patterns)
    soundpattern_hash = {}
    sound_patterns.each do |sp|
      soundpattern_hash[sp.sound.name] = hashify_sound(sp.sound)
    end
    soundpattern_hash
  end

  def hashify_sound(sound)
    sound_hash = {}
    sound_hash['url'] = sound.url
    sound_hash['beats'] = hashify_beats(sound.beats)
    sound_hash
  end

  def hashify_beats(beats)
    beats_hash = {}
    beats.each do |beat|
      beats_hash[beat.position] = beat.play
    end
    beats_hash
  end

end

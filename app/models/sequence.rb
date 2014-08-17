class Sequence < ActiveRecord::Base
  has_many :sound_patterns
  belongs_to :user

  has_many :sounds, through: :sound_patterns

  def self.prepTemplate
    seq = Sequence.new
    seq.name = 'Name Your Phat Beat!'
    seq.tempo = 120
    seq.steps = 8
    seq.sounds << Sound.find(1) # snare
    seq.sounds << Sound.find(2) # kick

    seq.sound_patterns.each do |sp|
      seq.steps.times do |i|
        sp.beats << Beat.new(position: i)
      end
    end

    seq
  end

end

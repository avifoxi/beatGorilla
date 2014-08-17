class Sequence < ActiveRecord::Base
  has_many :sound_patterns
  belongs_to :user

  has_many :sounds, through: :sound_patterns

  def self.prepTemplate
    seq = Sequence.new
    seq.name = 'Name Your Phat Beat!'
    seq.tempo = 120
    seq.steps = 8
    # seq.sounds << Sound.find(1)
    # seq.sounds << Sound.find(2)
    seq

  end

end

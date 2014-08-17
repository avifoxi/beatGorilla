class SoundPattern < ActiveRecord::Base
  belongs_to :sequence
  has_many :beats
  belongs_to :sound
end

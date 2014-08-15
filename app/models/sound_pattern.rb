class SoundPattern < ActiveRecord::Base
  belongs_to :sequence
  has_many :beats
  has_one :sound

end

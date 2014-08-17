class SoundPattern < ActiveRecord::Base
  belongs_to :sequence
  has_many :beats, dependent: :destroy
  belongs_to :sound

end

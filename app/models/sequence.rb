class Sequence < ActiveRecord::Base
  has_many :sound_patterns
  belongs_to :user
end

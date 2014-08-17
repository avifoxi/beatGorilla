class Sound < ActiveRecord::Base
 has_many :sound_patterns
 has_many :sequences, through: :sound_patterns
end

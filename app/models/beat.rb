class Beat < ActiveRecord::Base
  belongs_to :sound_pattern
  # Remember to create a migration!
end

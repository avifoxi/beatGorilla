class CreateSoundPatterns < ActiveRecord::Migration
  def change
  	create_table :sound_patterns do |t|
  		t.belongs_to :sound
  		t.belongs_to :sequence

  		t.timestamps
  	end
  end
end

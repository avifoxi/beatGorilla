class CreateBeats < ActiveRecord::Migration
  def change 
  	create_table :beats do |t|
  		t.boolean :play, default: false
  		t.integer :position
  		t.belongs_to :sound_pattern

  		t.timestamps
  	end
  end
end

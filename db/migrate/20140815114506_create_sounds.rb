class CreateSounds < ActiveRecord::Migration
  def change
  	create_table :sounds do |t|
  		t.string :name
  		t.string :url
      t.belongs_to :sound_pattern

  		t.timestamps
  	end
  end
end

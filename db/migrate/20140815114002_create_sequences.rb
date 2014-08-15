class CreateSequences < ActiveRecord::Migration
  def change
  	create_table :sequences do |t|
  		t.string :name
  		t.integer :tempo
  		t.integer :steps
  		t.belongs_to :user

  		t.timestamps
  	end
  end
end

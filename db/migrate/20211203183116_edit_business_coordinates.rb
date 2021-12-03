class EditBusinessCoordinates < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :lat
    remove_column :businesses, :long
    add_column :businesses, :lat, :float
    add_column :businesses, :long, :float
  end
end

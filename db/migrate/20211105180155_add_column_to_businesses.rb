class AddColumnToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :price, :string
    add_column :businesses, :hours, :string
  end
end

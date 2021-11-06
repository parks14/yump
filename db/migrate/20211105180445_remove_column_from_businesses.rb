class RemoveColumnFromBusinesses < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :picture_url
  end
end
